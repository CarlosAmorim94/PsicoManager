import { styled } from "styled-components"

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
`

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;

  fieldset {
    border: none;
  }
`

export const BankArea = styled.div`
  margin-top: 16px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, auto);
  gap: 16px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
`
export const DataArea = styled.div`
  margin-top: 16px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, auto);
  gap: 16px;

  > :nth-last-child(1) {
    grid-column: 1 / -1;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;

    > :nth-last-child(1) {
      grid-column: auto;
    }
  }
`

export const AddressArea = styled.div`
  margin-top: 16px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, auto);
  gap: 16px;

  > :nth-child(4) {
    grid-column: span 2;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;

    > :nth-child(4) {
      grid-column: auto;
    }
  }
`

export const ButtonArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 16px;
`
