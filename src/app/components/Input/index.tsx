import { InputHTMLAttributes, forwardRef } from "react"
import { Error, InputContainer, InputField, Required, Title } from "./styles"

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  error?: string
  type?: "text" | "password" | "email" | "number" | "tel" | "date"
  isRequired?: boolean
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, type = "text", isRequired = false, ...rest }, ref) => {
    return (
      <>
        <InputContainer>
          <Title>
            {label}: {isRequired ? <Required>*</Required> : null}
          </Title>
          <InputField type={type} {...rest} ref={ref} />
        </InputContainer>
        {error && <Error>{error}</Error>}
      </>
    )
  }
)

Input.displayName = "Input"
