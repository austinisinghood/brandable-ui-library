'use client'

import { FC, useState } from 'react'
import { twMerge } from 'tailwind-merge'

import { FaChevronDown } from 'react-icons/fa6'

import { PanelProps, AccordionProps } from '@/src/components/types'

export const Accordion: FC<AccordionProps> = ({
  color,
  titleClassName,
  contentClassName,
  icon,
  panels,
}: AccordionProps) => {
  const [activePanel, setActivePanel] = useState<number | null>(0)

  const handleClick = (index: number) => {
    if (activePanel === index) {
      setActivePanel(null)
    } else {
      setActivePanel(index)
    }
  }

  return (
    <div className={twMerge(`w-full accordion-container p-6`, color)}>
      {panels.map((panel: PanelProps, index: number) => (
        <div key={index} className="w-full accordion-panel">
          <button
            onClick={() => handleClick(index)}
            className="w-full flex justify-between items-center py-4 px-6 text-left"
          >
            <div className={twMerge(`panel-text`, titleClassName)}>{panel.title}</div>
            <div
              className={twMerge(
                `panel-icon transition-transform duration-300 ease-in-out`,
                activePanel === index ? 'rotate-180' : '',
              )}
            >
              {icon ? icon : <FaChevronDown className="text-xl" />}
            </div>
          </button>
          <div
            className={twMerge(
              `panel-content w-full overflow-hidden transition-all ease-in-out`,
              activePanel === index ? `max-h-[1500px] duration-300` : `max-h-0 duration-200`,
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
