import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal }              from "@azure/msal-react"

import reactLogo        from "../assets/react.svg"
import azad             from "../assets/az_ad.png"
import { loginRequest } from "../configs/authConfig"
import { UserInfo   }   from "../components/UserInfo"
import { useLoader  }   from "../utils/useLoader"

import "../App.css"
import { useEffect } from "react"
import { UserEmails } from "../components/UserEmails"

function Home() {
  const { instance: msApp } = useMsal();

  const { loading, handleLoader } = useLoader()

  async function signin() {
    console.log("SignIn", msApp)

    const response = await handleLoader(msApp.loginPopup(loginRequest))

    console.log("SignIn response: ", response)
  }

  async function signout() {
    console.log("SignOut", msApp )

    const response = await handleLoader(msApp.logoutPopup({
      account: msApp.getActiveAccount()
    }))

    console.log("SignOut response: ", response)
  }

  useEffect( () => {
    console.log("init")
  }, [])

  return (
    <div className="App">
      <header>
        <a  target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a target="_blank">
          <img src={azad} className="logo" alt="AZ AD Logo" />
        </a>
      </header>

      <h1>Microsoft Identity</h1>
      <h2>Vite + React</h2>
      <h3>MSAL-React</h3>

      {
        !loading 
          ? <>
            <AuthenticatedTemplate>
              <UserInfo />

              <UserEmails /> 

              <div className="card">
                <button onClick={signout}>
                  Sign Out
                </button>
              </div>
            </AuthenticatedTemplate>

            <UnauthenticatedTemplate>
              <div className="card">
                <button onClick={signin}>
                  Sign In 
                </button>
              </div>
            </UnauthenticatedTemplate>
          </>
          : <>
          Loading...
          </>
      }
    
      
      <p className="read-the-docs">
        Testing Microsoft Identity with MSAL-REACT
      </p>
    </div>
  )
}

export default Home
