import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'
  
const UserClass = () => {
    const invoices = [
      {
        dept: "CSE",
        class: "C",
        venue:"LH-1",
        tt: "View",
      },
      {
        dept: "CSE",
        class: "A",
        venue:"LH-5",
        tt: "View",
      },
      
    ]
    
  return (
    <div className='h-[85%] w-[90%] font-mono'>
      <div className='text-2xl mb-8 mr-[70vw] font-bold '>
        Class
        </div>
        <div className='flex flex-col justify-center items-center'>
  
 
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead >Department</TableHead>
            <TableHead>Class</TableHead>
            <TableHead>Venue</TableHead>
            <TableHead>Timetable</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.invoice}>
              <TableCell >{invoice.dept}</TableCell>
              <TableCell>{invoice.class}</TableCell>
              <TableCell>{invoice.venue}</TableCell>
              <Button className='mt-[1vh] ml-[1.5vw] font-mono' onClick={handle}>{invoice.tt}</Button>
            </TableRow>
          ))}
        </TableBody>
        
      </Table>
      </div>
    
    </div>
  )
}

export default UserClass
