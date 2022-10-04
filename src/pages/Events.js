import React from 'react'
import { useNavigate } from 'react-router-dom'
import eventImage from '../assets/Event-image.png'

export default function Events() {
  const navigate = useNavigate();
  return (
<section className="hero-section">
    <div className="items-center justify-items-center grid w-full px-4 py-8 lg:gap-8 lg:grid-cols-12">
    <div className="lg:mt-0 lg:col-span-5 lg:order-last md:order-first"  >
            <img style={{'width':'500px', 'height': '500px'}} src={eventImage} alt=""/>
        </div>
        <div className="lg:col-span-7">
            <h1 style={{'color':'#240D57'}}className="max-w-2xl mb-4 text-[64px] font-extrabold tracking-tight leading-none">Birthday Bash</h1>
            <p className="mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Hosted by Elysia</p>
            <div class="lg:items-center flex flex-col">
  <div class="flex max-w-sm mb-4">
    <div class="w-16 text-center h-16 bg-white shadow">
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
  <button onClick={() => navigate('/')} style={{'backgroundImage': 'linear-gradient(#8456EC, #E87BF8)','padding': '4px','width': '100%', 'borderRadius':'10px', 'color':'#FFFFFF', 'marginBlock': '16px' }}>Go back</button>

</div>
</div>
    </div>
        
                        
  
</section>   
)
}
