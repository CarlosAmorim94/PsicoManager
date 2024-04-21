import { styled } from "styled-components"

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  gap: 16px;

  h3 {
    width: 100%;
    text-align: left;
  }
`

export const Subtitle = styled.label`
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  text-align: left;
  display: flex;
  flex-direction: row;
  gap: 4px;
`

export const PaymentArea = styled.div`
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`
export const PaymentCheckbox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  label {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .fineInput {
    width: fit-content;
    max-width: 300px;
  }
`
export const HorizontalLine = styled.div`
  width: 100%;
  height: 2px;
  background: #ccd1d3;
  margin: 8px 0;
`
