import { Facebook, Twitch, Twitter } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className="bg-[#fefefe]  bg-transparent backdrop-filter backdrop-blur-[4px]  gap-[2cm] 
      absolute bottom-0 left-0 w-full h-[8vh] flex flex-row justify-center items-center border-t-[1px] font-mono ">
        <div className="h-full w-3/4 flex flex-row justify-start pl-[5vw] items-center text-xl font-bold text-[--inp-text]">
            ©️ 2024
        </div>
        <div className="h-full w-3/4 flex flex-row  justify-end items-center text-2xl font-bold text-[--inp-text] gap-9 pr-[5vw]">

            <a href='google.com' target='_blank'>
                <Facebook/>
            </a>
            <a href='google.com' target='_blank'>
                <Twitter/>
            </a>
        </div>
        </div>
    </div>
  )
}

export default Footer
