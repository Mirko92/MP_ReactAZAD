import { useEffect, useRef } from "react";
import { useOnInit } from "./CustomHook";
import { MyInput } from "./MyInput";

export function ExampleRef() {
  useOnInit("ExampleRef");

  const myRef = useRef<HTMLInputElement>(null)

  function testFocus() {
    console.log("MyInputRef: ", myRef);
    myRef.current?.focus();
  }
  
  return <section className="mySection mbl3">
    <h3>Test references</h3>

    <div className="df fr fg1">
      <button onClick={() => testFocus()}>
        Set focus on input =&gt;
      </button>

      {/* Native HTML element */}
      {/* <input type="number" ref={myRef}/> */}

      {/* On a custom component */}
      <MyInput value="100" ref={myRef}/>
    </div>
  </section>
}