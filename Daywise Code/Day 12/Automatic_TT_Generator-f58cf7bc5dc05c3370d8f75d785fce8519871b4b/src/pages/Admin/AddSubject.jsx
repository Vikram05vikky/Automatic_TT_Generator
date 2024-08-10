// // import { Label } from '@/components/ui/label'
// // import React from 'react'
// // import cn from 'classnames';
// // import { useState } from 'react';

// // const AddSubject = () => {

// //   const [staffId, setStaffId] = useState('');
// //   const [staffName, setStaffName] = useState('');

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     alert('Subject added');
// //     setSubjectCode('');
// //     setSubjectName('');
// //     setSubjectCredit('');
// //     setSubjectHours('');
// //   };

// //   return (
// //     <div className='font-mono h-screen mt-[15vh]'>
// //       <form onSubmit={handleSubmit}className=''>
// //         <div  className='font-mono flex flex-col gap-5'>
// //         {/* <Label>Enter Staff </Label>
// //         <input className={cn(
// //               " p-4 bg-[rgb(252,_250,_250)] rounded-[5px]",
// //               "focus:border-b-[4px_solid_#ea8f21] text-black"
// //             )}></input>
// //         <Label>Enter Staff Name</Label>
// //         <input className={cn(
// //               "p-4 bg-[rgb(252,_250,_250)] rounded-[5px]",
// //               "focus:border-b-[4px_solid_#ea8f21] text-black"
// //             )} ></input> */}
// //             <div className="flex items-center ">
// //             <Label className="w-2/4 text-[15px]">Enter Subject Code</Label>
// //             <input
// //               type="text"

// //               value={staffId}
// //               onChange={(e) => setubjectCode(e.target.value)}
// //               className={cn(
// //                 "p-4 bg-[rgb(252,_250,_250)] rounded-[5px] w-[40vw]",
// //                 "focus:border-b-[4px_solid_#ea8f21] text-black"
// //               )}
// //             />
// //           </div>
// //           <div className="flex items-center">
// //             <Label className="w-2/4 text-[15px]">Enter Subject Name</Label>
// //             <input
// //               type="text"
// //               value={staffName}
// //               onChange={(e) => setSubjectName(e.target.value)}
// //               className={cn(
// //                 "p-4 bg-[rgb(252,_250,_250)] rounded-[5px] w-[40vw]",
// //                 "focus:border-b-[4px_solid_#ea8f21] text-black"
// //               )}
// //             />
// //           </div>
// //           <div className="flex items-center">
// //             <Label className="w-2/4 text-[15px]">Enter Subject Credit</Label>
// //             <input
// //               type="text"
// //               value={staffName}
// //               onChange={(e) => setSubjectCredit(e.target.value)}
// //               className={cn(
// //                 "p-4 bg-[rgb(252,_250,_250)] rounded-[5px] w-[40vw]",
// //                 "focus:border-b-[4px_solid_#ea8f21] text-black"
// //               )}
// //             />
// //           </div>
// //           <div className="flex items-center">
// //             <Label className="w-2/4 text-[15px]">Enter Subject Hours</Label>
// //             <input
// //               type="text"
// //               value={staffName}
// //               onChange={(e) => setSubjectHours(e.target.value)}
// //               className={cn(
// //                 "p-4 bg-[rgb(252,_250,_250)] rounded-[5px] w-[40vw]",
// //                 "focus:border-b-[4px_solid_#ea8f21] text-black"
// //               )}
// //             />
// //           </div>
// //         </div>
// //         <div className='flex justify-center mt-8  h-[50vh] '>
// //         <button 
// //             type="submit"
// //             className={cn(
// //               "outline-[none] flex justify-center items-center flex-col no-underline rounded-[5px] w-[30%] h-[10%] border-[none] bg-[rgb(227,_227,_232)] text-[#020227] duration-700",
// //               "hover:bg-[#060620] hover:text-[rgb(227,_227,_232)] hover:border-[1px] hover:border-[solid] hover:border-[rgb(250,250,250)] hover:decoration-clone",
          
// //             )}
// //           >
// //             Add Subject 
// //           </button>
// //           </div>
// //       </form>
// //     </div>
// //   )
// // }

// // export default AddSubject

// import { Label } from '@/components/ui/label';
// import React, { useState, useEffect } from 'react';
// import cn from 'classnames';

// const AddSubject = () => {
//   const [subjectCode, setSubjectCode] = useState('');
//   const [subjectName, setSubjectName] = useState('');
//   const [subjectCredit, setSubjectCredit] = useState('');
//   const [subjectHours, setSubjectHours] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert('Subject added');
//     setSubjectCode('');
//     setSubjectName('');
//     setSubjectCredit('');
//     setSubjectHours('');
//   };

//   useEffect(() => {
//     document.body.style.overflow = 'hidden';
//     return () => {
//       document.body.style.overflow = 'auto';
//     };
//   }, []);

//   return (
//     <div className='font-mono h-screen mt-[4vh] overflow-hidden'>
//       <div className='text-2xl mb-8 mr-[70vw] font-bold'>
//         Add Subject
//         </div>
//         <div className='flex flex-col justify-center items-center'>

//       <form onSubmit={handleSubmit} className=''>
//         <div className='font-mono flex flex-col gap-5'>
//           <div className="flex items-center ">
//             <Label className="w-2/4 text-[15px]">Enter Subject Code</Label>
//             <input
//               type="text"
//               value={subjectCode}
//               onChange={(e) => setSubjectCode(e.target.value)}
//               required
//               className={cn(
//                 "p-4 bg-[rgb(252,_250,_250)] rounded-[5px] w-[40vw]",
//                 "focus:border-b-[4px_solid_#ea8f21] text-black"
//               )}
//             />
//           </div>
//           <div className="flex items-center">
//             <Label className="w-2/4 text-[15px]">Enter Subject Name</Label>
//             <input
//               type="text"
//               value={subjectName}
//               onChange={(e) => setSubjectName(e.target.value)}
//               required

