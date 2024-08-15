import { InputHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
  name: string
  label: string
}

export const Radio: React.FC<InputProps> = ({
  className,
  name,
  label,
  id,
  ...rest
}: InputProps) => {
  return (
    <div
      className={twMerge(
        `radio-input-container w-fit h-fit flex flex-row items-center justify-center space-x-2`,
        className,
      )}
    >
      <input
        id={id}
        name={name}
        className="input transition-all ease-in-out duration-200"
        type="radio"
        {...rest}
      />
      <label htmlFor={id} className="label label-text cursor-pointer">
        {label}
      </label>
    </div>
  )
}
