import { getZipcode } from "@/app/services/viaCEP"
import { useAppSelector } from "@/app/store"
import { addInfo, goToMessages } from "@/app/store/slices/modalInfo"
import { zodResolver } from "@hookform/resolvers/zod"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { UserFormData, schema } from "./UserDataSchema"

export const useUserData = () => {
  const dispatch = useDispatch()
  const infoData = useAppSelector((state) => state.modal.modalData)

  const [stateValue, setStateValue] = useState<string>("")
  const [accountType, setAccountType] = useState<
    "Conta corrente" | "Poupança"
  >()
  const {
    handleSubmit,
    register,
    watch,
    setValue,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm<UserFormData>({
    mode: "onBlur",
    reValidateMode: "onChange",
    resolver: zodResolver(schema),
  })

  const banks = [
    { label: "Banco do Brasil", value: "Banco do Brasil" },
    { label: "Bradesco", value: "Banco do Brasil" },
    { label: "Itaú", value: "Itaú" },
    { label: "Santander", value: "Santander" },
    { label: "Caixa", value: "Caixa" },
    { label: "NuBank", value: "NuBank" },
  ]

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
    dispatch(addInfo(data))
    dispatch(goToMessages())
  }

  useEffect(() => {
    setValue("bankCode", infoData.bankCode)
    setValue("bankAccountAgency", infoData.bankAccountAgency)
    setValue("bankAccountNumber", infoData.bankAccountNumber)
    setValue("bankAccountType", infoData.bankAccountType as any)
    setValue("typePerson", infoData.typePerson as any)
    setValue("cpf", infoData.cpf)
    setValue("mobilePhone", infoData.mobilePhone)
    setValue("name", infoData.name)
    setValue("zipcode", infoData.zipcode)
    setValue("state", infoData.state)
    setValue("city", infoData.city)
    setValue("street", infoData.street)
    setValue("number", infoData.number)
  }, [infoData])

  return {
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
  }
}
