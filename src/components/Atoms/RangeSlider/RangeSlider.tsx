import { FC, useState, useEffect } from 'react'

interface RangeSliderProps {
  step: number
  min: number
  max: number
  defaultMinValue?: number
  defaultMaxValue?: number
}

export const RangeSlider: FC<RangeSliderProps> = ({
  step = 1,
  min = 0,
  max = 100,
  defaultMinValue = min,
  defaultMaxValue = max,
}) => {
  const [minValue, setMinValue] = useState(defaultMinValue)
  const [maxValue, setMaxValue] = useState(defaultMaxValue)

  useEffect(() => {
    // Ensure the default values are within the overall range
    setMinValue(Math.min(Math.max(defaultMinValue, min), max))
    setMaxValue(Math.min(Math.max(defaultMaxValue, min), max))
  }, [defaultMinValue, defaultMaxValue, min, max])

  const minPos = ((minValue - min) / (max - min)) * 100
  const maxPos = ((maxValue - min) / (max - min)) * 100

  const handleMinChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(event.target.value)
    const newMinVal = Math.min(value, maxValue - step)
    setMinValue(newMinVal)
  }

  const handleMaxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(event.target.value)
    const newMaxVal = Math.max(value, minValue + step)
    setMaxValue(newMaxVal)
  }

  return (
    <div className="rangeslider-container">
      <div className="rangeslider-wrapper">
        <input
          className="range-input"
          type="range"
          value={minValue}
          min={min}
          max={max}
          step={step}
          onChange={handleMinChange}
        />
        <input
          className="range-input"
          type="range"
          value={maxValue}
          min={min}
          max={max}
          step={step}
          onChange={handleMaxChange}
        />
      </div>
      <div className="range-control-wrapper">
        <div className="range-control" style={{ left: `${minPos}%` }}>
          <div className="range-control-indicator talk">{minValue}</div>
        </div>
        <div className="range-rail">
          <div
            className="range-inner-rail"
            style={{ left: `${minPos}%`, right: `${100 - maxPos}%` }}
          />
        </div>
        <div className="range-control" style={{ left: `${maxPos}%` }}>
          <div className="range-control-indicator talk">{maxValue}</div>
        </div>
      </div>

      <div className="w-full flex items-center justify-between talk pt-12">
        <div className="min-value">{min}</div>
        <div className="max-value">{max}</div>
      </div>
    </div>
  )
}
