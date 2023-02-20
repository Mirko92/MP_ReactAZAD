import { OrangeSquare, Square, ThreeColoredSquares } from "./Square";

export function HOC() {
  return <>
    <h3>High order components</h3>

    <Square color="red"/>
    <Square color="red"/>
    <Square color="red"/>

    <OrangeSquare />
    <OrangeSquare />
    <OrangeSquare />

    <ThreeColoredSquares />

  </>
}