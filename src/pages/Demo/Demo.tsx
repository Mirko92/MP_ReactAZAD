import { useState } from "react";
import { ExampleInternalStateChanges } from "./ExampleInternalState";
import "./Demo.scss";
import { ExampleRef } from "./ExampleRef";
import { MyButton } from "./MyButton";
import { HOC } from "./HOC";
import { Section } from "./Section";
import { MyColumn, MyTable } from "./MyTable/MyTable";
import { IPerson } from "../../model/IPerson";

const items: IPerson[] = [
  {name: "Mirko",   surname: "Petrelli",  address: "Da qualche parte 1"},
  {name: "Silvia",  surname: "Canu",      address: "Da qualche parte 2"},
  {name: "Linda",   surname: "Bettini",   address: "Da qualche parte 3"},
  {name: "Monica",  surname: "Cani",      address: "Da qualche parte 4"},
];

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

    <MyTable items={items}>
      <MyColumn 
        name="Name"    
        fieldName="name">
        { (i,k) => <b>{i[k]}</b> }
      </MyColumn>

      <MyColumn<IPerson>
        name="Surname"  
        fieldName="surname"
      >
        { (i,k) => <i>{i[k]}</i> }
      </MyColumn>

      <MyColumn
        name="Address"      
        fieldName="address"
      />
    </MyTable>

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

