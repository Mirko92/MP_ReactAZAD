import { MsalProvider } from '@azure/msal-react';

import React              from "react";
import ReactDOM           from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import router       from "./router";
import msalInstance from './msal';

import "./index.css"; 

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MsalProvider instance={msalInstance}>
      <RouterProvider router={router} />
    </MsalProvider>
  </React.StrictMode>
);
