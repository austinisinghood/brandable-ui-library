import { ButtonHTMLAttributes, InputHTMLAttributes, SelectHTMLAttributes } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
  className?: string
  color?: 'primary' | 'secondary' | 'tertiary' | 'accent' | 'ink' | 'paper'
  full?: boolean
  size: 'sm' | 'md' | 'lg'
  variant: 'outlined' | 'solid' | 'ghost'
}

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
  color?: 'primary' | 'secondary' | 'tertiary' | 'accent' | 'ink' | 'paper'
  label?: string
  name: string
}

export interface DropdownProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'onSelect'> {
  className?: string
  icon?: React.ReactNode
  label?: string
  name?: string
  onSelect: (option: { label: string; value: string }) => void
  options: { label: string; value: string }[]
  selectedOption: { label: string; value: string }
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  color?: 'primary' | 'secondary' | 'tertiary' | 'accent' | 'ink' | 'paper'
  name: string
  label?: string
}

export interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
  color?: 'primary' | 'secondary' | 'tertiary' | 'accent' | 'ink' | 'paper'
  label?: string
  name: string
}

export interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  color?: string
}

export interface SwitchProps {
  color?: 'primary' | 'secondary' | 'tertiary' | 'accent' | 'ink' | 'paper'
  options: [string, string] | [string, string, string]
  initialOption?: string
  onChange?: (selectedOption: string) => void
  label?: string
}

export interface ToggleSwitchProps extends InputHTMLAttributes<HTMLInputElement> {
  align?: 'left' | 'right'
  color?: 'primary' | 'secondary' | 'tertiary' | 'accent' | 'ink' | 'paper'
  label?: string
}
