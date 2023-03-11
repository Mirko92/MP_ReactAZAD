import { forwardRef } from "react";
import "./MyInput.scss";

interface MyInputProps {
  value: string;
  onChange?: (value: string) => void; 
}

// export function MyInput({ value, onChange }: MyInputProps) {
//   return <input 
//     className= "myInputNumber"
//     type     = "text"
//     value    = {value}
//     onChange = {(e) => onChange?.call(null, e.target.value)}
//   />;
// }

export const MyInput = forwardRef(
  ({ value, onChange }: MyInputProps, ref: any) => {
    return <> <input 
      ref       = {ref}
      className = "myInputNumber"
      type      = "text"
      placeholder="ciao"
      value     = {value}
      onChange  = {(e) => onChange?.call(null, e.target.value)}
    /></>;
  }
)