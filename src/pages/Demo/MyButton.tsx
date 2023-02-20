export function MyButton(props: any) {
  return <button type="button" onClick={() => props.onClick(props.index)}>
    {props.label} 
    {/* {props.children} */}
  </button>
}