import { useEffect, useRef, useState } from "react"

import { Required } from "../Input/styles"
import { ArrowDown } from "../SVG/ArrowDown"
import {
  DropdownButtonInput,
  DropdownItemInput,
  DropdownListInput,
  DropdownWrapperInput,
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
  isRequired?: boolean
}

export function CustomSelect({
  label,
  options,
  value,
  onChange,
  disabled,
  placeholder = "Selecione",
  defaultValue,
  allowClear = true,
  isRequired = false,
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
      <Title>
        {label}: {isRequired ? <Required>*</Required> : null}
      </Title>
      <DropdownButtonInput
        isDisabled={disabled}
        disabled={disabled}
        type="button"
        onClick={toggleDropdown}
        isActive={isOpen}
      >
        <span>
          {selectedOption?.label || placeholder}
          <ArrowDown />
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
            </DropdownItemInput>
          ))}
        </DropdownListInput>
      </DropdownButtonInput>
    </DropdownWrapperInput>
  )
}
