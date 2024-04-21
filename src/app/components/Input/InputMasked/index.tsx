"use client"
import {
  cep,
  cnpj,
  cpf,
  currency,
  mobilePhone,
  number,
  phone,
  rg,
  uf,
} from "@/app/utils/masks"
import { InputHTMLAttributes, forwardRef, useCallback } from "react"

import { Error, InputContainer, InputField, Required, Title } from "../styles"

type InputMaskedProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  error?: string
  isRequired?: boolean
  mask:
    | "cep"
    | "rg"
    | "cpf"
    | "phone"
    | "currency"
    | "date"
    | "cnpj"
    | "uf"
    | "mobilePhone"
    | "number"
}

export const InputMasked = forwardRef<HTMLInputElement, InputMaskedProps>(
  ({ label, error, mask, isRequired = false, ...rest }, ref) => {
    const handleKeyUp = useCallback(
      (event: React.FormEvent<HTMLInputElement>) => {
        if (mask === "cep") {
          cep(event)
        }
        if (mask === "cpf") {
          cpf(event)
        }
        if (mask === "cnpj") {
          cnpj(event)
        }
        if (mask === "phone") {
          phone(event)
        }
        if (mask === "mobilePhone") {
          mobilePhone(event)
        }
        if (mask === "rg") {
          rg(event)
        }
        if (mask === "currency") {
          currency(event)
        }
        if (mask === "uf") {
          uf(event)
        }
        if (mask === "number") {
          number(event)
        }
      },
      [mask]
    )

    return (
      <>
        <InputContainer>
          <Title>
            {label}: {isRequired ? <Required>*</Required> : null}
          </Title>
          <InputField {...rest} ref={ref} onKeyUp={handleKeyUp} />
        </InputContainer>
        {error && <Error>{error}</Error>}
      </>
    )
  }
)

InputMasked.displayName = "InputMasked"
