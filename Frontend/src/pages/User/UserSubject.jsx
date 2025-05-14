// import React from 'react'
// import {
//     Table,
//     TableBody,
//     TableCaption,
//     TableCell,
//     TableFooter,
//     TableHead,
//     TableHeader,
//     TableRow,
//   } from "@/components/ui/table"
  
// const UserSubject = () => {
//     const invoices = [
//       {
//         subjectcode: "22SB201",
//         subjectname: "Software Design Pattern",
//         ppw: "12",
//         year: "3",
//         dept: "CSE",
//       },
//       {
//         subjectcode: "22SB102",
//         subjectname: "Operating System",
//         ppw: "10",
//         year: "2",
//         dept: "CSE",
//       },
//       {
//         subjectcode: "22SB103",
//         subjectname: "Digital and Analysis of Algorithm",
//         ppw: "8",
//         year: "2",
//         dept: "CSE",
//       },
//     ]
//   return (
//     <div className='h-[85%] w-[90%] font-mono'>
//        <div className='text-2xl mb-8 mr-[70vw] font-bold'>
//         Subjects
//         </div>
//         <div className='flex flex-col justify-center items-center'>

//       <Table>
//         <TableHeader>
//           <TableRow>
//             <TableHead>Subject Code</TableHead>
//             <TableHead>Subject Name</TableHead>
//             <TableHead>Periods per week</TableHead>
//             <TableHead>Year</TableHead>
//             <TableHead>Department</TableHead>
//           </TableRow>
//         </TableHeader>
//         <TableBody>
//           {invoices.map((invoice) => (
//             <TableRow key={invoice.invoice}>
//               <TableCell className="font-medium">{invoice.subjectcode}</TableCell>
//               <TableCell>{invoice.subjectname}</TableCell>
//               <TableCell>{invoice.ppw}</TableCell>
//               <TableCell >{invoice.year}</TableCell>
//               <TableCell >{invoice.dept}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
       
//       </Table>
//       </div>
//     </div>
//   )
// }

// export default UserSubject

import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { authService } from '@/service/auth';  
import { fetchUserSub } from '@/service/api';  

const UserSubject = () => {
  const [subjects, setSubjects] = useState([]); 
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserSubjects = async () => {
      const email = authService.getUserEmail();
      if (email) {
        try {
          const data = await fetchUserSub(email);
          console.log('Fetched subjects:', data); 
          setSubjects(Array.isArray(data) ? data : []); 
        } catch (err) {
          setError('Error fetching subjects');
        } finally {
          setLoading(false);
        }
      } else {
        setError('User not logged in');
        setLoading(false);
      }
    };

    fetchUserSubjects();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className='h-[85%] w-[90%] font-mono'>
      <div className='text-2xl mb-8 mr-[70vw] font-bold'>
        Subjects
      </div>
      <div className='flex flex-col justify-center items-center'>
        {error && <p className="text-red-500">{error}</p>}
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Subject Code</TableHead>
              <TableHead>Subject Name</TableHead>
              <TableHead>Subject Credit</TableHead>
              <TableHead>Subject Hours</TableHead>
              {/* <TableHead>Department</TableHead> */}
            </TableRow>
          </TableHeader>
          <TableBody>
            {subjects.length === 0 ? (
              <TableRow>
                <TableCell colSpan="5">No subjects found</TableCell>
              </TableRow>
            ) : (
              subjects.map((subject) => (
                <TableRow key={subject.sid}>
                  <TableCell className="font-medium">{subject.code}</TableCell>
                  <TableCell>{subject.title}</TableCell>
                  <TableCell>{subject.credit}</TableCell>
                  <TableCell>{subject.hours}</TableCell>
                  {/* <TableCell>{subject.dept}</TableCell> */}
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default UserSubject;
