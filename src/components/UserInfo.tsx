import { useAccount, useMsal } from "@azure/msal-react";
import { useEffect, useState } from "react"
import { loginRequest } from "../configs/authConfig";
import { User } from "../model/User";
import { callMsGraph } from "../utils/graph_svc";
import { useLoader } from "../utils/useLoader";

const boxStyle: React.CSSProperties = {
  textAlign   : "left",
  borderRadius: "10px",
  marginTop   : "10px"
};

const legendStyle: React.CSSProperties = {
  padding   : "0.25rem 0.5rem",
  border    : "1px solid white",
  display   : "flex",
  gap       : ".5rem",
  alignItems: "center"
};

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
    
    <legend style={{ ...boxStyle, ...legendStyle }}>
      User Info
    </legend>

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

        <div 
          className="pointer"
          onClick={() => setDisplayAll(!displayAll)}>
          <a>
            {
              displayAll
                ? <small>Hide</small>
                : <small>Show all</small>
            }
          </a>
        </div>

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