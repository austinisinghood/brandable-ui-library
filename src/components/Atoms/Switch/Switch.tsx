'use client'

import { FC, useState } from 'react'
import { twMerge } from 'tailwind-merge'

import { SwitchProps } from '@/src/components/types'

export const Switch: FC<SwitchProps> = ({
  color = 'primary',
  options = ['Option1', 'Option2', 'Option3'],
  initialOption = 'Option1',
  onChange,
}) => {
  const [selectedOption, setSelectedOption] = useState<string>(initialOption)

  const handleOptionChange = (option: string) => {
    setSelectedOption(option)
    if (onChange) onChange(option)
  }

  const optionCount = options.length
  const highlightWidth = 100 / optionCount
  const selectedIndex = options.indexOf(selectedOption)

  return (
    <div className={twMerge(`switch-container`, color)}>
      <div className="switch-wrapper">
        {options.map((option, index) => (
          <div
            key={index}
            className={twMerge('switch-option', selectedOption === option ? 'selected' : '')}
            onClick={() => handleOptionChange(option)}
          >
            {option}
          </div>
        ))}
        <div
          className="switch-highlight"
          style={{
            width: `${highlightWidth}%`,
            transform: `translateX(${selectedIndex * 100}%)`,
          }}
        />
      </div>
    </div>
  )
}
