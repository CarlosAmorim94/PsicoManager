"use client"
import { useAppSelector } from "@/app/store"
import { toggleModal } from "@/app/store/slices/modalInfo"
import { FC, useEffect } from "react"
import { useDispatch } from "react-redux"
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

export type SteepProps = "userData" | "messages" | "payment"

export const Modal: FC = () => {
  const isOpen = useAppSelector((state) => state.modal.isOpen)
  const steep = useAppSelector((state) => state.modal.steep)
  const dispatch = useDispatch()

  const handleShowModal = () => {
    dispatch(toggleModal())
  }

  useEffect(() => {
    const handleEsc = (event: { keyCode: number }) => {
      if (event.keyCode === 27) {
        handleShowModal()
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
            <CloseModal type="button" onClick={() => handleShowModal()}>
              <CloseX />
            </CloseModal>
          </HeaderModal>
          <SteepsStatus steep={steep as string} />
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
