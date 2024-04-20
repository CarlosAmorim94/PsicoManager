import { InputHTMLAttributes, forwardRef } from "react"
import {
  Error,
  FieldContainer,
  InputContainer,
  InputField,
  Title,
} from "./styles"

type InputLoginProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  error?: string
  type?: "text" | "password" | "email" | "number" | "tel" | "date"
}

export const InputLogin = forwardRef<HTMLInputElement, InputLoginProps>(
  ({ label, error, type = "text", ...rest }, ref) => {
    return (
      <>
        <InputContainer>
          <Title>{label}</Title>
          <FieldContainer>
            <InputField type={type} {...rest} ref={ref} />
          </FieldContainer>
        </InputContainer>
        {error && <Error>{error}</Error>}
      </>
    )
  }
)

InputLogin.displayName = "InputLogin"
