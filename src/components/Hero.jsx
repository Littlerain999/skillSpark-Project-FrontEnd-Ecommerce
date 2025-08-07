import React from 'react'
import Assets from '../assets/asset'

const { HeroData, Icons } = Assets

const { image, comment, title, description } = HeroData

function Hero() {
    const { Diamond, DiamondActive } = Icons
  return (<>
    <div className="hero relative min-h-[500px] flex justify-center items-center">
        <img src={image} alt="background image" className='absolute top-0 right-0 bottom-0 left-0 h-[100%] w-[100%] object-center object-cover' />
        <div className="details flex flex-col items-start gap-4 relative w-[100%] max-w-[600px]">
            <p className='font-[500] text-accent'>{comment}</p>
            <h1 className='text-4xl leading-[55px] w-[80%] font-bold'>{title}</h1>
            <p className='w-[80%] font-bold text-text'>{description}</p>
            <button className='bg-accent text-white font-bold px-[40px] py-[16px] rounded-[2px]'>Shop Now</button>
        </div>
        <div className="toggler absolute flex list-none gap-3 text-accent text-[14px] bottom-4">
            <li id="active"><DiamondActive /></li>
            <li id=""><Diamond /></li>
            <li id=""><Diamond /></li>
        </div>
    </div>
  </>)
}

export default Hero