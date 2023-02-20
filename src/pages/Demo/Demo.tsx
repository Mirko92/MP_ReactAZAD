import { useState } from "react";
import { ExampleInternalStateChanges } from "./ExampleInternalState";
import "./Demo.scss";
import { ExampleRef } from "./ExampleRef";
import { MyButton } from "./MyButton";
import { HOC } from "./HOC";
import { Section } from "./Section";

export function Demo() {

  const [ a, setA ] = useState<number>(10);
  const [ b, setB ] = useState<number>(21);

  function handleClick(index: any) {
    console.log(`Index:`, index);
  }

  function submit(index: number) {
    console.log("è stato fatto submit", index);
  }

  function onCalc(somma: number) {
    console.log("On calc", somma);
  }

  return <>
    <h1>DEMO</h1>
    
    <section className="mySection mbl3 df fr fg1">
      <MyButton 
        label   = "On Click with params"
        index   = {922}
        onClick = {submit}
      /> 
      
      <button onClick={handleClick}>
        On click by reference
      </button>
    </section>

    <section className="mySection mbl3">
      <ExampleInternalStateChanges a={a} b={b} onCalc={onCalc} />
    </section>

    <ExampleRef />

    <Section >
      <HOC />
    </Section>
  </>
}

