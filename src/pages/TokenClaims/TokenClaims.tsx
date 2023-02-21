import { useMsal } from "@azure/msal-react"
import { ChoiceGroup, IChoiceGroupOption } from "@fluentui/react";
import { useEffect, useState } from "react";
import { TextArea } from "../../components/TextArea/TextArea";
import { TokenSection } from "../../components/TokenSection/TokenSection";
import { loginRequest } from "../../configs/authConfig";


enum TokenType {
  ID_TOKEN = "ID TOKEN",
  ACCESS_TOKEN = "ACCESS_TOKEN"
}

const options: IChoiceGroupOption[] = [
  { key: TokenType.ID_TOKEN,      text: TokenType.ID_TOKEN,}, 
  { key: TokenType.ACCESS_TOKEN,  text: TokenType.ACCESS_TOKEN}
];

export function TokenClaims() {

  const { instance, accounts } = useMsal();

  const [ token, setToken ] = useState<string>();

  async function loadToken(useIdToken: boolean = false) {
    const response = await instance.acquireTokenSilent({
      ...loginRequest,
      account: accounts[0]
    });

    setToken(useIdToken ? response.idToken : response.accessToken);
  }

  useEffect(() => {
    loadToken();
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

  
  const [ selectedKey, setSelectedKey ] = useState<TokenType>(TokenType.ACCESS_TOKEN);

  function onChange(option: IChoiceGroupOption | undefined) {
    setSelectedKey(option?.key as TokenType);
  };

  useEffect(() => {
    loadToken(selectedKey === TokenType.ID_TOKEN)
  }, [selectedKey])
  
  return <>
    <div>
      <ChoiceGroup 
        selectedKey={selectedKey} 
        options={options} 
        onChange={ (e, opt) => onChange(opt)} 
        label="Pick one" 
      />
    </div>

    <TextArea text={token} isLoading={!token} />

    <TokenSection tokenData={tokenHeader} />
    <TokenSection tokenData={tokenBody}   />

    <section className="signature">
      <h2>Token Signature</h2>

      {tokenSignature}
    </section>
  </>
}