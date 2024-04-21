"use client"
import { getZipcode } from "@/app/services/viaCEP"
import { statesList } from "@/app/utils/states"
import { zodResolver } from "@hookform/resolvers/zod"
import { FC, useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
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

const schema = z
  .object({
    name: z
      .string()
      .min(2, { message: "Nome deve ter pelo menos 2 caracteres." })
      .max(255, { message: "Nome deve ter no máximo 255 caracteres." }),
    cpf: z.string().optional(),
    mobilePhone: z.string().refine(
      (value) => {
        if (value.trim() !== "") {
          return /^\(\d{2}\) 9\d{4}-\d{4}$/.test(value)
        }
        return true
      },
      {
        message:
          "Insira um número de celular válido no formato (XX) 9XXXX-XXXX",
      }
    ),
    typePerson: z.enum(["physical person", "legal person"]),
    bankAccountType: z.enum(["checking", "savings"]),
    bankCode: z
      .string()
      .min(1, { message: "Nome do banco é obrigatório." })
      .max(255, {
        message: "Nome do banco deve ter no máximo 255 caracteres.",
      }),
    bankAccountAgency: z
      .string()
      .min(4, { message: "Agência bancária é obrigatória." })
      .max(10, {
        message: "Agência bancária deve ter no máximo 10 caracteres.",
      }),
    bankAccountNumber: z.string().or(
      z
        .number()
        .min(1, { message: "Número da conta bancária é obrigatório." })
        .max(20, {
          message: "Número da conta bancária deve ter no máximo 20 caracteres.",
        })
    ),
    zipcode: z
      .string()
      .regex(/^\d{5}-\d{3}$/, "Insira um CEP válido no formato XXXXX-XXX")
      .refine((data) => data !== undefined, {
        message: "O CEP é obrigatório!",
      }),
    state: z
      .string()
      .min(2, "O estado deve ter pelo menos 2 caracteres")
      .max(2, "O estado deve ter no máximo 2 caracteres")
      .refine((data) => data !== undefined, {
        message: "O estado é obrigatório!",
      }),
    city: z
      .string()
      .min(2, "A cidade deve ter pelo menos 2 caracteres")
      .max(40, "Máximo de 40 caracteres atingido!")
      .refine((data) => data !== undefined, {
        message: "A cidade é obrigatória!",
      }),
    street: z
      .string()
      .min(2, "O logradouro deve ter pelo menos 2 caracteres")
      .max(100, "Máximo de 100 caracteres atingido!")
      .refine((data) => data !== undefined, {
        message: "O logradouro é obrigatório!",
      }),
    number: z
      .string()
      .min(1, "O número deve ter pelo menos 1 caractere")
      .refine((data) => data !== undefined, {
        message: "O número é obrigatório!",
      }),
  })
  .refine(
    (data) => {
      if (data.typePerson == "physical person") {
        const cleanedValue = data.cpf?.replace(/[\s./-]/g, "")
        if (cleanedValue && cleanedValue.trim() !== "") {
          return /^\d{11}$/.test(cleanedValue)
        }

        return data.cpf && data.cpf?.length > 1
      }
      return true
    },
    {
      message: "Insira um CPF válido no formato XXX.XXX.XXX-XX",
      path: ["cpf"],
    }
  )

type UserFormData = z.infer<typeof schema>
type Option = { value: string; label: string }

export const UserData: FC = () => {
  const [stateValue, setStateValue] = useState<Option>()
  const {
    handleSubmit,
    register,
    watch,
    setValue,
    getValues,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<UserFormData>({
    mode: "onBlur",
    reValidateMode: "onChange",
    resolver: zodResolver(schema),
  })

  const getAddress = async (zipcode?: string) => {
    try {
      const data = await getZipcode(zipcode as string)
      setStateValue(data?.uf)
      setValue("state", data?.uf)
      setValue("city", data?.localidade.substring(0, 40))
      setValue("street", data?.logradouro.substring(0, 100))
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const zipcode = getValues("zipcode").replace(/\D/g, "")
    if (zipcode && zipcode.length >= 8) {
      getAddress(zipcode)
    }
  }, [watch("zipcode")])

  const submitFirstForm = (data: UserFormData) => {
    console.log(data)
  }

  return (
    <Container>
      <Form id="userDataForm">
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
              { label: "Física", value: "Física" },
              { label: "Jurídica", value: "Jurídica" },
            ]}
            isRequired
            onChange={() => {}}
          />
          <InputMasked
            label={"CPF"}
            mask={"cpf"}
            {...register("cpf")}
            error={errors.cpf?.message}
          />
          <InputMasked
            label={"Telefone"}
            mask={"mobilePhone"}
            {...register("mobilePhone")}
            error={errors.mobilePhone?.message}
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
          />
          <CustomSelect
            value={stateValue}
            label="Estado"
            allowClear={false}
            placeholder={"SP"}
            options={statesList}
            onChange={(e) => {
              if (e) {
                setStateValue(e)
                setValue("state", e.value)
              }
            }}
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
