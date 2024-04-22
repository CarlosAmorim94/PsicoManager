"use client"
import { statesList } from "@/app/utils/states"
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
import { useUserData } from "./useUserData"

export const UserData: FC = () => {
  const {
    banks,
    accountType,
    setAccountType,
    stateValue,
    setStateValue,
    submitFirstForm,
    handleSubmit,
    register,
    errors,
    isSubmitting,
    setValue,
  } = useUserData()

  return (
    <Container>
      <Form id="userDataForm">
        <BankArea>
          <CustomSelect
            label="Banco"
            onChange={(e) => {
              if (e) {
                setValue("bankCode", e.value)
              }
            }}
            options={banks}
            isRequired
            error={errors.bankCode?.message}
          />
          <CustomSelect
            value={accountType as any}
            label="Tipo de conta"
            allowClear={true}
            placeholder={"Tipo de conta"}
            options={[
              { label: "Corrente", value: "Corrente" },
              { label: "Poupança", value: "Poupança" },
            ]}
            onChange={(e) => {
              if (e && e.label === "Corrente") {
                setValue("bankAccountType", "checking")
                setAccountType("Conta corrente")
              } else if (e && e.label === "Poupança") {
                setValue("bankAccountType", "savings")
                setAccountType("Poupança")
              }
            }}
          />
          <Input
            label="Agência"
            isRequired
            {...register("bankAccountAgency")}
            error={errors.bankAccountAgency?.message}
          />
          <Input
            label="Conta com dígito"
            isRequired
            {...register("bankAccountNumber")}
            error={errors.bankAccountNumber?.message}
          />
        </BankArea>
        <DataArea>
          <CustomSelect
            label="Tipo de pessoa"
            options={[
              { label: "Física", value: "physical person" },
              { label: "Jurídica", value: "legal person" },
            ]}
            isRequired
            onChange={(e) => {
              if (e?.label === "Jurídica") {
                setValue("typePerson", "legal person")
              }
              if (e?.label === "Física") {
                setValue("typePerson", "physical person")
              }
            }}
          />
          <InputMasked
            label={"CPF"}
            mask={"cpf"}
            {...register("cpf")}
            error={errors.cpf?.message}
            isRequired
          />
          <InputMasked
            label={"Telefone"}
            mask={"mobilePhone"}
            {...register("mobilePhone")}
            error={errors.mobilePhone?.message}
            isRequired
          />
          <Input
            label="Nome Completo"
            isRequired
            {...register("name")}
            error={errors.name?.message}
          />
        </DataArea>
        <AddressArea>
          <InputMasked
            label="CEP"
            mask="cep"
            {...register("zipcode")}
            error={errors.zipcode?.message}
            isRequired
          />
          <CustomSelect
            value={stateValue as any}
            label="Estado"
            allowClear={false}
            placeholder={"SP"}
            options={statesList}
            onChange={(e) => {
              if (e) {
                setStateValue(e.value)
                setValue("state", e.value)
              }
            }}
            isRequired
          />
          <Input
            label="Cidade"
            isRequired
            {...register("city")}
            error={errors.city?.message}
          />
          <Input
            label="Endereço"
            isRequired
            {...register("street")}
            error={errors.street?.message}
          />
          <Input
            label="Número"
            isRequired
            {...register("number")}
            error={errors.number?.message}
          />
        </AddressArea>
      </Form>
      <ButtonArea>
        <CustomButton
          variant="secondary"
          type={"button"}
          onClick={() => {}}
          label={"Cancelar"}
          disabled={isSubmitting}
        />
        <CustomButton
          type={"button"}
          variant="primary"
          label={"Próximo"}
          form="userDataForm"
          onClick={handleSubmit(submitFirstForm)}
          disabled={isSubmitting}
        />
      </ButtonArea>
    </Container>
  )
}
