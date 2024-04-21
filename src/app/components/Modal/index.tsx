"use client"
import { useWindowSize } from "@/app/utils/Hooks/useWindowSize"
import { FC, useEffect } from "react"
import { CustomButton } from "../CustomButton"
import { CustomSelect } from "../CustomSelect"
import { Input } from "../Input"
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

export const Modal: FC<ModalProps> = ({ isOpen, setIsOpen }) => {
  const { isMobile } = useWindowSize()

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
              X
            </CloseModal>
          </HeaderModal>
          <div>Status</div>
          <h3>Preencha os itens a seguir para configurar o PsicoBank</h3>
          <div>Advertência</div>
          <Input label={"Profissional"} />
          <CustomSelect
            options={[
              { value: "1", label: "1" },
              { value: "2", label: "2" },
            ]}
            onChange={(e) => console.log(e)}
          />
        </TitleInformation>
        MODAAAAAAAAAAAAAAAAL
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
            onClick={() => {}}
          />
        </ButtonArea>
      </Container>
    </Overlay>
  )
}
