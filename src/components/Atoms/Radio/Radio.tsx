import { twMerge } from 'tailwind-merge'

import { RadioProps } from '@/src/components/types'

export const Radio: React.FC<RadioProps> = ({
  className,
  color = 'primary',
  name,
  label,
  id,
  ...rest
}: RadioProps) => {
  return (
    <div
      className={twMerge(
        `radio-wrapper w-fit h-fit flex flex-row items-center justify-center space-x-2`,
        className,
        color,
      )}
    >
      <input
        id={id}
        name={name}
        className="radio transition-all ease-in-out duration-200"
        type="radio"
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
