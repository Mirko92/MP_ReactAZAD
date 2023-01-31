import { Email } from "../model/EmailModel";

interface EmailComponentProps {
  email: Email;
}

export function EmailComponent({ email }: EmailComponentProps) {
  return <div> 
    <header>
      <h5>{email?.subject}</h5>
    </header>
    
    <h6>{email?.from?.emailAddress.address}</h6>
  </div>
}