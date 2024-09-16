'use client'

import { InputHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

import { ToggleSwitchProps } from '@/src/components/types'

export const Toggle: React.FC<ToggleSwitchProps> = ({
  align,
  color = 'primary',
  label,
  ...props
}) => {
  return (
    <div
      className={twMerge(`w-fit flex flex-row items-center justify-center toggle-container`, color)}
    >
      {label && (
        <div className={twMerge(`label label-text px-2`, align === 'left' ? 'order-1' : 'order-2')}>
          {label}
        </div>
      )}
      <label className={twMerge(`toggle-wrapper`, align === 'left' ? 'order-2' : 'order-1')}>
        <input type="checkbox" {...props} />
        <span className={twMerge('slider')}></span>
      </label>
    </div>
  )
}
