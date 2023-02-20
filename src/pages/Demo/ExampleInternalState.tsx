import { FormEvent, useEffect, useState } from "react";

interface IExampleInternalStateChangesProps {
  a: number;
  b: number;

  onCalc: (somma: number) => void;
}

export function ExampleInternalStateChanges(props: IExampleInternalStateChangesProps) {

  const [ a, setA ] = useState<number>(0);
  const [ b, setB ] = useState<number>(0);

  function onInit() {
    console.log("OnInit");

    setA(props.a);
    setB(props.b);
  }

  useEffect(() => {
    onInit();
  }, []);

  useEffect(() => {
    console.log("Qualcosa è cambiato");
  });
  
  useEffect(() => {
    console.log("A è cambiato");
  }, [ a ]);
  
  useEffect(() => {
    console.log("B è cambiato");
  }, [ b ]);


  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    console.log("Handle submit");
    props.onCalc(a + b);
  }
  
  return <form 
    className="form form-vertical"
    onSubmit={handleSubmit}>
    
    <h3>Handle internal state changes</h3>

    <input type="number" value={a} onChange={(e) => setA(+e.target.value)}/>
    <input type="number" value={b} onChange={(e) => setB(+e.target.value)}/>

    <button>Somma</button>
  </form>
}












function InlineCalc(props: IExampleInternalStateChangesProps) {

  const [ a, setA ] = useState<number>(0);
  const [ b, setB ] = useState<number>(0);
  const [ res, setRes ] = useState<number>();

  function onInit() {
    console.log("OnInit");

    setA(props.a);
    setB(props.b);
  }

  useEffect(() => {
    onInit();
  }, []);

  useEffect(() => {
    console.log("Qualcosa è cambiato");
    setRes( a + b );
  });
  
  useEffect(() => {
    console.log("A è cambiato");
  }, [ a ]);
  
  useEffect(() => {
    console.log("B è cambiato");
  }, [ b ]);


  function handleSubmit(e:FormEvent) {
    e.preventDefault();
    console.log("Handle submit");
  }
  
  return <form 
    className="form form-vertical"
    onSubmit={handleSubmit}>

    <div className="numbers">
      <input type="number" value={a} onChange={(e) => setA(+e.target.value)}/>
      +
      <input type="number" value={b} onChange={(e) => setB(+e.target.value)}/>
      =
      <input  type="number" 
              defaultValue={res}
              readOnly
      />
    </div>
  </form>
}
