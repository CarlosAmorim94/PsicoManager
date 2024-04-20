import { useWindowSize } from "@/app/utils/Hooks/useWindowSize"
import { FC, ReactNode, useEffect } from "react"
import { CustomButton } from "../CustomButton"
import {
  ButtonArea,
  CloseModal,
  Container,
  Icon,
  Overlay,
  TitleActionModal,
  TitleInformation,
} from "./styles"

interface ModalProps {
  icon?: ReactNode
  title: string
  isOpen: boolean
  isForm?: boolean
  children?: ReactNode
  subTitle?: string
  isLoading?: boolean
  iconButton?: ReactNode
  showButtons?: boolean
  isInformation?: boolean
  hasCloseButton?: boolean
  confirmButtonLabel?: string
  variantConfirmButton?: "primary" | "secondary"
  setIsOpen: (value: boolean) => void
  handleSubmit?: () => void
  onClickButtonCancel?: () => void
  onClickButtonConfirm: (event?: MouseEvent) => void
}

export const Modal: FC<ModalProps> = ({
  icon,
  title,
  isOpen,
  isForm = false,
  subTitle,
  children,
  isLoading = false,
  iconButton,
  showButtons = true,
  isInformation = false,
  hasCloseButton = true,
  confirmButtonLabel = "Confirmar",
  variantConfirmButton = "secondary",
  setIsOpen,
  handleSubmit,
  onClickButtonCancel = () => {},
  onClickButtonConfirm = () => {},
}) => {
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
      <Container id="modal-form" onSubmit={handleSubmit}>
        <CloseModal type="button" onClick={() => setIsOpen(false)}>
          X
        </CloseModal>
        {isInformation ? (
          <TitleInformation>
            {icon ? <Icon>{icon}</Icon> : null}
            <h2>{title}</h2>
            {subTitle ? <h3>{subTitle}</h3> : null}
          </TitleInformation>
        ) : (
          <TitleActionModal>
            {icon ? <Icon>{icon}</Icon> : null}
            <h2>{title}</h2>
          </TitleActionModal>
        )}
        {children}
        <ButtonArea>
          {hasCloseButton ? (
            <CustomButton
              variant="secondary"
              type={"button"}
              onClick={() => {
                setIsOpen(false)
                onClickButtonCancel()
              }}
              label={"Cancelar"}
            />
          ) : null}
          {showButtons && (
            <CustomButton
              form={"modal-form"}
              type={isForm ? "submit" : "button"}
              variant={variantConfirmButton}
              disabled={isLoading}
              isLoading={isLoading}
              label={confirmButtonLabel}
              onClick={onClickButtonConfirm}
            />
          )}
        </ButtonArea>
      </Container>
    </Overlay>
  )
}
