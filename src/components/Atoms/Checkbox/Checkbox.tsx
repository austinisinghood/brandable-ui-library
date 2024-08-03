import { FC, InputHTMLAttributes } from 'react'

import { twMerge } from 'tailwind-merge'

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
  name: string
  label: string
}

export const Checkbox: FC<CheckboxProps> = ({ className, name, label, id, ...rest }) => {
  return (
    <div
      className={twMerge(
        `checkbox-wrapper w-fit h-fit flex flex-row items-center justify-center space-x-2`,
        className,
      )}
    >
      <input
        id={name}
        name={name}
        className="checkbox transition-all ease-in-out duration-200"
        type="checkbox"
        {...rest}
      />
      <label htmlFor={name} className="label label-text cursor-pointer">
        {label}
      </label>
    </div>
  )
}
