import React from 'react'
import { twMerge } from 'tailwind-merge'
import { BadgeProps } from '@/src/components/types'

export const Badge: React.FC<BadgeProps> = ({
  children,
  className = '',
  color = 'primary',
  size = 'md',
  variant = 'solid',
}) => {
  const classes = twMerge(
    'badge-container',
    `badge-${color}`,
    `badge-${size}`,
    `badge-${variant}`,
    'h-fit chat',
    className,
  )

  return <div className={classes}>{children}</div>
}

export default Badge
