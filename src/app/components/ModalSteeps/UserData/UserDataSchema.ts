import { z } from "zod"

export const schema = z
  .object({
    name: z
      .string()
      .min(2, { message: "Nome deve ter pelo menos 2 caracteres." })
      .max(255, { message: "Nome deve ter no máximo 255 caracteres." }),
    cpf: z.string(),
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

export type UserFormData = z.infer<typeof schema>
