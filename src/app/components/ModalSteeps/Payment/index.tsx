import { FC } from "react"
import { CustomButton } from "../../CustomButton"
import { Input } from "../../Input"
import { Required } from "../../Input/styles"
import { Info } from "../Messages/styles"
import { ButtonArea, Form } from "../UserData/styles"
import {
  Container,
  HorizontalLine,
  PaymentArea,
  PaymentCheckbox,
  Subtitle,
} from "./styles"

export const Payment: FC = () => {
  return (
    <Container>
      <h3>Forma de pagamento da cobrança</h3>
      <Info>
        <p>
          Escolha quais as opções de pagamento que estarão disponíveis para o
          seu cliente no link das mensagens de cobrança;
        </p>
      </Info>
      <Form id="paymentForm">
        <PaymentArea>
          <Subtitle>
            Disponibilizar meios de pagamento:<Required>*</Required>
          </Subtitle>
          <PaymentCheckbox>
            <label htmlFor="pix">
              <input type="checkbox" id="pix" name="pix" value="pix" />
              Pix
            </label>

            <label htmlFor="creditCard">
              <input
                type="checkbox"
                id="creditCard"
                name="creditCard"
                value="creditCard"
              />
              Cartão de crédito
            </label>

            <label htmlFor="bankSlip">
              <input
                type="checkbox"
                id="bankSlip"
                name="bankSlip"
                value="bankSlip"
              />
              Boleto Bancário
            </label>
          </PaymentCheckbox>
        </PaymentArea>

        <HorizontalLine />

        <PaymentArea>
          <Subtitle>
            Definir multas e juros para todos os boletos após o vencimento
          </Subtitle>
          <PaymentCheckbox>
            <label htmlFor="fine">
              <input type="checkbox" id="fine" name="fine" value="fine" />
              Cobrar multa
            </label>

            <div className="fineInput">
              <Input label="Valor da multa em %" />
            </div>

            <label htmlFor="fees">
              <input type="checkbox" id="fees" name="fees" value="fees" />
              Cobrar juros por dia de atraso (valor 1% ao mês)
            </label>
          </PaymentCheckbox>
        </PaymentArea>
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
