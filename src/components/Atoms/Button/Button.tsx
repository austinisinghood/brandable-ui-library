'use client'

import { ButtonHTMLAttributes } from 'react'

import { twMerge } from 'tailwind-merge'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  className?: string
  color: 'primary' | 'secondary' | 'tertiary' | 'accent' | 'ink' | 'paper'
  size: 'sm' | 'md' | 'lg'
  variant: 'outlined' | 'solid' | 'ghost'
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  color,
  size,
  variant,
  ...rest
}) => {
  return (
    <div className="button-wrapper">
      <button className={twMerge(`button-text`, className, size, color, variant)} {...rest}>
        <div className="button-container w-fit h-fit flex items-center justify-center">
          {children}
        </div>
      </button>
    </div>
  )
}
