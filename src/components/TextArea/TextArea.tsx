import "./TextArea.scss";

interface TextAreaProps {
  text     ?: string;
  isLoading : boolean;
}

export function TextArea({ text, isLoading }: TextAreaProps) {


  return <div className="text-area hvr-grow-shadow">
    {
      isLoading
        ? 'isLoading'
        :  text?.split('.')
                .map( (x,i) => (<>
                  <span className={`token-part-${i+1}`}>{x}</span>
                  {i < 2 && <span><b>.</b></span>}
                </>))
    }
  </div>
}