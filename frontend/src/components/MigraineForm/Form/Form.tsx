import { ReactNode, FormEvent } from "react"

interface FormProps {
  children: ReactNode;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

const Form = ({ children, onSubmit }: FormProps) => {
  return (
    <form onSubmit={onSubmit}>
      {children}
      <button className="form-submit-btn" type="submit">
        Submit
      </button>
    </form>
  )
}

export default Form
