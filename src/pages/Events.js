import React from 'react'
// import { CakeIcon, LocationOnIcon } from '@mui/material/icons';
import eventImage from '../assets/Event-image.png'

export default function events() {
  return (
<section className="hero-section items-center">
    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
    <div className="lg:mt-0 lg:col-span-5 lg:flex-row-reverse md:flex-col-reverse items-center" >
            <img src={eventImage} alt=""/>
        </div>
        <div className="mr-auto place-self-center lg:col-span-7">
            <h1 style={{'color':'#240D57'}}className="max-w-2xl mb-4 text-[64px] font-extrabold tracking-tight leading-none  xl:text-[64px] dark:text-white">Birthday Bash</h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Hosted by Elysia</p>
            <div className="">
            <div className="">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
          18 August 6:00PM
          </p>
          <p>to 19 August 1:00PM UTC +10</p>
        
        </div>
        
        
       
        <i class="fa fa-birthday-cake" aria-hidden="true"></i>      </div>
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
          Street name          
          </p>
        </div>
       
        <p className="text-base text-gray-700 md:text-lg">
          Suburb, State, Postcode
        </p>
        <i class="fa fa-map-marker" aria-hidden="true"></i>      </div>
        
      </div>
    </div>
        </div>
                        
    </div>
</section>   )
}
