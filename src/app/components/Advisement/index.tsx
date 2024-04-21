import { FC } from "react"
import { Container, Description, Title } from "./styles"

export const Advisement: FC = () => {
  return (
    <Container>
      <Title>
        Atenção!!! Verifique atentamente a cada dado preenchido no cadastro de
        sua conta.
      </Title>
      <Description>
        • Caso queira cadastrar uma conta de banco CNPJ, verifique se a sua
        conta corrente é CNPJ e preencha o CPF correto do responsável da conta.
      </Description>
      <Description>
        • O preenchimento incorreto das informações pode trazer transtornos no
        momento da transferência do valor para essa conta corrente.
      </Description>
      <Description>
        • Se possível preencha com calma para não ocorrer erros.
      </Description>
    </Container>
  )
}
