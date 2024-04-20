export const getZipcode = async (zipcode: string) => {
  try {
    const response = await fetch(`https://viacep.com.br/ws/${zipcode}/json`)
    if (!response.ok) {
      throw new Error("Erro ao buscar o CEP")
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error("Erro na requisição:", error)
    // Trate o erro conforme sua necessidade
    return null
  }
}
