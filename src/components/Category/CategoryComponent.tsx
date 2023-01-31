import { useMsal } from "@azure/msal-react";
import { useState } from "react";
import { myApiRequest } from "../../configs/authConfig";
import { Category } from "../../model/CategoryModel";
import { boxStyle, legendStyle } from "../../utils/styles";
import "./Category.css";

export function CategoryComponent() {
  const { instance, accounts } = useMsal();
  const [ ctgs, setCtgs ] = useState<Category[]>();

  async function CallAPI() {
    const response = await instance.acquireTokenSilent({
      ...myApiRequest,
      account: accounts[0],
    });

    const headers = new Headers();

    const bearer = `Bearer ${response.accessToken}`;
    headers.append("Authorization", bearer);

    const options = {
        method: "GET",
        headers: headers
    };

    console.log('request made to Custom API at: ' + new Date().toString());
    console.log("Using token: ", response.accessToken);

    fetch(`https://localhost:7247/api/Categories`, options)
        .then(response => response.json())
        .then(response => setCtgs(response))
        .catch(console.log);
  }

  return <fieldset style={boxStyle}>
    <legend style={{ ...boxStyle, ...legendStyle }}>
      Categories API
      <button className="small" onClick={CallAPI}>&#8634;</button>
    </legend>

    <div>
      {
        ctgs 
          ? 
          ctgs.map(ctg => 
            <div className="category">
              <span>{ctg.name}</span>
              <button className="small"> =&gt; </button>
            </div>
          )
          :
          <p>Test chiamata api/Categories</p>
      }
    </div>
  </fieldset>
}