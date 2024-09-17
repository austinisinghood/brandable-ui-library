import { ButtonHTMLAttributes, InputHTMLAttributes, SelectHTMLAttributes } from 'react'

export type AccordionProps = {
  color?: 'primary' | 'secondary' | 'tertiary' | 'accent' | 'ink' | 'paper'
  titleClassName?: string
  contentClassName?: string
  icon?: React.ReactNode
  panels: PanelProps[]
}

export type PanelProps = {
  title: React.ReactNode
  content: React.ReactNode
}

export interface BadgeProps {
  children: React.ReactNode
  className?: string
  color?: 'primary' | 'secondary' | 'tertiary' | 'accent' | 'ink' | 'paper'
  size?: 'sm' | 'md' | 'lg'
  variant?: 'solid' | 'outlined'
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
  className?: string
  color?: 'primary' | 'secondary' | 'tertiary' | 'accent' | 'ink' | 'paper'
  full?: boolean
  size: 'sm' | 'md' | 'lg'
  variant: 'outlined' | 'solid' | 'ghost'
}

export interface CardProps {
  align?: 'left' | 'center' | 'right'
  color?: 'primary' | 'secondary' | 'tertiary' | 'accent' | 'ink' | 'paper'
  children: React.ReactNode
  width?: number
}

export interface CarouselProps {
  color: 'primary' | 'secondary' | 'tertiary' | 'accent' | 'ink' | 'paper'
  iconLeft?: React.ReactNode
  iconRight?: React.ReactNode
  images: string[]
  autoSlide?: boolean
  slideInterval?: number
}

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
  color?: 'primary' | 'secondary' | 'tertiary' | 'accent' | 'ink' | 'paper'
  label?: string
  name: string
}

export interface DropdownProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'onSelect'> {
  color?: 'primary' | 'secondary' | 'tertiary' | 'accent' | 'ink' | 'paper'
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
