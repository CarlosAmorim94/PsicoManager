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
} from "@utils/masks"
import { InputHTMLAttributes, forwardRef, useCallback } from "react"

import {
  Error,
  FieldContainer,
  InputContainer,
  InputField,
  Title,
} from "../styles"

type InputMaskedProps = InputHTMLAttributes<HTMLInputElement> & {
  $variant?: "primary" | "secondary"
  label: string
  hasBorder?: boolean
  error?: string
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
  (
    { $variant = "primary", label, error, mask, hasBorder = true, ...rest },
    ref
  ) => {
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
        <InputContainer $variant={$variant} hasBorder={hasBorder}>
          <Title>{label}</Title>
          <FieldContainer>
            <InputField
              $variant={$variant}
              onKeyUp={handleKeyUp}
              {...rest}
              ref={ref}
            />
          </FieldContainer>
        </InputContainer>
        {error && <Error>{error}</Error>}
      </>
    )
  }
)

InputMasked.displayName = "InputMasked"
