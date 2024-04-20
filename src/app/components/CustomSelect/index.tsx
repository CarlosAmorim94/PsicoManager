import { useEffect, useRef, useState } from "react"
import {
  DropdownButtonInput,
  DropdownItemInput,
  DropdownListInput,
  DropdownWrapperInput,
  IconSelectInput,
  Title,
} from "./styles"

type Option = { value: string; label: string }

interface CustomSelectProps {
  options: Option[]
  value?: Option
  disabled?: boolean
  onChange: (value: Option | null) => void
  icon?: React.ReactNode
  placeholder?: string
  defaultValue?: Option
  allowClear?: boolean
  label?: string
  textAfterOption?: string
}

export function CustomSelect({
  label,
  options,
  value,
  onChange,
  disabled,
  icon,
  placeholder = "Selecione uma opção",
  defaultValue,
  allowClear = true,
  textAfterOption = "",
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState<Option | null>(
    value || defaultValue || null
  )

  useEffect(() => {
    setSelectedOption(value || defaultValue || null)
  }, [value])

  const modalRef = useRef<HTMLDivElement>(null)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const selectOption = (option: Option) => {
    setSelectedOption(option)
    onChange(option)
    setIsOpen(false)
  }

  const clearValue = () => {
    setSelectedOption(null)
    onChange(null)
  }

  const handleClickOutside = (e: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <DropdownWrapperInput ref={modalRef}>
      <Title>{label}</Title>
      <DropdownButtonInput
        isDisabled={disabled}
        disabled={disabled}
        type="button"
        onClick={toggleDropdown}
        isActive={isOpen}
      >
        {icon && (
          <IconSelectInput hasValue={!!selectedOption}>{icon}</IconSelectInput>
        )}
        <span>
          {selectedOption?.label || placeholder}
          {textAfterOption}
        </span>
        <DropdownListInput isOpen={isOpen}>
          {allowClear && selectedOption && (
            <DropdownItemInput onClick={clearValue}>
              Limpar campo
            </DropdownItemInput>
          )}
          {options.map((option, index) => (
            <DropdownItemInput key={index} onClick={() => selectOption(option)}>
              {option.label}
              {textAfterOption}
            </DropdownItemInput>
          ))}
        </DropdownListInput>
      </DropdownButtonInput>
    </DropdownWrapperInput>
  )
}
