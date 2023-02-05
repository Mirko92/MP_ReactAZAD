import { useMsal } from "@azure/msal-react"
import { useEffect, useState } from "react";
import { ObjJsonView } from "../../components/ObjJsonView/ObjJsonView";
import { ObjTableView } from "../../components/ObjTableView/ObjTableView";
import { TextArea } from "../../components/TextArea/TextArea";
import { TokenSection } from "../../components/TokenSection/TokenSection";
import { loginRequest } from "../../configs/authConfig";


export function TokenClaims() {

  const { instance, accounts } = useMsal();

  const [ token, setToken ] = useState<string>();

  async function getToken() {
    const response = await instance.acquireTokenSilent({
      ...loginRequest,
      account: accounts[0]
    });

    setToken(response.accessToken);
  }

  useEffect(() => {
    getToken();
  }, []);

  const [ tokenHeader,    setTokenHeader    ] = useState<any>();
  const [ tokenBody,      setTokenBody      ] = useState<any>();
  const [ tokenSignature, setTokenSignature ] = useState<string>();
  useEffect(() => {
    if (token) {
      const [header, body, signature] = token.split('.');
      setTokenHeader(JSON.parse(atob(header)));
      setTokenBody(JSON.parse(atob(body)));
      setTokenSignature(signature);
    }
  }, [token])

  return <>

    <TextArea text={token} isLoading={!token} />

    <TokenSection tokenData={tokenHeader} />
    <TokenSection tokenData={tokenBody}   />

    <section className="signatyre">
      <h2>Token Signature</h2>

      {tokenSignature}
    </section>
  </>
}