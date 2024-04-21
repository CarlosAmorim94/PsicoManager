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
  max-width: 1000px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 999999;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  padding: 26px 20px;
`

export const CloseModal = styled.button`
  font-size: 20px;
  font-weight: 900;
  color: #7d8c94;
  background: transparent;
  border: none;
  cursor: pointer;
`

export const TitleInformation = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;

  h2 {
    font-size: 24px;
    font-weight: 500;
    line-height: 24px;
    text-align: left;
  }

  h3 {
    color: ${(props) => props.theme.primary90};
    text-align: center;
    /* Texto corrido/Texto corrido semibold */

    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 160%; /* 25.6px */
  }
`

export const ButtonArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  margin: 32px 0;
  gap: 16px;
`
