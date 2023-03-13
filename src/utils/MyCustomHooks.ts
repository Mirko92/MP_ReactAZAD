import { useState } from "react";

interface IToggler {
  setTrue: () => void;
  setFalse: () => void;
  toggle: () => void;
}

export function useBoolean(initValue?: boolean): [ boolean, IToggler] {

  const [ value, setValue ] = useState<boolean>(initValue as any);

  function setTrue() {
    setValue(true);
  }

  function setFalse() {
    setValue(false);
  }

  function toggle() {
    setValue(v => !v);
  }


  return [
    value,

    {
      setTrue, setFalse, toggle
    }
  ]
  
}