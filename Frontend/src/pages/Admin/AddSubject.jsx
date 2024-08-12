// import React, { useState, useEffect } from 'react';
// import {
//   Table,
//   TableBody,
//   TableHeader,
//   TableHead,
//   TableRow,
//   TableCell,
// } from "@/components/ui/table";
// import { Plus, Edit, Trash } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import {
//   Sheet,
//   SheetContent,
//   SheetDescription,
//   SheetFooter,
//   SheetHeader,
//   SheetTitle,
// } from "@/components/ui/sheet";
// import { fetchSubjects, addSubject, editSubject, deleteSubject } from '@/service/api'; // Adjust the import path as needed

// const AddSubject = () => {
//   const [open, setOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [selectedIndex, setSelectedIndex] = useState(null);
//   const [formValues, setFormValues] = useState({
//     code: '',
//     title: '',
//     credit: '',
//     hours: '',
//     user: {
//       id: '' // Initialize with an empty string or default value
//     }
//   });
//   const [subjects, setSubjects] = useState([]);

//   useEffect(() => {
//     const fetchSubjectsData = async () => {
//       try {
//         const response = await fetchSubjects();
//         setSubjects(response.data);
//       } catch (error) {
//         console.error("Error fetching subjects:", error);
//       }
//     };

//     fetchSubjectsData();
//   }, []);

//   const filteredSubjects = subjects.filter((subject) =>
//     (subject.code?.toLowerCase() || '').includes(searchQuery.toLowerCase()) ||
//     (subject.title?.toLowerCase() || '').includes(searchQuery.toLowerCase()) ||
//     (subject.credit?.toLowerCase() || '').includes(searchQuery.toLowerCase()) ||
//     (subject.hours?.toLowerCase() || '').includes(searchQuery.toLowerCase())
//   );

//   const handleEdit = (index) => {
//     setSelectedIndex(index);
//     setFormValues({
//       code: subjects[index].code,
//       title: subjects[index].title,
//       credit: subjects[index].credit,
//       hours: subjects[index].hours,
//       user: {
//         id: subjects[index].user ? subjects[index].user.id : '' // Ensure this matches the backend
//       }
//     });
//     setOpen(true);
//   };

//   const handleRemove = async (index) => {
//     try {
//       const subjectToRemove = subjects[index];
//       await deleteSubject(subjectToRemove.sid);
//       setSubjects(subjects.filter((_, i) => i !== index));
//     } catch (error) {
//       console.error("Error removing subject:", error);
//     }
//   };

//   const handleAdd = () => {
//     setSelectedIndex(null);
//     setFormValues({
//       code: '',
//       title: '',
//       credit: '',
//       hours: '',
//       user: {
//         id: '' // Initialize with an empty string or default value
//       }
//     });
//     setOpen(true);
//   };

//   const handleChange = (e) => {
//     const { id, value } = e.target;

//     if (id === 'userId') {
//       setFormValues(prevValues => ({
//         ...prevValues,
//         user: { id: value } // Update the nested id field
//       }));
//     } else {
//       setFormValues(prevValues => ({
//         ...prevValues,
//         [id]: value
//       }));
//     }
//   };

