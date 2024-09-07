'use client'

import { FC, useState } from 'react'
import { twMerge } from 'tailwind-merge'

type Option = string

interface SwitchProps {
  options: [Option, Option] | [Option, Option, Option]
  initialOption?: Option
  onChange?: (selectedOption: Option) => void
}

export const Switch: FC<SwitchProps> = ({
  options = ['Option1', 'Option2', 'Option3'],
  initialOption = 'Option1',
  onChange,
}) => {
  const [selectedOption, setSelectedOption] = useState<Option>(initialOption)

  const handleOptionChange = (option: Option) => {
    setSelectedOption(option)
    if (onChange) onChange(option)
  }

  const optionCount = options.length
  const highlightWidth = 100 / optionCount
  const selectedIndex = options.indexOf(selectedOption)

  return (
    <div className="switch-container">
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