//               className={cn(
//                 "p-4 bg-[rgb(252,_250,_250)] rounded-[5px] w-[40vw]",
//                 "focus:border-b-[4px_solid_#ea8f21] text-black"
//               )}
//             />
//           </div>
//           <div className="flex items-center">
//             <Label className="w-2/4 text-[15px]">Enter Subject Credit</Label>
//             <input
//               type="text"
//               value={subjectCredit}
//               onChange={(e) => setSubjectCredit(e.target.value)}
//               required

//               className={cn(
//                 "p-4 bg-[rgb(252,_250,_250)] rounded-[5px] w-[40vw]",
//                 "focus:border-b-[4px_solid_#ea8f21] text-black"
//               )}
//             />
//           </div>
//           <div className="flex items-center">
//             <Label className="w-2/4 text-[15px]">Enter Subject Hours</Label>
//             <input
//               type="text"
//               value={subjectHours}
//               onChange={(e) => setSubjectHours(e.target.value)}
//               required

//               className={cn(
//                 "p-4 bg-[rgb(252,_250,_250)] rounded-[5px] w-[40vw]",
//                 "focus:border-b-[4px_solid_#ea8f21] text-black"
//               )}
//             />
//           </div>
//         </div>
//         <div className='flex justify-center mt-8 h-[50vh]'>
//           <button 
//             type="submit"
//             className={cn(
//               "outline-[none] flex justify-center items-center flex-col no-underline rounded-[5px] w-[30%] h-[10%] border-[none] bg-[rgb(227,_227,_232)] text-[#020227] duration-700",
//               "hover:bg-[#060620] hover:text-[rgb(227,_227,_232)] hover:border-[1px] hover:border-[solid] hover:border-[rgb(250,250,250)] hover:decoration-clone"
//             )}
//           >
//             Add Subject 
//           </button>
//         </div>
//       </form>
//       </div>
//     </div>
//   );
// };

// export default AddSubject;

import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { BellRing, Check, Plus, Edit, Trash } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button as AntdButton} from 'antd'


const AddSubject = () => {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const invoices = [
    {
      sucode: "1",
      suname: "SDP",
      sucredit: "4",
      suhours:"20",
    },
    {
      sucode: "2",
      suname: "DSA",
      sucredit: "4",
      suhours:"20",
    },
    
   
  ];

  const filteredInvoices = invoices.filter((invoice) =>
    invoice.sucode.toLowerCase().includes(searchQuery.toLowerCase()) ||
    invoice.suname.toLowerCase().includes(searchQuery.toLowerCase()) ||
    invoice.sucredit.toLowerCase().includes(searchQuery.toLowerCase()) ||
    invoice.suhours.toLowerCase().includes(searchQuery.toLowerCase()) 
    // invoice.tt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleEdit = (invoiceId) => {
    console.log(`Editing ${invoiceId}`);
    setOpen(true);
  };

  const handleRemove = (invoiceId) => {
    console.log(`Removing ${invoiceId}`);
  };

  return (
    <>
      <Card className='h-full w-full border-none font-mono'>
        <CardHeader className='w-full flex flex-row justify-between items-center'>
          <CardTitle>Subjects</CardTitle>
          <div className='flex items-center gap-4'>
            <Input 
              type='text' 
              placeholder='Search...'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className='w-64'
            />
            <Button 
              onClick={()=>setOpen(!open)} 
              className='bg-blue-500 text-white hover:bg-blue-600 flex items-center gap-2 font-mono'
            >
              <Plus className='h-5 w-5' /> Add
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table className="">
            <TableHeader>
              <TableRow>
                <TableHead>Subject Code</TableHead>
                <TableHead>Subject Name</TableHead>
                <TableHead >Subject Credit</TableHead>
                <TableHead>Subject Hours</TableHead>
                {/* <TableHead >Generate</TableHead>
                <TableHead >Timetable</TableHead> */}
                <TableHead className="text-left">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredInvoices.map((invoice, index) => (
                <TableRow key={index}>
                  <TableCell >{invoice.sucode}</TableCell>
                  <TableCell>{invoice.suname}</TableCell>
                  <TableCell>{invoice.sucredit}</TableCell>
                  <TableCell >{invoice.suhours}</TableCell>
                  {/* <TableCell >{invoice.tutor}</TableCell> */}
                  {/* <TableCell ><AntdButton className='font-mono'>{invoice.generate}</AntdButton></TableCell>
                  <TableCell ><AntdButton className='font-mono'>{invoice.tt}</AntdButton></TableCell> */}
                  <TableCell className="flex gap-2">
                    <Button variant="ghost" onClick={() => handleEdit(index)}>
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" onClick={() => handleRemove(index)}>
                      <Trash className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Edit profile</SheetTitle>
            <SheetDescription>
              Make changes to your profile here. Click save when you're done.
            </SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input id="name" value="Pedro Duarte" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Username
              </Label>
              <Input id="username" value="@peduarte" className="col-span-3" />
            </div>
          </div>
          <SheetFooter className='flex flex-col flex-1'>
            <Button className='w-1/2 bg-destructive hover:bg-destructive/80' onClick={()=>setOpen(!open)}>Cancel</Button>
            <Button type="submit" className='w-1/2'>Save changes</Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  )
}

export default AddSubject;
