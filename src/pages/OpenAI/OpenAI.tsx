import { useState } from "react";

export function OpenAI() {

  const [ prompt, setPrompt ] = useState<string>("");

  async function CallAPI() {
    const headers = new Headers();

    const bearer = `Bearer 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`;
    headers.append("Authorization", bearer);
    headers.append("Content-Type", "application/json");

    const options = {
      method: "POST",
      headers: headers,
      body: JSON.stringify({
        'model'      : 'text-davinci-003',
        'prompt'     : `jwt token claim named ${prompt}`,
        'temperature': 0,
        'max_tokens' : 100
      })
    };

    fetch(`https://api.openai.com/v1/completions`, options)
      .then(response => response.json())
      .catch(console.log);
  }

  return <>
    <div>
      <div>
        <label>Claim's Name</label>
        <input  type="text" 
                value={prompt} 
                onChange={(e) => setPrompt(e.target.value)} 
        />
      </div>
      <button className="small" onClick={CallAPI}>
        TEST
      </button>
    </div>
  </>
}