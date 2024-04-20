import { styled } from "styled-components"

interface CustomButtonProps {
  variant: "primary" | "secondary" | "tertiary" | "gray"
}

export const Container = styled.button<CustomButtonProps>`
  display: flex;
  padding: 12px 40px;
  flex-direction: row;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  gap: 4px;
  align-self: stretch;

  border-radius: 8px;
  background-color: ${(props) => {
    switch (props.variant) {
      case "primary":
        return props.theme?.primary100
      case "secondary":
        return props.theme?.secondary100
      case "tertiary":
        return "transparent"
      case "gray":
        return props.theme?.primary60
      default:
        return props.theme?.primary100
    }
  }};

  border: 2px solid
    ${(props) =>
      props.variant === "tertiary" ? props.theme?.secondary100 : "transparent"};
  color: ${(props) => {
    switch (props.variant) {
      case "tertiary":
        return props.theme?.secondary100
      case "gray":
        return props.theme?.primary100
      default:
        return "#FFF"
    }
  }};

  &:hover {
    cursor: pointer;
    transition: 0.4s;
    background-color: ${(props) => {
      switch (props.variant) {
        case "primary":
          return props.theme?.primary90
        case "secondary":
          return props.theme?.secondary90
        case "tertiary":
          return "#FFF"
        case "gray":
          return props.theme?.primary90
        default:
          return props.theme?.primary100
      }
    }};
    color: ${(props) =>
      props.variant === "tertiary"
        ? props.theme?.secondary100
        : "#FFF"} !important;

    span {
      transition: 0.4s;
      color: ${(props) => (props.variant === "gray" ? "#fff" : "")} !important;
    }
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  span {
    color: ${(props) => {
      switch (props.variant) {
        case "tertiary":
          return props.theme?.secondary100
        case "gray":
          return props.theme?.primary100
        default:
          return "#FFF"
      }
    }} !important;

    text-align: center;
    font-family: Open Sans;
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
