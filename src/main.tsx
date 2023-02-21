import { MsalProvider } from '@azure/msal-react';

import React              from "react";
import ReactDOM           from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { MyThemeProvider }  from './theme/theme';
import router               from "./router";
import msalInstance         from './msal';

import "./index.scss"; 

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MyThemeProvider>
      <MsalProvider instance={msalInstance}>
        <RouterProvider router={router} />
      </MsalProvider>
    </MyThemeProvider>
  </React.StrictMode>
);
