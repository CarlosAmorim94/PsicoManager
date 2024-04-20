"use client"
import { ButtonHTMLAttributes } from "react"
import { Container } from "./styles"

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary"
  label: string
  isLoading?: boolean
  onClick?: (event?: any) => void
}

export function CustomButton({
  variant = "primary",
  onClick = () => {},
  label,
  form,
  isLoading,
  type,
  disabled,
  ...props
}: CustomButtonProps) {
  return (
    <Container
      variant={variant}
      disabled={disabled}
      onClick={onClick}
      type={type}
      {...props}
    >
      {isLoading ? <span>Carregando...</span> : <span>{label}</span>}
    </Container>
  )
}
