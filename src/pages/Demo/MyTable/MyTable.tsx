import { PropsWithChildren } from "react";

interface IMyTableProps extends PropsWithChildren {
  items: any[];
}

export function MyTable(props: IMyTableProps) {

  const children = Array.isArray(props.children)
    ? props.children
    : [ props.children ];

  return <>
    <table>
      <thead>
        {
          children.map(c => <th>{c.props.name}</th>)
        }
      </thead>

      <tbody>
        {
          props.items?.map( row => {
            return <tr>
              {
                children.map(c => {
                  if (c.props.children) {
                    return <td>{c.props.children(row, c.props.fieldName)}</td>
                  } else {
                    return <td>{row[c.props.fieldName]}</td>;
                  }
                })
              }
            </tr>
          })
        }
        
      </tbody>
    </table>
  </>
}

export interface IMyColumnProps<T> {
  children?: (item: T, fieldName: keyof T) => JSX.Element;
  name: string;
  fieldName: keyof T; 
}

export function MyColumn<T>( props : IMyColumnProps<T>) 
{ return null; }