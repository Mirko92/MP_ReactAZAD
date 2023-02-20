import { ChangeEvent, useEffect, useState } from "react";

export function useOnInit(componentName: string) {
  useEffect(() => {
    console.log(`${componentName} - Something changed`);
  })
}

export function useStringState() {
  const [value, setX] = useState<string>();

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    setX(e.target?.value);
  }

  return [ value, onChange ];
}