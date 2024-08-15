'use client'

import { InputHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

interface ToggleSwitchProps extends InputHTMLAttributes<HTMLInputElement> {
  align?: 'left' | 'right'
  label?: string
}

export const Toggle: React.FC<ToggleSwitchProps> = ({ align, label, ...props }) => {
  return (
    <div className="w-fit flex flex-row items-center justify-center">
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
