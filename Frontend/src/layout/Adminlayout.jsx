import AdminLeftbar from '@/components/Admin/AdminLeftbar'
import AdminTopbar from '@/components/Admin/AdminTopbar'
import React from 'react'
import { Outlet } from 'react-router-dom'
const Adminlayout = () => {
  return (
    <div className='h-screen w-screen overflow-x-hidden m-0 p-0 flex flex-row overflow-y-auto'>
    <AdminLeftbar className='fixed'/>
    <div className='h-screen w-5/6 flex justify-center items-center flex-col'>
          <AdminTopbar className='fixed'/>
        <div className='h-[92vh] w-full flex flex-col justify-center items-center overflow-y-auto'>
          <Outlet/>
          </div>
    </div>
    </div>  )
}

export default Adminlayout

// import AdminLeftbar from '@/components/Admin/AdminLeftbar'
// import AdminTopbar from '@/components/Admin/AdminTopbar'
// import React from 'react'
// import { Outlet } from 'react-router-dom'

// const Adminlayout = () => {
//   return (
//     <div className='h-screen w-screen overflow-x-hidden m-0 p-0 flex flex-row'>
//       <AdminLeftbar className='fixed h-screen w-1/6' />
//       <div className='ml-1/6 w-5/6 flex flex-col'>
//         <AdminTopbar className='fixed w-5/6' />
//         <div className='mt-[10vh] h-[90vh] w-full flex flex-col justify-center items-center overflow-y-auto'>
//           <Outlet />
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Adminlayout
