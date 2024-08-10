// import React from 'react'
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import { ModeToggle } from '../trigger'

// const AdminTopbar = () => {
//   return (
//     <div className='bg-blue-50  justify-center items-center w-[98%] h-[8vh] flex flex-col rounded-2xl mt-[2vh]'>
//       <div className='w-[90%] flex justify-end gap-5'>
//       <div>
//         <ModeToggle/>
//       </div>
//         <div>
//       <Avatar>
//         <AvatarImage  />
//         <AvatarFallback>V</AvatarFallback>
//       </Avatar>
//       </div>

//       </div>
//     </div>
//   )
// }

// export default AdminTopbar


import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ModeToggle } from '../trigger';

const AdminTopbar = () => {
  return (
    <div className=' bg-blue-50 dark:bg-blue-800/20 justify-center items-center w-[98%] h-[8vh] flex flex-col rounded-2xl mt-[2vh]'>
      <div className='w-[90%] flex justify-end gap-5'>
        <div>
          <ModeToggle />
        </div>
        <div>
          <Avatar>
            <AvatarImage />
            <AvatarFallback>V</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
}

export default AdminTopbar;
