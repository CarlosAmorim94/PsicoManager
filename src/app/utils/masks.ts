export function cep(e: React.FormEvent<HTMLInputElement>) {
  e.currentTarget.maxLength = 9
  let value = e.currentTarget.value
  value = value.replace(/\D/g, "")
  value = value.replace(/^(\d{5})(\d)/, "$1-$2")
  e.currentTarget.value = value
  return e
}

export function cpf(e: React.FormEvent<HTMLInputElement>) {
  e.currentTarget.maxLength = 14
  let value = e.currentTarget.value
  if (!value.match(/^(\d{3}).(\d{3}).(\d{3})-(\d{2})$/)) {
    value = value.replace(/\D/g, "")
    value = value.replace(/(\d{3})(\d)/, "$1.$2")
    value = value.replace(/(\d{3})(\d)/, "$1.$2")
    value = value.replace(/(\d{3})(\d{2})$/, "$1-$2")
    e.currentTarget.value = value
  }
  return e
}

export function cnpj(e: React.FormEvent<HTMLInputElement>) {
  e.currentTarget.maxLength = 18
  let value = e.currentTarget.value

  if (!value.match(/^(\d{2})\.(\d{3})\.(\d{3})\/(\d{4})-(\d{2})$/)) {
    value = value.replace(/\D/g, "")
    value = value.replace(/(\d{2})(\d)/, "$1.$2")
    value = value.replace(/(\d{3})(\d)/, "$1.$2")
    value = value.replace(/(\d{3})(\d)/, "$1/$2")
    value = value.replace(/(\d{4})(\d{2})$/, "$1-$2")
    e.currentTarget.value = value
  }

  return e
}

export function phone(e: React.FormEvent<HTMLInputElement>) {
  return phoneMask(e, 14)
}

export function mobilePhone(e: React.FormEvent<HTMLInputElement>) {
  return phoneMask(e, 15)
}

function phoneMask(e: React.FormEvent<HTMLInputElement>, maxLength: number) {
  e.currentTarget.maxLength = maxLength
  let value = e.currentTarget.value
  value = value.replace(/\D/g, "")
  if (value.length == 10) {
    value = value.replace(/^(\d{2})(\d{4})(\d{4})$/, "($1) $2-$3")
  } else {
    value = value.replace(/^(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3")
  }
  e.currentTarget.value = value
  return e
}

export function rg(e: React.FormEvent<HTMLInputElement>) {
  e.currentTarget.maxLength = 12
  let value = e.currentTarget.value
  value = value.replace(/\D/g, "")
  value = value.replace(/^(\d{2})(\d{3})(\d{3})(\d{1,2})$/, "$1.$2.$3-$4")

  e.currentTarget.value = value
  return e
}

export function uf(e: React.FormEvent<HTMLInputElement>) {
  e.currentTarget.maxLength = 2
  let value = e.currentTarget.value
  value = value.toUpperCase()
  value = value.replace(/[^a-zA-Z]/g, "")

  e.currentTarget.value = value
  return e
}

export function number(e: React.FormEvent<HTMLInputElement>) {
  let value = e.currentTarget.value
  value = value.replace(/[^0-9]/g, "")

  e.currentTarget.value = value
  return e
}

export function currency(e: React.FormEvent<HTMLInputElement>) {
  // Remove any non-numeric characters from the input
  let userInput: string = e.currentTarget.value.replace(/[^0-9]/g, "")

  if (userInput === "") {
    // If the input is empty, set the formatted value to "R$ 0,00"
    e.currentTarget.value = "R$ 0,00"
  } else {
    // Convert the input to a number and divide by 100 to get the value in BRL
    let userInputAsNumber: number = parseInt(userInput, 10) / 100

    // Format the number as BRL currency
    let formattedNumber: string = `R$ ${userInputAsNumber
      .toFixed(2)
      .replace(".", ",")
      .replace(/(\d)(?=(\d{3})+\,)/g, "$1.")}`

    // Update the state with the formatted value and the user input
    e.currentTarget.value = formattedNumber
  }

  return e
}
