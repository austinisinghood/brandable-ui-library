'use client'

import { FC, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { FaChevronDown } from 'react-icons/fa6'

type AccordionProps = {
  buttonClassName?: string
  contentClassName?: string
  panels: PanelProps[]
}

type PanelProps = {
  button: React.ReactNode
  content: React.ReactNode
}

export const Accordion: FC<AccordionProps> = ({
  buttonClassName,
  contentClassName,
  panels,
}: AccordionProps) => {
  const [activePanel, setActivePanel] = useState<number | null>(null)
  const [isAnimating, setIsAnimating] = useState(false)

  const handleClick = (index: number) => {
    if (isAnimating) return

    setIsAnimating(true)

    if (activePanel === index) {
      setActivePanel(null)
      setTimeout(() => {
        setIsAnimating(false)
      }, 300)
    } else {
      if (activePanel !== null) {
        setActivePanel(null)
        setTimeout(() => {
          setActivePanel(index)
          setTimeout(() => {
            setIsAnimating(false)
          }, 150)
        }, 300)
      } else {
        setActivePanel(index)
        setTimeout(() => {
          setIsAnimating(false)
        }, 150)
      }
    }
  }

  return (
    <div className={twMerge(`w-full accordion-container p-6`)}>
      {panels.map((panel: PanelProps, index: number) => (
        <div key={index} className="w-full accordion-panel">
          <button
            onClick={() => handleClick(index)}
            className={twMerge(
              `w-full flex justify-between items-center py-4 px-6 text-left`,
              buttonClassName,
            )}
          >
            {panel.button}
            <FaChevronDown
              className={twMerge(
                `text-xl transition-all duration-300 ease-in-out`,
                activePanel === index ? 'rotate-180' : '',
              )}
            />
          </button>
          <div
            className={twMerge(
              `w-full overflow-hidden transition-all duration-300 ease-in-out`,
              activePanel === index ? `max-h-[1500px]` : `max-h-0`,
            )}
            style={{
              maxHeight: activePanel === index ? '1500px' : '0',
            }}
          >
            <div className="w-full p-6">
              <div className={twMerge(`pb-4`, contentClassName)}>{panel.content}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
