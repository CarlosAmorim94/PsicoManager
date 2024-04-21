import { styled } from "styled-components"

type Props = {
  isOpen: boolean
}

export const Overlay = styled.div<Props>`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 999;
  background: rgba(0, 0, 0, 0.1);
`

export const Container = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  width: 100%;
  max-width: 880px;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 999999;
  box-shadow: 0px 0px 32px 0px rgba(125, 140, 148, 0.5);
  padding: 32px;
`

export const CloseModal = styled.button`
  font-size: 20px;
  font-weight: 900;
  color: #7d8c94;
  background: transparent;
  border: none;
  cursor: pointer;

  svg {
    width: 20px;
    height: 20px;
  }

  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`

export const TitleInformation = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  h2 {
    font-size: 24px;
    font-weight: 500;
    line-height: 24px;
    text-align: left;
  }

  h3 {
    width: 100%;
    font-size: 20px;
    font-weight: 500;
    line-height: 20px;
    text-align: left;
  }
`

export const HeaderModal = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`

export const ButtonArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 16px;
`
