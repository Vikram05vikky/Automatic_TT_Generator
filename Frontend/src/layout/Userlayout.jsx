
import UserLeftbar from '@/components/Users/UserLeftbar'
import UserTopbar from '@/components/Users/UserTopbar'
import React from 'react'
import { Outlet } from 'react-router-dom'
const Userlayout = () => {
  return (
    <div className='h-screen w-screen overflow-x-hidden m-0 p-0 flex flex-row overflow-y-auto'>
    <UserLeftbar/>
    <div className='h-screen w-5/6 flex justify-center items-center flex-col'>
    <UserTopbar/>
        <div className='h-[92vh] w-full flex flex-col justify-center items-center'>
          <Outlet/>
          </div>
    </div>
    </div>  )
}

export default Userlayout