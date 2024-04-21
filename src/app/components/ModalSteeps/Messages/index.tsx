import { FC } from "react"
import { CustomButton } from "../../CustomButton"
import { CustomSelect } from "../../CustomSelect"
import { Input } from "../../Input"
import { ButtonArea, Form } from "../UserData/styles"
import { Container, EmailArea, Info } from "./styles"

export const Messages: FC = () => {
  return (
    <Container>
      <h3>Enviar cobrança por e-mail:</h3>
      <Info>
        <p>
          Esse é a mensagem por e-mail que seus clientes irão receber. Clique no
          campo de texto para editar o conteúdo da mensagem e depois siga para o
          próximo passo.
        </p>
      </Info>
      <Form>
        <EmailArea>
          <div className="firstLine">
            <CustomSelect
              options={[
                {
                  label: "Não tem as opções no figma",
                  value: "Não tem as opções no figma",
                },
              ]}
              onChange={() => {}}
              label="Marcação dinâmica"
              placeholder="--Selecione--"
            />
            <CustomButton
              type={"button"}
              variant="secondary"
              label={"Inserir"}
              onClick={() => {}}
            />
          </div>
          <Input label="Conteúdo da mensagem" isRequired />
        </EmailArea>
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
