import { FC, useState, useRef, useEffect } from 'react'
import { twMerge } from 'tailwind-merge'

type Color = {
  name: string
}

interface ColorProps {
  colors: Color[]
}

type ColorBlockProps = {
  color: Color
}

function rgbToHex(rgb: any) {
  // Parse the RGB components from the "rgb(r, g, b)" string
  const [r, g, b] = rgb.match(/\d+/g).map(Number)

  // Convert the RGB values to hexadecimal format
  const hexR = r.toString(16).padStart(2, '0')
  const hexG = g.toString(16).padStart(2, '0')
  const hexB = b.toString(16).padStart(2, '0')

  // Combine the hexadecimal values to form the color in "#RRGGBB" format
  const hexColor = `#${hexR}${hexG}${hexB}`

  return hexColor
}

const ColorBlock = ({ color }: ColorBlockProps) => {
  const colorExampleRef = useRef<HTMLDivElement>(null)
  const [hexColor, setHexColor] = useState<string>('')

  useEffect(() => {
    if (colorExampleRef.current) {
      const computedStyle = getComputedStyle(colorExampleRef.current)
      const rgbColor = computedStyle.backgroundColor
      const hexColor = rgbToHex(rgbColor)
      console.log(hexColor)
      setHexColor(hexColor)
    }
  }, [])

  return (
    <div className="w-1/3 h-auto flex flex-col items-center justify-center p-2">
      <div
        className={twMerge(`w-full h-[200px] ${color.name} rounded-lg shadow-lg color-example`)}
        ref={colorExampleRef}
      />
      <div className="w-full flex flex-col pt-4 text-center pb-4">
        <label className="talk">{color.name.split('bg-')}</label>
        {/* <small className="chat">{hexColor}</small> */}
      </div>
    </div>
  )
}

export const Color: FC<ColorProps> = ({ colors }) => {
  return (
    <div className={twMerge(`w-full flex flex-row items-center justify-center flex-wrap`)}>
      <h1 className="w-full roar text-ink px-2 py-12">Colors</h1>
      {colors.map((color, index) => {
        return <ColorBlock key={index} color={color} />
      })}
    </div>
  )
}
