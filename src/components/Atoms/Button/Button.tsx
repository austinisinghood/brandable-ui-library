import { FC } from 'react'

import { twMerge } from 'tailwind-merge'

import { ButtonProps } from '@/src/components/types'

export const Button: FC<ButtonProps> = ({
  children,
  className,
  color,
  full,
  size,
  variant,
  ...rest
}) => {
  const isFullWidth = full ? 'full-width' : ''

  return (
    <div className={twMerge(`button-wrapper`, className, isFullWidth)}>
      <button className={twMerge(`button-text`, size, color, variant, isFullWidth)} {...rest}>
        {children}
      </button>
    </div>
  )
}
