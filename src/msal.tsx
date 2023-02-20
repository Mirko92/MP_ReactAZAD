import { LogLevel, PublicClientApplication } from "@azure/msal-browser";
import { loginRequest, msalConfig } from "./configs/authConfig";

const msalInstance  = new PublicClientApplication({
  ...msalConfig,

  system: {
    loggerOptions: {
      logLevel: LogLevel.Error
    }
  }
});

const accounts = msalInstance.getAllAccounts();
console.log(`Found #${accounts.length} accounts`);
console.log(accounts);

// Try to perform SsoSilent request.
// If it fails, clear Local and Session storage
msalInstance
  .ssoSilent({
    ...loginRequest,
    state: "Check for an active token",
    account: accounts[0],
  })
  .catch(e => {
    console.error("Error on cheking for an active token. \n", e)

    localStorage.clear()
    sessionStorage.clear()
  });


export default msalInstance;