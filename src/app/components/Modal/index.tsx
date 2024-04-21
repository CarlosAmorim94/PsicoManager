"use client"
import { useWindowSize } from "@/app/utils/Hooks/useWindowSize"
import { FC, useEffect, useState } from "react"
import { Advisement } from "../Advisement"
import { CustomButton } from "../CustomButton"
import { CustomSelect } from "../CustomSelect"
import { Messages } from "../ModalSteeps/Messages"
import { Payment } from "../ModalSteeps/Payment"
import { UserData } from "../ModalSteeps/UserData"
import { CloseX } from "../SVG/CloseX"
import { SteepsStatus } from "../SteepsStatus"
import {
  ButtonArea,
  CloseModal,
  Container,
  HeaderModal,
  Overlay,
  TitleInformation,
} from "./styles"

interface ModalProps {
  isOpen: boolean
  setIsOpen: (value: boolean) => void
}

export type SteepProps = "userData" | "messages" | "payment"

export const Modal: FC<ModalProps> = ({ isOpen, setIsOpen }) => {
  const { isMobile } = useWindowSize()
  const [steep, setSteep] = useState<SteepProps>("userData")

  useEffect(() => {
    const handleEsc = (event: { keyCode: number }) => {
      if (event.keyCode === 27) {
        setIsOpen(false)
      }
    }
    window.addEventListener("keydown", handleEsc)
    return () => {
      window.removeEventListener("keydown", handleEsc)
    }
  }, [])

  useEffect(() => {
    isOpen && !isMobile
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto")
  }, [isOpen])

  return (
    <Overlay isOpen={isOpen}>
      <Container>
        <TitleInformation>
          <HeaderModal>
            <h2>Ativar o PsicoBank</h2>
            <CloseModal type="button" onClick={() => setIsOpen(false)}>
              <CloseX />
            </CloseModal>
          </HeaderModal>
          <SteepsStatus steep={steep} />
          <h3>Preencha os itens a seguir para configurar o PsicoBank</h3>
          {steep === "userData" && <Advisement />}
          <CustomSelect
            label="Profissional"
            options={[{ label: "João Sila", value: "João Silva" }]}
            isRequired
            disabled
            placeholder="João Silva"
            onChange={(e) => console.log(e)}
          />
        </TitleInformation>
        <div>
          {steep === "userData" && <UserData />}
          {steep === "messages" && <Messages />}
          {steep === "payment" && <Payment />}
        </div>
        <ButtonArea>
          <CustomButton
            variant="secondary"
            type={"button"}
            onClick={() => setIsOpen(false)}
            label={"Cancelar"}
          />
          <CustomButton
            type={"button"}
            variant="primary"
            label={"Confirmar"}
            onClick={() => setSteep("messages")}
          />
        </ButtonArea>
      </Container>
    </Overlay>
  )
}
