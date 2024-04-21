import { styled } from "styled-components"

const variants = {
  primary: {
    background: "white",
    padding: "0.5rem",
    placeholder: "primary60",
    borderBottom: "white",
  },
  secondary: {
    background: "transparent",
    padding: "0",
    placeholder: "primary90",
    borderBottom: "secondary70",
  },
}

interface InputProps {
  $variant?: "primary" | "secondary"
  maxLenght?: number
  hasBorder?: boolean
}

export const InputContainer = styled.div<InputProps>`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  background: ${(props) =>
    props.$variant ? variants[props.$variant].background : "transparent"};
  padding: ${(props) =>
    props.$variant ? variants[props.$variant].padding : "0"};
  border-bottom: ${(props) =>
    props.hasBorder ? `1px solid ${props.theme.secondary100}` : "none"};
`

export const FieldContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0 5px 0;

  svg {
    color: ${(props) => props.theme?.secondary100};
    width: 24px;
    height: 24px;
  }
`
export const FieldContainerToken = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-direction: row;
  padding: 5px 0 5px 0;
`

export const Title = styled.label`
  width: auto;
  color: ${(props) => props.theme.secondary80};

  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`
export const TextareaField = styled.textarea<{
  $variant?: "primary" | "secondary"
}>`
  width: 100%;
  border: none;
  outline: none;
  background: transparent;
  color: ${(props) => props.theme.primary90};

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:read-only {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &::placeholder {
    color: ${(props) =>
      props.$variant
        ? props.theme[variants[props.$variant].placeholder]
        : "gray"};

    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  input[type="password"]::-webkit-password-toggle-button {
    display: none;
  }
`

export const InputField = styled.input<{ $variant?: "primary" | "secondary" }>`
  width: 100%;
  border: none;
  outline: none;
  background: transparent;
  color: ${(props) => props.theme.primary90};

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:read-only {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &::placeholder {
    color: ${(props) =>
      props.$variant
        ? props.theme[variants[props.$variant].placeholder]
        : "gray"};

    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  input[type="password"]::-webkit-password-toggle-button {
    display: none;
  }
`
export const InputFieldToken = styled.input<{
  $variant?: "primary" | "secondary"
}>`
  width: 60%;
  padding: 5px 0 5px 0;
  border: none;
  outline: none;
  background: transparent;
  color: ${(props) => props.theme.primary90};
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1; /* Número de linhas que você deseja exibir */
  -webkit-box-orient: vertical;

  &:disabled {
    opacity: 0.5;
  }

  &::placeholder {
    color: ${(props) =>
      props.$variant
        ? props.theme[variants[props.$variant].placeholder]
        : "gray"};

    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    gap: 10px;
  }
`

export const ButtonsContent = styled.div`
  width: 100%;
  max-width: 300px;
  max-height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  justify-content: end;

  @media (max-width: 768px) {
    flex-direction: row;
    width: 100%;
  }
`
export const ToggleIcon = styled.i`
  position: absolute;
  right: 60px;
  cursor: pointer;
`
export const Error = styled.p`
  color: ${(props) => props.theme.error};

  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: -20px;
`
export const ButtonInput = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: none;
  padding: 8px;
  border-radius: 8px;
  background-color: ${(props) => props.theme?.secondary100};

  svg {
    color: #fff;
    width: 20px;
    height: 20px;
  }

  &:hover {
    background-color: ${(props) => props.theme?.secondary90};
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`
export const ShowValues = styled.div`
  width: 100%;
  background: transparent;
  color: ${(props) => props.theme.primary90};
`
export const HeaderSelect = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  padding: 12px;

  select {
    width: 100%;
    border: none;
    outline: none;

    color: ${(props) => props.theme.primary90};

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
`
