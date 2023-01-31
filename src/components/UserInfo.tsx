import { useAccount, useMsal } from "@azure/msal-react";
import { useEffect, useState } from "react"
import { loginRequest } from "../configs/authConfig";
import { User } from "../model/User";
import { callMsGraph } from "../utils/graph_svc";
import { boxStyle, legendStyle } from "../utils/styles";
import { useLoader } from "../utils/useLoader";


const infoStyle: React.CSSProperties = {
  maxWidth: "90vw",
  wordBreak: "break-all",
  whiteSpace: "break-spaces",
}

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

  async function Signout() {
    const response = await handleLoader(instance.logoutPopup({
      account: instance.getActiveAccount()
    }))

    console.log("SignOut response: ", response)
  }

  return  <fieldset style={boxStyle}>
    
    <legend style={{ ...boxStyle, ...legendStyle }}>
      User Info
      {/* <button className="small" title="sign in">&#8815;</button> */}
      <button 
        className="small" 
        title="sign out"
        onClick={Signout}
      >&#8814;</button>
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
          <pre style={infoStyle}>
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