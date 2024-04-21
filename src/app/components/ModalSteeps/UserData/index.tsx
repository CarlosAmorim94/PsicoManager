"use client"
import { FC } from "react"
import { CustomButton } from "../../CustomButton"
import { CustomSelect } from "../../CustomSelect"
import { Input } from "../../Input"
import { InputMasked } from "../../Input/InputMasked"
import {
  AddressArea,
  BankArea,
  ButtonArea,
  Container,
  DataArea,
  Form,
} from "./styles"

interface BankProps {
  bank: string
  code: string
}

const banks = [
  { label: "Banco do Brasil", value: "Banco do Brasil" },
  { label: "Bradesco", value: "Banco do Brasil" },
  { label: "Itaú", value: "Itaú" },
  { label: "Santander", value: "Santander" },
  { label: "Caixa", value: "Caixa" },
  { label: "NuBank", value: "NuBank" },
]

const accountTypes = [
  { label: "Conta Corrente", value: "Conta Corrente" },
  { label: "Poupança", value: "Poupança" },
]

export const UserData: FC = () => {
  return (
    <Container>
      <Form>
        <BankArea>
          <CustomSelect
            label="Banco"
            onChange={() => {}}
            options={banks}
            isRequired
          />
          <CustomSelect
            label="Tipo de conta"
            onChange={() => {}}
            options={accountTypes}
            isRequired
          />
          <Input label="Agência" isRequired />
          <Input label="Conta com dígito" isRequired />
        </BankArea>
        <DataArea>
          <CustomSelect
            label="Tipo de pessoa"
            options={[
              { label: "Física", value: "Física" },
              { label: "Jurídica", value: "Jurídica" },
            ]}
            isRequired
            onChange={() => {}}
          />
          <InputMasked label={"CPF"} mask={"cpf"} />
          <InputMasked label={"Telefone"} mask={"mobilePhone"} />
          <Input label="Nome Completo" isRequired />
        </DataArea>
        <AddressArea>
          <InputMasked label="CEP" mask="cep" />
          <CustomSelect options={[]} onChange={() => {}} label="Estado" />
          <Input label="Cidade" isRequired />
          <Input label="Endereço" isRequired />
          <Input label="Número" isRequired />
        </AddressArea>
      </Form>
      <ButtonArea>
        <CustomButton
          variant="secondary"
          type={"button"}
          onClick={() => {}}
          label={"Cancelar"}
        />
        <CustomButton
          type={"button"}
          variant="primary"
          label={"Próximo"}
          onClick={() => {}}
        />
      </ButtonArea>
    </Container>
  )
}
