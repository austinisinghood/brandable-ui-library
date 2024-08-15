import { FC, useState } from 'react'
import { twMerge } from 'tailwind-merge'

import { FaChevronDown } from 'react-icons/fa6'

interface DropdownProps {
  className?: string
  icon?: React.ReactNode
  label?: string
  name?: string
  onSelect: (option: { label: string; value: string }) => void
  options: { label: string; value: string }[]
  selectedOption: { label: string; value: string }
}

export const Dropdown: FC<DropdownProps> = ({
  className,
  icon,
  label,
  name,
  onSelect,
  options,
  selectedOption,
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleSelect = (option: { label: string; value: string }) => {
    onSelect(option)
    setIsOpen(false)
  }

  return (
    <div className="dropdown-container relative w-full">
      <label htmlFor={name} className="label label-text">
        {label}
      </label>
      <div className={twMerge('dropdown-wrapper relative z-20', className)}>
        <button
          className={twMerge(
            'dropdown-button flex items-center justify-between cursor-pointer transition-all duration-300 ease-in-out w-full',
            isOpen ? 'active' : '',
          )}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>{selectedOption.label || 'Select an option'}</span>
          <div
            className={twMerge(
              `transition-all duration-300 ease-in-out`,
              isOpen ? 'rotate-180' : '',
            )}
          >
            {icon ? icon : <FaChevronDown className="text-xl" />}
          </div>
        </button>
        <ul
          className={twMerge(
            `dropdown-list relative z-20 h-0 overflow-hidden opacity-20`,
            isOpen && 'opacity-100 h-auto',
          )}
          role="listbox"
          aria-activedescendant={selectedOption.label}
          tabIndex={-1}
        >
          {options.map((option) => (
            <li
              key={option.value}
              className={twMerge(
                'dropdown-item cursor-pointer transition-all duration-300 ease-in-out',
                option.value === selectedOption.value ? 'active' : '',
              )}
              onClick={() => handleSelect(option)}
              role="option"
              aria-selected={option === selectedOption}
            >
              {option.label}
            </li>
          ))}
        </ul>
      </div>
      {isOpen && (
        <div
          className="absolute z-10 top-0 left-0 w-screen h-screen"
          onMouseOver={() => setIsOpen(false)}
        />
      )}
    </div>
  )
}
