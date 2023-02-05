import { useState } from "react"
import { ObjJsonView } from "../ObjJsonView/ObjJsonView";
import { ObjTableView } from "../ObjTableView/ObjTableView";

interface TokenSectionProps {
  tokenData: any;
}

export function TokenSection({ tokenData }: TokenSectionProps) {
  const [displayTable, setDisplayTable] = useState<boolean>(true);

  return <section>
    <header className="flex-header">
      <h2 className="title">
        Token Header
      </h2>

      <div className="actions">
        <span>
          {
            !displayTable && 
            <button 
              className="small"
              onClick={() => setDisplayTable(true)}
            >Table</button>
          }
        </span>
        <span>
          {
            displayTable &&
            <button 
              className="small"
              onClick={() => setDisplayTable(false)}
            >JSON</button>
          }
        </span>
      </div>
    </header>

    {
      !displayTable && 
      <ObjJsonView obj={tokenData} />
    }
    {
      displayTable && 
      <ObjTableView obj={tokenData} />
    }
  </section>
}