import { useMsal } from "@azure/msal-react";
import { useEffect, useState } from "react";
import { myApiRequest } from "../../configs/authConfig";
import { LogOnInit } from "../../decorators/LogOnInit";
import { Category } from "../../model/CategoryModel";
import { boxStyle, legendStyle } from "../../utils/styles";
import "./Category.css";

export function CategoryComponent() {
  const { instance, accounts } = useMsal();
  const [ ctgs, setCtgs ] = useState<Category[]>();

  async function CallAPI() {
    let response ;
    try {
      response = await instance.acquireTokenSilent({
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
          .catch((e) => console.error(e));
    } catch (error) {
      console.error("error", error);
    }
  }

  useEffect(() => {
    console.log("Category Component On Init");
  }, []);

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
            <div className="category" key={ctg.id}>
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