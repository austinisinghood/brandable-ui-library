import { FC, useState, useEffect } from 'react'
import { twMerge } from 'tailwind-merge'
import { FaChevronDown } from 'react-icons/fa6'
import { DropdownProps } from '@/src/components/types'

export const Dropdown: FC<DropdownProps> = ({
  color,
  className,
  icon,
  label,
  name,
  onSelect,
  options,
  selectedOption,
  ...rest
}) => {
  const isRequired = rest.required ? '* Field is required' : ''

  const [isOpen, setIsOpen] = useState(false)
  const [focusedOptionIndex, setFocusedOptionIndex] = useState<number | null>(null)

  // Handle option selection
  const handleSelect = (option: { label: string; value: string }) => {
    onSelect(option)
    setIsOpen(false)
  }

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement | HTMLUListElement>) => {
    if (!isOpen) return

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault()
        setFocusedOptionIndex((prev) =>
          prev === null || prev === options.length - 1 ? 0 : prev + 1,
        )
        break
      case 'ArrowUp':
        e.preventDefault()
        setFocusedOptionIndex((prev) =>
          prev === null || prev === 0 ? options.length - 1 : prev - 1,
        )
        break
      case 'Enter':
        if (focusedOptionIndex !== null) {
          handleSelect(options[focusedOptionIndex])
        }
        break
      case 'Escape':
        setIsOpen(false)
        break
    }
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const dropdownElement = document.querySelector('.dropdown-container')
      if (dropdownElement && !dropdownElement.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className={twMerge(`dropdown-container relative w-full`, color)}>
      <label id={`${name}-label`} htmlFor={name} className="label label-text">
        {label}
      </label>
      <div className={twMerge('dropdown-wrapper relative z-20', className)}>
        <button
          id={name}
          className={twMerge(
            'dropdown-button w-full flex items-center justify-between chat cursor-pointer transition-all duration-300 ease-in-out',
            isOpen ? 'active' : '',
          )}
          onClick={() => setIsOpen(!isOpen)}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          aria-labelledby={`${name}-label`}
          onKeyDown={handleKeyDown}
        >
          <span>{selectedOption.label || 'Select an option'}</span>
          <div
            className={twMerge(
              `transition-all duration-300 ease-in-out`,
              isOpen ? 'rotate-180' : '',
            )}
            aria-hidden="true"
          >
            {icon ? icon : <FaChevronDown className="text-xl" />}
          </div>
        </button>
        {isOpen && (
          <ul
            className={twMerge(
              `dropdown-list relative z-20 overflow-auto opacity-20 max-h-60`,
              isOpen && 'opacity-100 h-auto',
            )}
            role="listbox"
            aria-labelledby={`${name}-label`}
            aria-activedescendant={
              focusedOptionIndex !== null
                ? `option-${options[focusedOptionIndex].value}`
                : undefined
            }
            tabIndex={-1}
            onKeyDown={handleKeyDown}
          >
            {options.map((option, index) => (
              <li
                key={option.value}
                id={`option-${option.value}`}
                className={twMerge(
                  'dropdown-item chat cursor-pointer transition-all duration-300 ease-in-out',
                  option.value === selectedOption.value ? 'active' : '',
                  index === focusedOptionIndex ? 'focused' : '',
                )}
                onClick={() => handleSelect(option)}
                role="option"
                aria-selected={option.value === selectedOption.value}
              >
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </div>
      {rest.title && (
        <div className="helper-text whisper" id={`${name}-helper`}>
          {rest.title}
        </div>
      )}
      {isRequired && (
        <div className="required-message whisper" id={`${name}-required`}>
          {isRequired}
        </div>
      )}
    </div>
  )
}
