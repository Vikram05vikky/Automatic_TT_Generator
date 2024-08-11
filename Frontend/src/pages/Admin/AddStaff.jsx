// import React, { useState } from 'react';
// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableFooter,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { BellRing, Check, Plus, Edit, Trash } from "lucide-react";
// import { cn } from "@/lib/utils";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import {
//   Sheet,
//   SheetClose,
//   SheetContent,
//   SheetDescription,
//   SheetFooter,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet";
// import { Button as AntdButton} from 'antd'


// const AddStaff = () => {
//   const [open, setOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');

//   const invoices = [
//     {
//       sid: "1",
//       sname: "Mr.ABCD",
//       email: "1@gmail.com",
//       dept:"CSE",
//       tutor:"C"
//     },
//     {
//       sid: "1",
//       sname: "Mr.ABCD",
//       email: "1@gmail.com",
//       dept:"CSE",
//       tutor:"C"
//     },
   
//   ];

//   const filteredInvoices = invoices.filter((invoice) =>
//     invoice.dept.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     invoice.sid.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     invoice.sname.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     invoice.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     invoice.tutor.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const handleEdit = (invoiceId) => {
//     console.log(`Editing ${invoiceId}`);
//     setOpen(true);
//   };

//   const handleRemove = (invoiceId) => {
//     console.log(`Removing ${invoiceId}`);
//   };

