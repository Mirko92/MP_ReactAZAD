import { MsalProvider } from '@azure/msal-react';
import { 
  PublicClientApplication, 
  LogLevel 
} from "@azure/msal-browser";

import React                       from "react";
import ReactDOM                    from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { loginRequest, msalConfig } from "./configs/authConfig";

// Pages
import Home  from "./pages/Home";

import "./index.css"; 

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

const msalInstance  = new PublicClientApplication({
  ...msalConfig,

  system: {
    loggerOptions: {
      logLevel: LogLevel.Error
    }
  }
});

// Try to perform SsoSilent request.
// If it fails, clear Local and Session storage
msalInstance
  .ssoSilent({
    ...loginRequest,
    state: "Check for an active token"
  })
  .catch(e => {
    console.error("Error on cheking for an active token. \n", e)

    localStorage.clear()
    sessionStorage.clear()
    
  })

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MsalProvider instance={msalInstance}>
      <RouterProvider router={router} />
      {/* <App /> */}
    </MsalProvider>
  </React.StrictMode>
);
