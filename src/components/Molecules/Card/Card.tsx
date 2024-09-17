import React from 'react'
import { twMerge } from 'tailwind-merge'

import { CardProps } from '@/src/components/types'

export const Card: React.FC<CardProps> = ({
  align = 'left', // alignment
  color = 'primary', // color
  children,
  width = 100, // percentage
}) => {
  return (
    <div className={twMerge(`card-container`, color, `w-[${width}%]`)}>
      <div className={twMerge(`card-wrapper flex flex-row`, align)}>{children}</div>
    </div>
  )
}

export default Card
