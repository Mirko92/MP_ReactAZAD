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
        :  text
    }
  </div>
}