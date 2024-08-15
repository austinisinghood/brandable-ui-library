'use client'

import { FC, useState } from 'react'
import { twMerge } from 'tailwind-merge'

import { FaChevronDown } from 'react-icons/fa6'

type AccordionProps = {
  titleClassName?: string
  contentClassName?: string
  icon?: React.ReactNode
  panels: PanelProps[]
}

type PanelProps = {
  title: React.ReactNode
  content: React.ReactNode
}

export const Accordion: FC<AccordionProps> = ({
  titleClassName,
  contentClassName,
  icon,
  panels,
}: AccordionProps) => {
  const arrayLength = panels.length
  const [activePanel, setActivePanel] = useState<number | null>(null)
  const [isAnimating, setIsAnimating] = useState(false)

  const handleClick = (index: number) => {
    if (isAnimating) return

    setIsAnimating(true)

    if (activePanel === index) {
      setActivePanel(null)
      setTimeout(() => {
        setIsAnimating(false)
      }, 300) // Duration of closing animation
    } else {
      if (activePanel !== null) {
        setActivePanel(null)
        setTimeout(() => {
          setActivePanel(index)
          setTimeout(() => {
            setIsAnimating(false)
          }, 150) // Duration of opening animation
        }, 300) // Duration of closing animation
      } else {
        setActivePanel(index)
        setTimeout(() => {
          setIsAnimating(false)
        }, 150) // Duration of opening animation
      }
    }
  }

  return (
    <div className={twMerge(`w-full accordion-container p-6 border-2 border-red-500`)}>
      {panels.map((panel: PanelProps, index: number) => (
        <div key={index} className="w-full accordion-panel">
          <button
            onClick={() => handleClick(index)}
            className="w-full flex justify-between items-center py-4 px-6 text-left"
          >
            <div className={titleClassName}>{panel.title}</div>
            <div
              className={twMerge(
                `transition-all duration-300 ease-in-out`,
                activePanel === index ? 'rotate-180' : '',
              )}
            >
              {icon ? icon : <FaChevronDown className="text-xl" />}
            </div>
          </button>
          <div
            className={twMerge(
              `w-full overflow-hidden transition-all duration-300 ease-in-out`,
              activePanel === index ? `max-h-[1500px]` : `max-h-0`,
              index === arrayLength - 1 ? 'last-item' : '',
            )}
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
