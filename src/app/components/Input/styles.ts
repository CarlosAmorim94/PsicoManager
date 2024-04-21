import { styled } from "styled-components"

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
`

export const Title = styled.label`
  font-size: 14px;
  font-style: normal;
  line-height: normal;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
`
export const Required = styled.p`
  width: auto;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: red;
`

export const InputField = styled.input<{ $variant?: "primary" | "secondary" }>`
  width: 100%;
  border: 1px solid rgba(204, 209, 211, 1);
  outline: none;
  background: transparent;
  padding: 4px 16px 4px 16px;
  gap: 10px;
  border-radius: 2px;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;

  &:disabled {
    background: #ccd1d3;
    cursor: not-allowed;
  }

  &:read-only {
    background: #ccd1d3;
    cursor: not-allowed;
  }

  &::placeholder {
    color: "gray";

    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: left;
  }
`

export const Error = styled.p`
  color: red;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`
