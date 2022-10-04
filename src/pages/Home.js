import React from 'react'
import heroImage from '../assets/image 1.png';
import { useNavigate } from 'react-router-dom';
export default function Home() {
    const navigate = useNavigate()
  return (
<section className="hero-section">
    <div className="items-center justify-items-center grid w-full px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
    <div className="lg:mt-0 lg:col-span-5 lg:order-first md:order-last sm:order-last">
            <img src={heroImage} alt=""/>
        </div>
        <div className="mr-auto lg:col-span-7">
            <h1 style={{'color':'#240D57'}}className="max-w-2xl mb-4 text-[64px] font-extrabold tracking-tight leading-none  xl:text-[64px] dark:text-white">Imagine if <span style={{  'background': 'linear-gradient(45.34deg, #EA52F8 5.66%, #0066FF 94.35%)', 'backgroundSize': '100%',
    'backgroundClip': 'text',
    'textFillColor': 'transparent',
    }}>snatchat</span> had events.</h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Easily host and share events with your friends across any social media..</p>
           <button onClick={() => navigate('create')} style={{'backgroundImage': 'linear-gradient(#8456EC, #E87BF8)','padding': '16px', 'borderRadius':'10px', 'color':'#FFFFFF'}}>create an event</button>
           <button onClick={() => navigate('/events')} style={{'backgroundImage': 'linear-gradient(#8456EC, #E87BF8)','padding': '16px', 'borderRadius':'10px', 'color':'#FFFFFF', 'marginLeft': '8px'}}>View events</button>

        </div>
    </div>
</section>  )
}
