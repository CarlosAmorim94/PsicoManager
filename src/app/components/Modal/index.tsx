"use client"
import { FC, useEffect, useState } from "react"
import { Advisement } from "../Advisement"
import { CustomSelect } from "../CustomSelect"
import { Messages } from "../ModalSteeps/Messages"
import { Payment } from "../ModalSteeps/Payment"
import { UserData } from "../ModalSteeps/UserData"
import { CloseX } from "../SVG/CloseX"
import { SteepsStatus } from "../SteepsStatus"
import {
  CloseModal,
  Container,
  HeaderModal,
  Overlay,
  Subtitle,
  TitleInformation,
} from "./styles"

interface ModalProps {
  isOpen: boolean
  setIsOpen: (value: boolean) => void
}

export type SteepProps = "userData" | "messages" | "payment"

export const Modal: FC<ModalProps> = ({ isOpen, setIsOpen }) => {
  const [steep, setSteep] = useState<SteepProps>("messages")

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
          <Subtitle>
            Preencha os itens a seguir para configurar o PsicoBank
          </Subtitle>
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
      </Container>
    </Overlay>
  )
}
