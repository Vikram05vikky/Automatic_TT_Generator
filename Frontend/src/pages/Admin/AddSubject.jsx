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


// const AddSubject = () => {
//   const [open, setOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');

//   const invoices = [
//     {
//       sucode: "1",
//       suname: "SDP",
//       sucredit: "4",
//       suhours:"20",
//     },
//     {
//       sucode: "2",
//       suname: "DSA",
//       sucredit: "4",
//       suhours:"20",
//     },
    
   
//   ];

//   const filteredInvoices = invoices.filter((invoice) =>
//     invoice.sucode.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     invoice.suname.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     invoice.sucredit.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     invoice.suhours.toLowerCase().includes(searchQuery.toLowerCase()) 
//     // invoice.tt.toLowerCase().includes(searchQuery.toLowerCase())
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
//           <CardTitle>Subjects</CardTitle>
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
//                 <TableHead>Subject Code</TableHead>
//                 <TableHead>Subject Name</TableHead>
//                 <TableHead >Subject Credit</TableHead>
//                 <TableHead>Subject Hours</TableHead>
//                 {/* <TableHead >Generate</TableHead>
//                 <TableHead >Timetable</TableHead> */}
//                 <TableHead className="text-left">Actions</TableHead>
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               {filteredInvoices.map((invoice, index) => (
//                 <TableRow key={index}>
//                   <TableCell >{invoice.sucode}</TableCell>
//                   <TableCell>{invoice.suname}</TableCell>
//                   <TableCell>{invoice.sucredit}</TableCell>
//                   <TableCell >{invoice.suhours}</TableCell>
//                   {/* <TableCell >{invoice.tutor}</TableCell> */}
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
//             <SheetTitle>Edit Subject</SheetTitle>
//             <SheetDescription>
//               Click save when you're done.
//             </SheetDescription>
//           </SheetHeader>
//           <div className="grid gap-4 py-4">
//             <div className="grid grid-cols-4 items-center gap-4">
//               <Label htmlFor="name" className="text-right">
//                 Subject Code
//               </Label>
//               <Input id="name" value="Pedro Duarte" className="col-span-3" />
//             </div>
//             <div className="grid grid-cols-4 items-center gap-4">
//               <Label htmlFor="username" className="text-right">
//                 Subject Name
//               </Label>
//               <Input id="username" value="@peduarte" className="col-span-3" />
//             </div>
//             <div className="grid grid-cols-4 items-center gap-4">
//               <Label htmlFor="username" className="text-right">
//                 Subject Credit
//               </Label>
//               <Input id="username" value="@peduarte" className="col-span-3" />
//             </div>
//             <div className="grid grid-cols-4 items-center gap-4">
//               <Label htmlFor="username" className="text-right">
//                 Subject Hours
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

// export default AddSubject;

import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHead,
  TableRow,
  TableCell,
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

const AddSubject = () => {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [formValues, setFormValues] = useState({
    sucode: '',
    suname: '',
    sucredit: '',
    suhours: '',
  });

  const [subjects, setSubjects] = useState([
    {
      sucode: "1",
      suname: "SDP",
      sucredit: "4",
      suhours: "20",
    },
    {
      sucode: "2",
      suname: "DSA",
      sucredit: "4",
      suhours: "20",
    }
  ]);

  const filteredSubjects = subjects.filter((subject) =>
    subject.sucode.toLowerCase().includes(searchQuery.toLowerCase()) ||
    subject.suname.toLowerCase().includes(searchQuery.toLowerCase()) ||
    subject.sucredit.toLowerCase().includes(searchQuery.toLowerCase()) ||
    subject.suhours.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleEdit = (index) => {
    setSelectedIndex(index);
    setFormValues(subjects[index]);
    setOpen(true);
  };

  const handleRemove = (index) => {
    setSubjects(subjects.filter((_, i) => i !== index));
  };

  const handleAdd = () => {
    setSelectedIndex(null);
    setFormValues({
      sucode: '',
      suname: '',
      sucredit: '',
      suhours: '',
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
      // Edit existing subject
      setSubjects(subjects.map((subject, index) =>
        index === selectedIndex ? formValues : subject
      ));
    } else {
      // Add new subject
      setSubjects([...subjects, formValues]);
    }
    setOpen(false);
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
                <TableHead>Subject Code</TableHead>
                <TableHead>Subject Name</TableHead>
                <TableHead>Subject Credit</TableHead>
                <TableHead>Subject Hours</TableHead>
                <TableHead className="text-left">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredSubjects.map((subject, index) => (
                <TableRow key={index}>
                  <TableCell>{subject.sucode}</TableCell>
                  <TableCell>{subject.suname}</TableCell>
                  <TableCell>{subject.sucredit}</TableCell>
                  <TableCell>{subject.suhours}</TableCell>
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
            <SheetTitle>{selectedIndex !== null ? 'Edit Subject' : 'Add Subject'}</SheetTitle>
            <SheetDescription>
              Click save when you're done.
            </SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="sucode" className="text-right">
                Subject Code
              </Label>
              <Input id="sucode" value={formValues.sucode} onChange={handleChange} className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="suname" className="text-right">
                Subject Name
              </Label>
              <Input id="suname" value={formValues.suname} onChange={handleChange} className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="sucredit" className="text-right">
                Subject Credit
              </Label>
              <Input id="sucredit" value={formValues.sucredit} onChange={handleChange} className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="suhours" className="text-right">
                Subject Hours
              </Label>
              <Input id="suhours" value={formValues.suhours} onChange={handleChange} className="col-span-3" />
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

export default AddSubject;