//   const handleSave = async () => {
//     try {
//       if (selectedIndex !== null) {
//         // Edit existing subject
//         const updatedSubject = await editSubject(subjects[selectedIndex].sid, formValues);
//         setSubjects(subjects.map((subject, index) =>
//           index === selectedIndex ? updatedSubject.data : subject
//         ));
//       } else {
//         // Add new subject
//         const response = await addSubject(formValues);
//         setSubjects([...subjects, response.data]);
//       }
//       setOpen(false);
//     } catch (error) {
//       console.error("Error saving subject:", error);
//     }
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
//               onClick={handleAdd}
//               className='bg-blue-500 text-white hover:bg-blue-600 flex items-center gap-2'
//             >
//               <Plus className='h-5 w-5' /> Add
//             </Button>
//           </div>
//         </CardHeader>
//         <CardContent>
//           <Table>
//             <TableHeader>
//               <TableRow>
//                 <TableHead>Subject Code</TableHead>
//                 <TableHead>Subject Name</TableHead>
//                 <TableHead>Subject Credit</TableHead>
//                 <TableHead>Subject Hours</TableHead>
//                 <TableHead>Staff Name</TableHead>
//                 <TableHead className="text-left">Actions</TableHead>
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               {filteredSubjects.map((subject, index) => (
//                 <TableRow key={subject.sid}>
//                   <TableCell>{subject.code}</TableCell>
//                   <TableCell>{subject.title}</TableCell>
//                   <TableCell>{subject.credit}</TableCell>
//                   <TableCell>{subject.hours}</TableCell>
//                   <TableCell>{subject.user ? subject.user.name : 'N/A'}</TableCell>
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
//             <SheetTitle>{selectedIndex !== null ? 'Edit Subject' : 'Add Subject'}</SheetTitle>
//             <SheetDescription>
//               Click save when you're done.
//             </SheetDescription>
//           </SheetHeader>
//           <div className="grid gap-4 py-4">
//             <div className="grid grid-cols-4 items-center gap-4">
//               <Label htmlFor="code" className="text-right">
//                 Subject Code
//               </Label>
//               <Input id="code" value={formValues.code} onChange={handleChange} className="col-span-3" />
//             </div>
//             <div className="grid grid-cols-4 items-center gap-4">
//               <Label htmlFor="title" className="text-right">
//                 Subject Name
//               </Label>
//               <Input id="title" value={formValues.title} onChange={handleChange} className="col-span-3" />
//             </div>
//             <div className="grid grid-cols-4 items-center gap-4">
//               <Label htmlFor="credit" className="text-right">
//                 Subject Credit
//               </Label>
//               <Input id="credit" value={formValues.credit} onChange={handleChange} className="col-span-3" />
//             </div>
//             <div className="grid grid-cols-4 items-center gap-4">
//               <Label htmlFor="hours" className="text-right">
//                 Subject Hours
//               </Label>
//               <Input id="hours" value={formValues.hours} onChange={handleChange} className="col-span-3" />
//             </div>
//             <div className="grid grid-cols-4 items-center gap-4">
//               <Label htmlFor="userId" className="text-right">
//                 Staff Id
//               </Label>
//               <Input id="userId" value={formValues.user} onChange={handleChange} className="col-span-3" />
//             </div>
//           </div>
//           <SheetFooter className='flex flex-col flex-1'>
//             <Button className='w-1/2 bg-destructive hover:bg-destructive/80' onClick={() => setOpen(false)}>Cancel</Button>
//             <Button type="submit" className='w-1/2' onClick={handleSave}>Save changes</Button>
//           </SheetFooter>
//         </SheetContent>
//       </Sheet>
//     </>
//   );
// };

// export default AddSubject;


import React, { useState, useEffect } from 'react';
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
import { fetchSubjects, addSubject, editSubject, deleteSubject } from '@/service/api';

const AddSubject = () => {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [formValues, setFormValues] = useState({
    code: '',
    title: '',
    credit: '',
    hours: '',
    userId: ''
  });

  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    const fetchSubjectsData = async () => {
      try {
        const response = await fetchSubjects();
        setSubjects(response.data);
      } catch (error) {
        console.error("Error fetching subjects:", error);
      }
    };

    fetchSubjectsData();
  }, []);

  const filteredSubjects = subjects.filter((subject) =>
    (subject.code?.toLowerCase() || '').includes(searchQuery.toLowerCase()) ||
    (subject.title?.toLowerCase() || '').includes(searchQuery.toLowerCase()) ||
    (subject.credit?.toLowerCase() || '').includes(searchQuery.toLowerCase()) ||
    (subject.hours?.toLowerCase() || '').includes(searchQuery.toLowerCase())
  );

  const handleEdit = (index) => {
    setSelectedIndex(index);
    setFormValues({
      code: subjects[index].code,
      title: subjects[index].title,
      credit: subjects[index].credit,
      hours: subjects[index].hours,
      userId: subjects[index].user ? subjects[index].user.id : ''
    });
    setOpen(true);
  };

  const handleRemove = async (index) => {
    try {
      const subjectToRemove = subjects[index];
      await deleteSubject(subjectToRemove.sid);
      setSubjects(subjects.filter((_, i) => i !== index));
    } catch (error) {
      console.error("Error removing subject:", error);
    }
  };

  const handleAdd = () => {
    setSelectedIndex(null);
    setFormValues({
      code: '',
      title: '',
      credit: '',
      hours: '',
      userId: ''
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

  const handleSave = async () => {
    try {
      if (selectedIndex !== null) {
        // Edit existing subject
        const updatedSubject = await editSubject(subjects[selectedIndex].sid, formValues);
        setSubjects(subjects.map((subject, index) =>
          index === selectedIndex ? updatedSubject.data : subject
        ));
      } else {
        // Add new subject
        const response = await addSubject(formValues);
        setSubjects([...subjects, response.data]);
      }
      setOpen(false);
    } catch (error) {
      console.error("Error saving subject:", error);
    }
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
                <TableHead>Staff Name</TableHead>
                <TableHead className="text-left">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredSubjects.map((subject, index) => (
                <TableRow key={subject.sid}>
                  <TableCell>{subject.code}</TableCell>
                  <TableCell>{subject.title}</TableCell>
                  <TableCell>{subject.credit}</TableCell>
                  <TableCell>{subject.hours}</TableCell>
                  <TableCell>{subject.user ? subject.user.name : 'N/A'}</TableCell>
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
              <Label htmlFor="code" className="text-right">
                Subject Code
              </Label>
              <Input id="code" value={formValues.code} onChange={handleChange} className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="title" className="text-right">
                Subject Name
              </Label>
              <Input id="title" value={formValues.title} onChange={handleChange} className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="credit" className="text-right">
                Subject Credit
              </Label>
              <Input id="credit" value={formValues.credit} onChange={handleChange} className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="hours" className="text-right">
                Subject Hours
              </Label>
              <Input id="hours" value={formValues.hours} onChange={handleChange} className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="userId" className="text-right">
                Staff Id
              </Label>
              <Input id="userId" value={formValues.userId} onChange={handleChange} className="col-span-3" />
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
};

export default AddSubject;
