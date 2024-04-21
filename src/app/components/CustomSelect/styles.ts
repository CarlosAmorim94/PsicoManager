import { styled } from "styled-components"

interface DropdownListProps {
  isOpen: boolean
}

interface DropdownButtonProps {
  isActive: boolean
  isDisabled?: boolean
}

export const DropdownWrapperInput = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  background: white;
`

export const DropdownButtonInput = styled.button<DropdownButtonProps>`
  display: flex;
  width: 100%;
  align-items: center;
  cursor: pointer;
  gap: 4px;
  background: ${(props) => (props.isDisabled ? "#CCD1D3" : "#fff")};
  width: 100%;
  border: 1px solid rgba(204, 209, 211, 1);
  padding: 4px 16px 4px 16px;
  border-radius: 2px;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;

  span {
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    svg {
      width: 12px;
      height: 12px;
      rotate: ${(props) => (props.isActive ? "180deg" : `0`)};
      margin-left: auto;
    }
  }

  @media (max-width: 768px) {
    min-width: 100%;
  }
`

export const DropdownListInput = styled.ul<DropdownListProps>`
  width: 100%;
  max-height: 300px;
  overflow-y: scroll;
  position: absolute;
  top: 52px;
  left: 0;
  right: 0;
  list-style: none;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  z-index: 999999;
  box-shadow: 0px 0px 16px 0px rgba(125, 140, 148, 0.5);
`

export const DropdownItemInput = styled.li`
  text-align: left;
  cursor: pointer;
  padding: 8px;

  &:hover {
    background: #f2f2f2;
    font-weight: 700;
  }
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
