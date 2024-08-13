import React, { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Edit, Trash } from "lucide-react";
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
import { getStaff, editStaff, deleteStaff } from '@/service/api';

const AddStaff = () => {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [formValues, setFormValues] = useState({
    id: '',
    name: '',
    email: ''
  });

  const [staff, setStaff] = useState([]);

  useEffect(() => {
    const fetchStaff = async () => {
      try {
        const response = await getStaff();
        console.log("Fetched staff data:", response.data); // Check data structure
        setStaff(response.data);
      } catch (error) {
        console.error("Error fetching staff:", error);
      }
    };
    fetchStaff();
  }, []);

  const filteredStaff = staff.filter((staffMember) =>
    // staffMember.name?.toLowerCase() !== 'admin' &&
    (
      (staffMember.name?.toLowerCase() || '').includes(searchQuery.toLowerCase()) ||
      (staffMember.email?.toLowerCase() || '').includes(searchQuery.toLowerCase())
    )
  );

  const handleEdit = (index) => {
    setSelectedIndex(index);
    setFormValues(staff[index]);
    setOpen(true);
  };

  const handleRemove = async (id) => {
    try {
      await deleteStaff(id);
      setStaff(staff.filter(staffMember => staffMember.id !== id));
    } catch (error) {
      console.error("Error deleting staff:", error);
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormValues(prevValues => ({
      ...prevValues,
      [id]: value
    }));
  };

  const handleSave = async () => {
    if (selectedIndex !== null) {
      try {
        await editStaff(formValues.id, formValues);
        setStaff(staff.map((staffMember, index) =>
          index === selectedIndex ? formValues : staffMember
        ));
      } catch (error) {
        console.error("Error updating staff:", error);
      }
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
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Staff Id</TableHead>
                <TableHead>Staff Name</TableHead>
                <TableHead>Staff Email</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredStaff.length === 0 ? (
                <TableRow>
                  <TableCell colSpan="4">No staff available</TableCell>
                </TableRow>
              ) : (
                filteredStaff.map((staffMember, index) => (
                  <TableRow key={staffMember.id}>
                    <TableCell>{staffMember.id}</TableCell>
                    <TableCell>{staffMember.name}</TableCell>
                    <TableCell>{staffMember.email}</TableCell>
                    <TableCell className="flex justify-end gap-2">
                      <Button variant="ghost" onClick={() => handleEdit(index)}>
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" onClick={() => handleRemove(staffMember.id)}>
                        <Trash className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Edit Staff</SheetTitle>
            <SheetDescription>
              Click save when you're done.
            </SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="id" className="text-right">
                Staff Id
              </Label>
              <Input id="id" value={formValues.id} onChange={handleChange} className="col-span-3" disabled />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Staff Name
              </Label>
              <Input id="name" value={formValues.name} onChange={handleChange} className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-right">
                Staff Email
              </Label>
              <Input id="email" value={formValues.email} onChange={handleChange} className="col-span-3" />
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

export default AddStaff;
