import { useMsal } from "@azure/msal-react";
import { useState } from "react";
import { graphConfig, loginRequest } from "../configs/authConfig";
import { Email } from "../model/EmailModel";
import { boxStyle, legendStyle } from "../utils/styles";
import { EmailComponent } from "./EmailComponent";

export function UserEmails() {

  const { instance, accounts } = useMsal();

  const [ emails, setEmails ] = useState<Email[]>();

  async function loadEmail() {
    const response = await instance.acquireTokenSilent({
      ...loginRequest,
      account: accounts[0]
    });

    const headers = new Headers();

    const bearer = `Bearer ${response.accessToken}`;
    headers.append("Authorization", bearer);

    const options = {
        method: "GET",
        headers: headers
    };

    console.log('request made to Graph API at: ' + new Date().toString());

    fetch(`${graphConfig.baseEndpoint}/me/messages`, options)
        .then(response => response.json())
        .then(response => setEmails(response.value))
        .catch(console.log);

  }

  return <fieldset style={boxStyle}>
    <legend style={{ ...boxStyle, ...legendStyle }}>
      Email 
      <button className="small" onClick={() => loadEmail()}>
        &#8634;
      </button>
    </legend>

    {
      emails?.length 
        ?
        emails.map(e => <EmailComponent email={e}/>)
        :
        <p>Qui verranno elencate le email dell'utente corrente</p>
    }
  </fieldset>
}