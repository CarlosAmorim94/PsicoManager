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

export const EmailArea = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  .firstLine {
    width: 100%;
    display: flex;
    align-items: end;
    gap: 16px;
  }
`
export const Info = styled.div`
  width: 100%;
  display: flex;
  background-color: #ecf5fe;
  padding: 16px;
  border-radius: 4px;

  p {
    color: #2196f3;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    text-align: justified;
  }
`
