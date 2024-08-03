import { FC, ButtonHTMLAttributes } from 'react'

import { twMerge } from 'tailwind-merge'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  className?: string
  color: 'primary' | 'secondary' | 'tertiary' | 'accent' | 'ink' | 'paper'
  full?: boolean
  size: 'sm' | 'md' | 'lg'
  variant: 'outlined' | 'solid' | 'ghost'
}

export const Button: FC<ButtonProps> = ({
  children,
  className,
  color,
  full,
  size,
  variant,
  ...rest
}) => {
  const isFullWidth = full ? 'w-full' : ''

  return (
    <div className={twMerge(`button-wrapper`, className, isFullWidth)}>
      <button className={twMerge(`button-text`, size, color, variant, isFullWidth)} {...rest}>
        {children}
      </button>
    </div>
  )
}
