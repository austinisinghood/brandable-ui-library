import React, { FC } from 'react'
import { twMerge } from 'tailwind-merge'

import { SpinnerProps } from '@/src/components/types'

export const Spinner: FC<SpinnerProps> = ({ size = 'sm', color = 'border-slate-500' }) => {
  let spinnerSize
  switch (size) {
    case 'sm':
      spinnerSize = 'w-6 min-w-6 h-6 min-h-6 border-2'
      break
    case 'md':
      spinnerSize = 'w-12 min-w-12 h-12 min-h-12 border-4'
      break
    case 'lg':
      spinnerSize = 'w-24 min-1-24 h-24 min-h-24 border-8'
      break
    default:
      spinnerSize = 'w-12 min-w-12 h-12 min-h-12 border-4'
      break
  }

  return (
    <div
      className={twMerge(
        `relative ${spinnerSize} border-none flex items-center justify-center p-2`,
      )}
    >
      <div
        className={twMerge(
          `absolute z-20 ${spinnerSize} ${color} border-t-transparent rounded-full animate-spin`,
        )}
      ></div>
      <div
        className={twMerge(`absolute z-10 ${spinnerSize} ${color} opacity-50 rounded-full`)}
      ></div>
    </div>
  )
}
