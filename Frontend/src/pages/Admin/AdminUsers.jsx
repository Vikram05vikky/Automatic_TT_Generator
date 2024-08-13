import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableHead,
    TableCell,
    TableRow,
    TableHeader
} from "@/components/ui/table";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetFooter } from "@/components/ui/sheet";
import { Plus, Edit, Trash } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { fetchClasses, addClass, editClass, deleteClass } from '../../service/api';
import { Button as AntdButton} from 'antd'
import { useNavigate } from 'react-router-dom';



const AdminUsers = () => {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [formValues, setFormValues] = useState({
    dept: '',
    section: '',
    strength: '',
  });


  const navigate = useNavigate();

  const handleTT = ()=>{
    navigate('/admin/TT');
  }

  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    const loadClasses = async () => {
      try {
        const response = await fetchClasses();
        console.log('Fetched Classes:', response.data); // Debugging line
        setInvoices(response.data);
      } catch (error) {
        console.error('Error fetching classes:', error);
      }
    };
    loadClasses();
  }, []);

  const filteredInvoices = invoices.filter((invoice) =>
    invoice.dept.toLowerCase().includes(searchQuery.toLowerCase()) ||
    invoice.section.toLowerCase().includes(searchQuery.toLowerCase()) ||
    invoice.strength.toLowerCase().includes(searchQuery.toLowerCase())
  );

  console.log('Filtered Invoices:', filteredInvoices); // Debugging line

  const handleEdit = (index) => {
    setSelectedIndex(index);
    setFormValues(invoices[index]);
    setOpen(true);
  };

  const handleRemove = async (index) => {
    try {
      await deleteClass(invoices[index].cid);
      setInvoices(invoices.filter((_, i) => i !== index));
    } catch (error) {
      console.error('Error deleting class:', error);
    }
  };

  const handleAdd = () => {
    setSelectedIndex(null);
    setFormValues({
      dept: '',
      section: '',
      strength: ''
    });
    setOpen(true);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormValues(prevValues => ({
      ...prevValues,
      [id]: value
    }));
    console.log('Form Values:', formValues); // Debugging line
  };

  const handleSave = async () => {
    try {
      if (selectedIndex !== null) {
        await editClass(invoices[selectedIndex].cid, formValues);
        setInvoices(invoices.map((invoice, index) =>
          index === selectedIndex ? formValues : invoice
        ));
      } else {
        const response = await addClass(formValues);
        console.log('Add class response:', response); // Debugging line
        setInvoices([...invoices, response.data]);
      }
      setOpen(false);
    } catch (error) {
      console.error('Error saving class:', error);
    }
  };

  return (
    <>
      <Card className='h-full w-full border-none font-mono'>
        <CardHeader className='w-full flex flex-row justify-between items-center'>
          <CardTitle>Class Details</CardTitle>
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
                <TableHead>Department</TableHead>
                <TableHead>Class</TableHead>
                <TableHead>Strength</TableHead>
                <TableHead>Generate</TableHead>
                <TableHead>Timetable</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredInvoices.map((invoice, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{invoice.dept}</TableCell>
                  <TableCell>{invoice.section}</TableCell>
                  <TableCell>{invoice.strength}</TableCell>
                  <TableCell><AntdButton className='font-mono'>Generate</AntdButton></TableCell>
                  <TableCell><AntdButton className='font-mono' onClick={handleTT}>View</AntdButton></TableCell>
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
            <SheetTitle>{selectedIndex !== null ? 'Edit Class' : 'Add Class'}</SheetTitle>
            <SheetDescription>
              Click save when you're done.
            </SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="dept" className="text-right">
                Department
              </Label>
              <Input id="dept" value={formValues.dept} onChange={handleChange} className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="section" className="text-right">
                Class
              </Label>
              <Input id="section" value={formValues.section} onChange={handleChange} className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="strength" className="text-right">
                Strength
              </Label>
              <Input id="strength" value={formValues.strength} onChange={handleChange} className="col-span-3" />
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

export default AdminUsers;
