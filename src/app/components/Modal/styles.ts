import { styled } from "styled-components"

type Props = {
  isOpen: boolean
}

export const Overlay = styled.div<Props>`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  overflow: hidden;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 999;
  background: rgba(26, 51, 116, 0.3);
`

export const Container = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  width: 100%;
  max-width: 1000px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 999999;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  padding: 26px 20px;
`
export const ModalContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: relative;
`

export const CloseModal = styled.button`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 26px;
  right: 26px;
  color: ${(props) => props.theme?.secondary60};

  svg {
    width: 100%;
    height: 100%;
    color: ${(props) => props.theme?.secondary60};
  }
`

export const TitleInformation = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h2 {
    color: ${(props) => props.theme.primary100};
    text-align: center;
    /* Texto corrido/Texto corrido bold */
    font-family: Open Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 160%; /* 25.6px */
  }

  h3 {
    color: ${(props) => props.theme.primary90};
    text-align: center;
    /* Texto corrido/Texto corrido semibold */
    font-family: Open Sans;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 160%; /* 25.6px */
  }
`
export const TitleActionModal = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 8px;
  padding-bottom: 8px;
  border-bottom: 1px solid ${(props) => props.theme.primary50};

  h2 {
    color: ${(props) => props.theme.primary100};
    text-align: center;
    /* Texto corrido/Texto corrido bold */
    font-family: Open Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 160%; /* 25.6px */
  }
`

export const Icon = styled.div`
  svg {
    width: 32px;
    min-width: 32px;
    max-width: 32px;
    height: 32px;
    min-height: 32px;
    max-height: 32px;
    color: ${(props) => props.theme.secondary80};
  }
`
export const ButtonArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
  padding-top: 8px;
  gap: 24px;
  border-top: 1px solid ${(props) => props.theme.primary50};

  > button:only-child {
    margin: auto;
  }
`
