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
        standard: "10",
        ppw: "13",
        subject:"Math",
        tt: "link",
      },
      
    ]
    
  return (
    <div className='h-[85%] w-[90%] font-mono'>

  
 
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Standard</TableHead>
            <TableHead>Periods per week</TableHead>
            <TableHead>Subject</TableHead>
            <TableHead>Timetable</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.invoice}>
              <TableCell className="font-medium">{invoice.standard}</TableCell>
              <TableCell>{invoice.ppw}</TableCell>
              <TableCell>{invoice.subject}</TableCell>
              <TableCell>{invoice.tt}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        
      </Table>
    
    </div>
  )
}

export default UserClass
