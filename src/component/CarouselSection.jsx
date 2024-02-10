import React, { useState } from 'react'
import { ImageRender } from './ImageRender'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
export const CarouselSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const slides = [
        {id:0, url: 'https://images.pexels.com/photos/2050718/pexels-photo-2050718.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', p: 'Triple-Lens Camera Drone', h1: 'DJI MAVIC 3 PRO', p2: 'Inspiration in Focus'},
        {id:1, url: 'https://images.pexels.com/photos/1087180/pexels-photo-1087180.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', p: 'Triple-Lens Camera Drone', h1: 'DJI MAVIC 88 PRO', p2: 'Inspiration in Focus'},
        {id: 2, url: 'https://images.pexels.com/photos/9443065/pexels-photo-9443065.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', p: 'Triple-Lens Camera Drone', h1: 'DJI MAVIC 009 PRO', p2: 'Inspiration in Focus'},
    ]

    const goBack = () => {
        const firstSlide = currentIndex === 0;
        const newIndex = firstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex)
    }

    const goForward = () => {
        const lastSlide = currentIndex === slides.length - 1;
        const newIndex = lastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    
  return (
    <div className='text-white relative w-full flex'>
        {slides.map(slide => {
            if(slide.id === currentIndex){
                return <ImageRender slide={slide}/>
            }
        })}
        <div className='flex justify-between absolute top-80 w-full px-4 z-[3000]'>
            <FaArrowLeft onClick={goBack} className='text-white w-10 h-10 p-2 rounded-xl cursor-pointer hover:bg-white/40'/>
            <FaArrowRight onClick={goForward} className='text-white w-10 h-10 p-2 rounded-xl cursor-pointer hover:bg-white/40'/>
        </div>
    </div>
  )
}
