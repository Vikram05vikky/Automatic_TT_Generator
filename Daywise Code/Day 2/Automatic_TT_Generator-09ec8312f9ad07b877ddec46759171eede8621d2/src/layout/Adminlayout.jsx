import AdminLeftbar from '@/components/Admin/AdminLeftbar'
import AdminTopbar from '@/components/Admin/AdminTopbar'
import React from 'react'
import { Outlet } from 'react-router-dom'
const Adminlayout = () => {
  return (
    <div className='h-screen w-screen overflow-x-hidden m-0 p-0 flex flex-row overflow-y-auto'>
    <AdminLeftbar/>
    <div className='h-screen w-5/6 flex justify-center items-center flex-col'>
          <AdminTopbar/>
        <div className='h-[92vh] w-full flex flex-col justify-center items-center'>
          <Outlet/>
          </div>
    </div>
    </div>  )
}

export default Adminlayout