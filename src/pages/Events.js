import React from 'react'
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
            <div class="flex flex-col">
  <div class="flex text-center max-w-sm mb-4">
    <div class="w-16 h-16 bg-white-400 shadow">
      <div class="p-4 text-2xl">
        <i class="fa fa-birthday-cake" aria-hidden="true"></i>
      </div>
    </div>
    <div class="w-auto text-grey-darker items-center p-4">
      <span class="text-lg font-bold pb-4">
        18 August 6:00PM </span>
      <p class="leading-tight">
        to 19 August 1:00PM UTC +10
      </p>
    </div>
  </div>

  <div class="flex max-w-sm mb-4">
    <div class="w-16 text-center h-16 bg-white shadow">
      <div class="p-4 text-2xl">
        <i class="fa fa-map-marker" aria-hidden="true"></i>
      </div>
    </div>
    <div class="w-auto text-grey-darker items-center p-4">
      <span class="text-lg font-bold pb-4">
        Street name </span>
      <p class="leading-tight">
        Suburb, State, Postcode
      </p>
    </div>
  </div>

</div>
</div>
    </div>
        
                        
  
</section>   
)
}
