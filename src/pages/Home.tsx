import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal }              from "@azure/msal-react"

import { loginRequest } from "../configs/authConfig"
import { UserInfo   }   from "../components/UserInfo"
import { useLoader  }   from "../utils/useLoader"

import "../App.css"
import { UserEmails        }  from "../components/UserEmails"
import { AppHeader         }  from "../components/AppHeader"
import { CategoryComponent }  from "../components/Category/CategoryComponent"

function Home() {
  const { instance } = useMsal();

  const { loading, handleLoader } = useLoader()

  async function signin() {
    const response = await handleLoader(instance.loginPopup(loginRequest))

    console.log("SignIn response: ", response)
  }

  return (
    <div className="App">
      <AppHeader />

      <h1>Microsoft Identity</h1>
      <h2>Vite + React</h2>
      <h3>MSAL-React</h3>

      {
        !loading 
          ? <>
            <AuthenticatedTemplate>
              <UserInfo   />
              <UserEmails /> 
              <CategoryComponent    />
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