//   return (
//     <>
//       <Card className='h-full w-full border-none font-mono'>
//         <CardHeader className='w-full flex flex-row justify-between items-center'>
//           <CardTitle>Staff</CardTitle>
//           <div className='flex items-center gap-4'>
//             <Input 
//               type='text' 
//               placeholder='Search...'
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className='w-64'
//             />
//             <Button 
//               onClick={()=>setOpen(!open)} 
//               className='bg-blue-500 text-white hover:bg-blue-600 flex items-center gap-2 font-mono'
//             >
//               <Plus className='h-5 w-5' /> Add
//             </Button>
//           </div>
//         </CardHeader>
//         <CardContent>
//           <Table className="">
//             <TableHeader>
//               <TableRow>
//                 <TableHead>Staff Id</TableHead>
//                 <TableHead>Staff Name</TableHead>
//                 <TableHead >Staff Email</TableHead>
//                 <TableHead>Department</TableHead>
//                 <TableHead>Tutor</TableHead>
//                 {/* <TableHead >Generate</TableHead>
//                 <TableHead >Timetable</TableHead> */}
//                 <TableHead className="text-left">Actions</TableHead>
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               {filteredInvoices.map((invoice, index) => (
//                 <TableRow key={index}>
//                   <TableCell >{invoice.sid}</TableCell>
//                   <TableCell>{invoice.sname}</TableCell>
//                   <TableCell>{invoice.email}</TableCell>
//                   <TableCell >{invoice.dept}</TableCell>
//                   <TableCell >{invoice.tutor}</TableCell>
//                   {/* <TableCell ><AntdButton className='font-mono'>{invoice.generate}</AntdButton></TableCell>
//                   <TableCell ><AntdButton className='font-mono'>{invoice.tt}</AntdButton></TableCell> */}
//                   <TableCell className="flex gap-2">
//                     <Button variant="ghost" onClick={() => handleEdit(index)}>
//                       <Edit className="h-4 w-4" />
//                     </Button>
//                     <Button variant="ghost" onClick={() => handleRemove(index)}>
//                       <Trash className="h-4 w-4" />
//                     </Button>
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </CardContent>
//       </Card>

//       <Sheet open={open} onOpenChange={setOpen}>
//         <SheetContent>
//           <SheetHeader>
//             <SheetTitle>Edit Staff</SheetTitle>
//             <SheetDescription>
//               Click save when you're done.
//             </SheetDescription>
//           </SheetHeader>
//           <div className="grid gap-4 py-4">
//             <div className="grid grid-cols-4 items-center gap-4">
//               <Label htmlFor="name" className="text-right">
//                 Staff Id
//               </Label>
//               <Input id="name" value="Pedro Duarte" className="col-span-3" />
//             </div>
//             <div className="grid grid-cols-4 items-center gap-4">
//               <Label htmlFor="username" className="text-right">
//                 Staff Name
//               </Label>
//               <Input id="username" value="@peduarte" className="col-span-3" />
//             </div>
//             <div className="grid grid-cols-4 items-center gap-4">
//               <Label htmlFor="username" className="text-right">
//                 Staff Email
//               </Label>
//               <Input id="username" value="@peduarte" className="col-span-3" />
//             </div>
//             <div className="grid grid-cols-4 items-center gap-4">
//               <Label htmlFor="username" className="text-right">
//                 Department
//               </Label>
//               <Input id="username" value="@peduarte" className="col-span-3" />
//             </div>
//             <div className="grid grid-cols-4 items-center gap-4">
//               <Label htmlFor="username" className="text-right">
//                 Tutor
//               </Label>
//               <Input id="username" value="@peduarte" className="col-span-3" />
//             </div>
//           </div>
//           <SheetFooter className='flex flex-col flex-1'>
//             <Button className='w-1/2 bg-destructive hover:bg-destructive/80' onClick={()=>setOpen(!open)}>Cancel</Button>
//             <Button type="submit" className='w-1/2'>Save changes</Button>
//           </SheetFooter>
//         </SheetContent>
//       </Sheet>
//     </>
//   )
// }

// export default AddStaff;


import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Plus, Edit, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button as AntdButton } from 'antd';

const AddStaff = () => {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [formValues, setFormValues] = useState({
    sid: '',
    sname: '',
    email: '',
    dept: '',
    tutor: '',
  });

  const [staff, setStaff] = useState([
    {
      sid: "1",
      sname: "Mr.ABCD",
      email: "1@gmail.com",
      dept: "CSE",
      tutor: "C",
    },
    {
      sid: "2",
      sname: "Ms.EFGH",
      email: "2@gmail.com",
      dept: "ECE",
      tutor: "D",
    },
  ]);

  const filteredStaff = staff.filter((staffMember) =>
    staffMember.sid.toLowerCase().includes(searchQuery.toLowerCase()) ||
    staffMember.sname.toLowerCase().includes(searchQuery.toLowerCase()) ||
    staffMember.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    staffMember.dept.toLowerCase().includes(searchQuery.toLowerCase()) ||
    staffMember.tutor.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleEdit = (index) => {
    setSelectedIndex(index);
    setFormValues(staff[index]);
    setOpen(true);
  };

  const handleRemove = (index) => {
    setStaff(staff.filter((_, i) => i !== index));
  };

  const handleAdd = () => {
    setSelectedIndex(null);
    setFormValues({
      sid: '',
      sname: '',
      email: '',
      dept: '',
      tutor: '',
    });
    setOpen(true);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormValues(prevValues => ({
      ...prevValues,
      [id]: value
    }));
  };

  const handleSave = () => {
    if (selectedIndex !== null) {
      // Edit existing staff
      setStaff(staff.map((staffMember, index) =>
        index === selectedIndex ? formValues : staffMember
      ));
    } else {
      // Add new staff
      setStaff([...staff, formValues]);
    }
    setOpen(false);
  };

  return (
    <>
      <Card className='h-full w-full border-none font-mono'>
        <CardHeader className='w-full flex flex-row justify-between items-center'>
          <CardTitle>Staff</CardTitle>
          <div className='flex items-center gap-4'>
            <Input
              type='text'
              placeholder='Search...'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className='w-64'
            />
            <Button
              onClick={handleAdd}
              className='bg-blue-500 text-white hover:bg-blue-600 flex items-center gap-2'
            >
              <Plus className='h-5 w-5' /> Add
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Staff Id</TableHead>
                <TableHead>Staff Name</TableHead>
                <TableHead>Staff Email</TableHead>
                <TableHead>Department</TableHead>
                <TableHead>Tutor</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredStaff.map((staffMember, index) => (
                <TableRow key={index}>
                  <TableCell>{staffMember.sid}</TableCell>
                  <TableCell>{staffMember.sname}</TableCell>
                  <TableCell>{staffMember.email}</TableCell>
                  <TableCell>{staffMember.dept}</TableCell>
                  <TableCell>{staffMember.tutor}</TableCell>
                  <TableCell className="flex justify-end gap-2">
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
            <SheetTitle>{selectedIndex !== null ? 'Edit Staff' : 'Add Staff'}</SheetTitle>
            <SheetDescription>
              Click save when you're done.
            </SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="sid" className="text-right">
                Staff Id
              </Label>
              <Input id="sid" value={formValues.sid} onChange={handleChange} className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="sname" className="text-right">
                Staff Name
              </Label>
              <Input id="sname" value={formValues.sname} onChange={handleChange} className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-right">
                Staff Email
              </Label>
              <Input id="email" value={formValues.email} onChange={handleChange} className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="dept" className="text-right">
                Department
              </Label>
              <Input id="dept" value={formValues.dept} onChange={handleChange} className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="tutor" className="text-right">
                Tutor
              </Label>
              <Input id="tutor" value={formValues.tutor} onChange={handleChange} className="col-span-3" />
            </div>
          </div>
          <SheetFooter className='flex flex-col flex-1'>
            <Button className='w-1/2 bg-destructive hover:bg-destructive/80' onClick={() => setOpen(false)}>Cancel</Button>
            <Button type="submit" className='w-1/2' onClick={handleSave}>Save changes</Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );
}

export default AddStaff;
