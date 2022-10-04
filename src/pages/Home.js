import React from 'react'
import heroImage from '../assets/image 1.png';
import { Link } from 'react-router-dom';
export default function Home() {
  return (
<section className="hero-section">
    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
    <div className="lg:mt-0 lg:col-span-5 lg:flex md:flex-col-reverse">
            <img src={heroImage} alt=""/>
        </div>
        <div className="mr-auto place-self-center lg:col-span-7">
            <h1 style={{'color':'#240D57'}}className="max-w-2xl mb-4 text-[64px] font-extrabold tracking-tight leading-none  xl:text-[64px] dark:text-white">Imagine if <span style={{  'background': 'linear-gradient(45.34deg, #EA52F8 5.66%, #0066FF 94.35%)'}}>snatchat</span> had events.</h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Easily host and share events with your friends across any social media..</p>
           <Link to= '/create'> <button style={{'backgroundImage': 'linear-gradient(#8456EC, #E87BF8)','padding': '16px', 'borderRadius':'10px', 'color':'#FFFFFF'}}>create my event</button></Link>
        </div>
    </div>
</section>  )
}
