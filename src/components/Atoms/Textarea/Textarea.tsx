import { TextareaHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  color: 'primary' | 'secondary' | 'tertiary' | 'accent' | 'ink' | 'paper'
  name: string
  label: string
}

export const Textarea: React.FC<TextareaProps> = ({
  color = 'primary',
  name,
  label,
  ...rest
}: TextareaProps) => {
  const isRequired = rest.required ? '* Field is required' : ''

  return (
    <div className={twMerge(`textarea-wrapper w-full`, color)}>
      <label htmlFor={name} className="label label-text">
        {label}
      </label>
      <textarea name={name} id={name} className="textarea chat" {...rest} />
      {rest.title && <span className="helper-text whisper">{rest.title}</span>}
      {isRequired && <span className="required-message whisper">{isRequired}</span>}
    </div>
  )
}
