import { styled } from "styled-components"

export const InternalContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 24px 0;
`
type SteepsProps = {
  isSelected?: boolean
}

export const Steeps = styled.div<SteepsProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-weight: ${(props) => (props.isSelected ? "bold" : "normal")};

  svg {
    width: 24px;
    min-width: 24px;
    height: 24px;
    min-height: 24px;
  }

  @media (max-width: 768px) {
  }
`
export const HorizontalLine = styled.div<SteepsProps>`
  width: 120%;
  height: 4px;
  background-color: ${(props) => (props.isSelected ? "#B3DCE8" : "#EFF0F0")};
`
