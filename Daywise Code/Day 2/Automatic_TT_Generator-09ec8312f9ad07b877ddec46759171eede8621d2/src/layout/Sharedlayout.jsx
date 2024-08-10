import { AnimatedGridPatternDemo } from '@/components/AnimatedGridPatternDemo'
import { MeteorDemo } from '@/components/meteroids'
import Footer from '@/components/Shared/Footer'
import Nav from '@/components/Shared/Nav'
import React from 'react'
import { Outlet } from 'react-router-dom'

const Sharedlayout = () => {
  return (
    <>
    <MeteorDemo/>
    {/* <AnimatedGridPatternDemo/> */}
    <div className='h-screen w-screen flex flex-row justify-center items-center p-0 m-0'>
    <Nav/>
        <Outlet/>
    <Footer/>
    </div>
    </>
  )
}

export default Sharedlayout