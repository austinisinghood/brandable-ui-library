import { InputHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label: string
}

export const Input: React.FC<InputProps> = ({ name, label, ...rest }: InputProps) => {
  const isRequired = rest.required ? '* Field is required' : ''

  return (
    <div className="input-container w-full">
      <label htmlFor={name} className="label label-text">
        {label}
      </label>
      <input name={name} id={name} className="text-input chat" {...rest} />
      {rest.title && <span className="required-message whisper">{rest.title}</span>}
      {isRequired && <span className="required-message whisper">{isRequired}</span>}
    </div>
  )
}
