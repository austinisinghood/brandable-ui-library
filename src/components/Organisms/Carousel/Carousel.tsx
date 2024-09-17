import { FC, useState, useEffect } from 'react'
import { twMerge } from 'tailwind-merge'

import { CarouselProps } from '@/src/components/types'

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6'

export const Carousel: FC<CarouselProps> = ({
  color = 'primary',
  iconLeft,
  iconRight,
  images,
  autoSlide = false,
  slideInterval = 3000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length
    setCurrentIndex(newIndex)
  }

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % images.length
    setCurrentIndex(newIndex)
  }

  // Handle auto sliding
  useEffect(() => {
    if (!autoSlide) return

    const intervalId = setInterval(nextSlide, slideInterval)
    return () => clearInterval(intervalId)
  }, [autoSlide, slideInterval, currentIndex])

  return (
    <>
      {/* Carousel Wrapper */}
      <div className={twMerge(`carousel-wrapper relative w-full overflow-hidden`, color)}>
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="relative flex-shrink-0 w-full h-56 md:h-96">
              <div className="carousel-overlay absolute z-10 w-full h-full inset-0" />
              <img
                src={image}
                className="relative z-0 block w-full h-full object-cover"
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </div>

        {/* Slider indicators */}
        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`indicator ${index === currentIndex && 'active'}`}
              aria-current={index === currentIndex ? 'true' : 'false'}
              aria-label={`Slide ${index + 1}`}
              onClick={() => setCurrentIndex(index)}
            ></button>
          ))}
        </div>

        {/* Slider controls */}
        <button
          type="button"
          className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={prevSlide}
          aria-label="Previous Slide"
        >
          <div className="arrow inline-flex items-center justify-center">
            <div className="icon">
              {iconLeft ? iconLeft : <FaChevronLeft className="text-xl" />}
            </div>
          </div>
        </button>
        <button
          type="button"
          className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={nextSlide}
          aria-label="Next Slide"
        >
          <div className="arrow inline-flex items-center justify-center">
            <div className="icon">
              {iconRight ? iconRight : <FaChevronRight className="text-xl" />}
            </div>
          </div>
        </button>
      </div>
    </>
  )
}
