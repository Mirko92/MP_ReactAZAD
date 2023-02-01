import { useMsal } from "@azure/msal-react"
import { useEffect, useState } from "react";
import { loginRequest } from "../../configs/authConfig";

const tokenBoxStyle: React.CSSProperties = {
  width: "50vw",
  height: "min(50vh, 300px)",
  overflow: "scroll",
  wordBreak: "break-all"
}

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


  const [ tokenHeader,    setTokenHeader    ] = useState<string>();
  const [ tokenBody,      setTokenBody      ] = useState<string>();
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

    <div style={tokenBoxStyle}>
      { token || 'isLoading' }
    </div>

    <section className="header">
      <h2>Token Header</h2>

      <pre>{JSON.stringify(tokenHeader, null, 2)}</pre>
    </section>

    <section className="body">
      <h2>Token Body</h2>

      <pre>{JSON.stringify(tokenBody, null, 2)}</pre>
    </section>

    <section className="signatyre">
      <h2>Token Signature</h2>

      {tokenSignature}
    </section>
  </>
}