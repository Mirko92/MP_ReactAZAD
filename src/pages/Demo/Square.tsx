import "./Square.scss";

interface ISquareProps {
  color: string; 
}

export function Square(props: ISquareProps) {
  return <span>
    <span
      className="square" 
      style={{backgroundColor: props.color}} 
    />
  </span>
}

export function OrangeSquare() {
  return <Square color="orange" />;
}

export function ThreeColoredSquares() {
  return <>{
    [ "yellow", "#e9e9a0", "cyan"].map( c => <Square color={c} key={c} />)
  }</>;
}