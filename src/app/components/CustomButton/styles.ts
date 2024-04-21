import { styled } from "styled-components"

interface CustomButtonProps {
  variant: "primary" | "secondary"
}

export const Container = styled.button<CustomButtonProps>`
  display: flex;
  max-height: 32px;
  padding: 4px 32px;
  flex-direction: row;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 8px;
  background-color: ${(props) =>
    props.variant === "primary" ? "#2797BA" : "transparent"};

  border: 1px solid
    ${(props) => (props.variant === "primary" ? "#2797BA" : "#7D8C94")};
  color: ${(props) => (props.variant === "primary" ? "#FFF" : "#7D8C94")};

  &:hover {
    cursor: pointer;
    transition: 0.4s;
    opacity: 0.7;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  span {
    color: ${(props) => (props.variant === "primary" ? "#FFF" : "#7D8C94")};
    text-align: center;

    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 160%; /* 25.6px */
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 12px 20px;

    span {
      max-width: 100%;
      font-size: 14px;
      text-align: left;
    }
  }
`

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 26px;
  min-width: 26px;
  max-width: 26px;
  height: 26px;
  min-height: 26px;
  max-height: 26px;

  @media (max-width: 768px) {
    width: 20px;
    min-width: 20px;
    max-width: 20px;
    height: 20px;
    min-height: 20px;
    max-height: 20px;
  }
`
