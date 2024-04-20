import { styled } from "styled-components"

interface DropdownListProps {
  isOpen: boolean
}

interface DropdownButtonProps {
  isActive: boolean
  isDisabled?: boolean
}

interface IconSelectProps {
  hasValue: boolean
}

export const DropdownWrapperInput = styled.div`
  position: relative;
  width: auto;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  background: white;
  padding: 0.5rem;
  border-bottom: ${(props) => `1px solid ${props.theme.secondary100}`};
`

export const DropdownButtonInput = styled.button<DropdownButtonProps>`
  display: flex;
  width: 100%;
  align-items: center;
  cursor: pointer;
  gap: 4px;

  span {
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 6px 0;
    color: ${(props) => props.theme?.primary90};
    font-family: Open Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    opacity: ${(props) => (props.isDisabled ? "0.6" : "1")};

    svg {
      width: 20px;
      height: 20px;
      color: ${(props) => props.theme?.secondary100};
      rotate: ${(props) => (props.isActive ? "180deg" : `0`)};
      margin-left: auto;
    }
  }

  @media (max-width: 768px) {
    min-width: 100%;
  }
`

export const IconSelectInput = styled.div<IconSelectProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  svg {
    width: 22px;
    height: 22px;
    color: ${(props) =>
      props.hasValue ? props.theme?.secondary100 : props.theme?.secondary80};
  }
`

export const DropdownListInput = styled.ul<DropdownListProps>`
  width: 100%;
  max-height: 300px;
  overflow-y: scroll;
  position: absolute;
  top: 65px;
  left: 0;
  right: 0;
  list-style: none;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  z-index: 999999;
`

export const DropdownItemInput = styled.li`
  text-align: left;
  cursor: pointer;
  padding: 8px;
  color: ${(props) => props.theme?.primary90};

  &:hover {
    background: #f2f2f2;
    font-weight: 700;
  }
`
export const Title = styled.label`
  width: fit-content;
  color: ${(props) => props.theme.secondary80};
  font-family: Open Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`
