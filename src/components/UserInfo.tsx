import { useAccount, useMsal } from "@azure/msal-react";
import { useEffect, useState } from "react"
import { loginRequest } from "../configs/authConfig";
import { User } from "../model/User";
import { callMsGraph } from "../utils/graph_svc";
import { useLoader } from "../utils/useLoader";

export function UserInfo() {
  const { instance, accounts } = useMsal();
  const { loading, handleLoader } = useLoader();

  const [ user, setUser ]            = useState<User>();
  const [ displayAll, setDisplayAll] = useState<boolean>(false);

  useEffect(() => {
    fetchUser()
  }, [])
  
  async function fetchUser() {
    const response = await instance.acquireTokenSilent({
      ...loginRequest,
      account: accounts[0]
    })

    const _user = await handleLoader(
      callMsGraph(response.accessToken)
    )

    setUser(_user)
  }

  return  <fieldset className="userinfo">
    <h2>User Info</h2>

    {
      !loading
      ? <>
        <section>
          <div className="userfield">
            <span><strong>Name</strong></span>
            <span><u>{user?.displayName}</u></span>
          </div>
          <div className="userfield">
            <span><strong>Email</strong></span>
            <span>{user?.userPrincipalName}</span>
          </div>
        </section>

        <a href="javascript:void(0)" onClick={() => setDisplayAll(!displayAll)}>
          {
            displayAll
              ? <small>Hide</small>
              : <small>Show all</small>
          }
        </a>

        {
          displayAll && 
          <pre>
            { JSON.stringify(user, null, 2) }
          </pre>
        }
      </>
      : <>
      Loading...
      </>
    }
  </fieldset>
}