import { FC, InputHTMLAttributes } from 'react'

import { twMerge } from 'tailwind-merge'

import { CheckboxProps } from '@/src/components/types'

export const Checkbox: FC<CheckboxProps> = ({
  className,
  color = 'primary',
  label,
  name,
  id,
  ...rest
}) => {
  return (
    <div
      className={twMerge(
        `checkbox-wrapper w-fit h-fit flex flex-row items-center justify-center space-x-2`,
        className,
        color,
      )}
    >
      <input
        id={name}
        name={name}
        className="checkbox transition-all ease-in-out duration-200"
        type="checkbox"
        {...rest}
      />
      {label && (
        <label htmlFor={name} className="label label-text cursor-pointer">
          {label}
        </label>
      )}
    </div>
  )
}
