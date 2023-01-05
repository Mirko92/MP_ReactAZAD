import { LogLevel, BrowserCacheLocation } from "@azure/msal-browser";

export const msalConfig = {
    auth: {
        // SINGLE TENANT
        // clientId   : "255b3692-6379-41d9-a70a-2e0451689799",
        // authority  : "https://login.microsoftonline.com/410c9be1-35de-42ad-8041-1fdf9413e05b",
        
        // MULTI TENANT + PERSONAL 
        clientId   : "649cd44f-f433-4e77-8252-ce46ad8759bc",
        authority  : "https://login.microsoftonline.com/common",

        redirectUri: "http://localhost:5173/"
    },
    cache: {
        // This configures where your cache will be stored
        cacheLocation: BrowserCacheLocation.SessionStorage, 

        // Set this to "true" if you are having issues on IE11 or Edge
        storeAuthStateInCookie: false, 
    },
    system: {	
        loggerOptions: {	
            loggerCallback: (level: LogLevel, message: string, containsPii: boolean) => {	
                if (containsPii) {		
                    return;		
                }		
                switch (level) {
                    case LogLevel.Error:
                        console.error(message);
                        return;
                    case LogLevel.Info:
                        console.info(message);
                        return;
                    case LogLevel.Verbose:
                        console.debug(message);
                        return;
                    case LogLevel.Warning:
                        console.warn(message);
                        return;
                    default:
                        return;
                }	
            }	
        }	
    }
};

export const loginRequest = {
    scopes: [
        "User.Read",
        "Mail.Read"
    ]
};

export const graphConfig = {
    graphMeEndpoint: "https://graph.microsoft.com/v1.0/me"
};