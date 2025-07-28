import React, { useState, useEffect } from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import { cn } from '@/lib/utils'
import Autoplay from 'embla-carousel-autoplay'

const items = [
  '/images/banner1.jpg',
  '/images/banner2.jpg',
  '/images/banner3.jpg'
]

const HomeCarousel = () => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [api, setApi] = useState(null)

  useEffect(() => {
    if (!api) return

    const onSelect = () => {
      setSelectedIndex(api.selectedScrollSnap())
    }

    api.on('select', onSelect)
    onSelect()

    return () => api.off('select', onSelect)
  }, [api])

  return (
    <div className='mx-auto'>
      <Carousel
        className='w-full'
        opts={{ loop: true }}
        setApi={setApi}
        plugins={[Autoplay({ delay: 3000, stopOnInteraction: false })]}
      >
        <CarouselContent>
          {items.map((src, index) => (
            <CarouselItem
              key={index}
              className='relative h-[230px] sm:h-[300px] md:h-[350px] lg:h-[400px] 2xl:h-[450px]'
            >
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className='w-full h-full object-cover'
              />
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Arrow buttons (nằm trong ảnh) */}
        <CarouselPrevious className='left-4 bg-white/70 hover:bg-white' />
        <CarouselNext className='right-4 bg-white/70 hover:bg-white' />

        {/* Dot indicators */}
        <div className='absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10'>
          {items.map((_, index) => (
            <div
              key={index}
              className={cn(
                'h-2 w-2 rounded-full bg-white',
                index === selectedIndex ? 'opacity-100' : 'opacity-50'
              )}
            />
          ))}
        </div>
      </Carousel>
    </div>
  )
}

export default HomeCarousel
