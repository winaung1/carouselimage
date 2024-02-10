import React from 'react'

export const ImageRender = ({slide}) => {
    const styleImg = {
        backgroundImage: `url(${slide.url})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100vh',
        zIndex: '1000px'
    }
    console.log(slide)
  return (
    <div style={styleImg} className='relative fade'>
        <div className='w-full z-[100] h-screen bg-black/60'/>
        <div className='z-[2000] absolute w-full top-40 left-0'>
            <div>
                <h1 className='text1 updown'>{slide.p}</h1>
                <p className='text2 updown2 text-2xl md:text-5xl font-[rowdies] py-6 md:py-3'>{slide.h1}</p>
                <p className='text3 updown3'>{slide.p2}</p>
            </div>
            <div className='text-4 updown4 flex justify-center space-x-4 my-4 mt-40'>
                <button className='bg-[#219AB3] text-white rounded-full px-5 py-2'>Order Now</button>
                <button className='bg-transparent border border-gray text-white rounded-full px-5 py-2'>See More</button>
            </div>
        </div>
    </div>
  )
}
