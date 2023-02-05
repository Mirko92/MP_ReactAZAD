import { useEffect } from "react";
import * as claimDescs from "./ClaimDescriptions.json";

interface ObjTableViewProps {
    obj: any;
}

export function ObjTableView({ obj }: ObjTableViewProps) {

  function getValue(key: string){
      return JSON.stringify(obj[key]);
  }

  function getDesc(key: string){
      return (claimDescs as any)[key] as string;
  }

    return <table>
      <colgroup>
        <col style={{width: '20%'}}></col>
        <col style={{width: '40%'}}></col>
        <col style={{width: '40%'}}></col>
      </colgroup>

      <thead>
        <tr>
          <th>Claim</th>
          <th>Value</th>
          <th>Desc</th>
        </tr>
      </thead>

      <tbody>
        {
          obj 
            ? Object.keys(obj).map(k => (
                <tr key={`obj${k}`}>
                  <td>{k}</td>
                  <td className="word-wrap">{getValue(k)}</td>
                  <td className="word-wrap">{getDesc(k)}</td>
                </tr>
              ))
            : <tr><td colSpan={2}>No Token</td></tr>
        }
      </tbody>
    </table>;
}