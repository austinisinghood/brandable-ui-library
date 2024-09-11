import { twMerge } from 'tailwind-merge'

import { InputProps } from '@/src/components/types'

export const Input: React.FC<InputProps> = ({
  color = 'primary',
  name,
  label,
  ...rest
}: InputProps) => {
  const isRequired = rest.required ? '* Field is required' : ''

  return (
    <div className={twMerge(`input-wrapper w-full`, color)}>
      <label htmlFor={name} className="label label-text">
        {label}
      </label>
      <input name={name} id={name} className="text-input chat" {...rest} />
      {rest.title && <span className="helper-text whisper">{rest.title}</span>}
      {isRequired && <span className="required-message whisper">{isRequired}</span>}
    </div>
  )
}
