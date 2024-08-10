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
  
const UserSubject = () => {
    const invoices = [
      {
        subjectcode: "22SB201",
        subjectname: "Software Design Pattern",
        ppw: "12",
        year: "3",
        dept: "CSE",
      },
      {
        subjectcode: "22SB102",
        subjectname: "Operating System",
        ppw: "10",
        year: "2",
        dept: "CSE",
      },
      {
        subjectcode: "22SB103",
        subjectname: "Digital and Analysis of Algorithm",
        ppw: "8",
        year: "2",
        dept: "CSE",
      },
    ]
  return (
    <div className='h-[85%] w-[90%] font-mono'>
       <div className='text-2xl mb-8 mr-[70vw] font-bold'>
        Subjects
        </div>
        <div className='flex flex-col justify-center items-center'>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Subject Code</TableHead>
            <TableHead>Subject Name</TableHead>
            <TableHead>Periods per week</TableHead>
            <TableHead>Year</TableHead>
            <TableHead>Department</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.invoice}>
              <TableCell className="font-medium">{invoice.subjectcode}</TableCell>
              <TableCell>{invoice.subjectname}</TableCell>
              <TableCell>{invoice.ppw}</TableCell>
              <TableCell >{invoice.year}</TableCell>
              <TableCell >{invoice.dept}</TableCell>
            </TableRow>
          ))}
        </TableBody>
       
      </Table>
      </div>
    </div>
  )
}

export default UserSubject
