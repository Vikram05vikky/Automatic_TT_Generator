import { Label } from '@/components/ui/label';
import React, { useState } from 'react';
import cn from 'classnames';

const AddStaff = () => {
  const [staffId, setStaffId] = useState('');
  const [staffName, setStaffName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Staff added');
    setStaffId('');
    setStaffName('');
  };

  return (
    <div className='font-mono h-screen mt-[4vh] mx-4'>
      <div className='text-2xl mb-8 mr-[70vw] font-bold'>
        Add Staff
        </div>
     <div className='flex flex-col justify-center items-center'>
        <form onSubmit={handleSubmit} className=''>
        <div className='font-mono flex flex-col gap-5'>
          <div className="flex items-center">
            <Label className="w-2/4 text-[15px]">Enter Staff Id</Label>
            <input
              type="text"
              value={staffId}
              onChange={(e) => setStaffId(e.target.value)}
              required

              className={cn(
                "p-4 bg-[rgb(252,_250,_250)] rounded-[5px] w-[40vw]",
                "focus:border-b-[4px_solid_#ea8f21] text-black"
              )}
            />
          </div>
          <div className="flex items-center">
            <Label className="w-2/4 text-[15px]">Enter Staff Name</Label>
            <input
              type="text"
              value={staffName}
              onChange={(e) => setStaffName(e.target.value)}
              required

              className={cn(
                "p-4 bg-[rgb(252,_250,_250)] rounded-[5px] w-[40vw]",
                "focus:border-b-[4px_solid_#ea8f21] text-black"
              )}
            />
          </div>
        </div>
        <div className='flex justify-center h-[50vh] mt-8'>
          <button 
            type="submit"
            className={cn(
              "outline-[none] flex justify-center items-center flex-col no-underline rounded-[5px] w-[30%] h-[10%] border-[none] bg-[rgb(227,_227,_232)] text-[#020227] duration-700",
              "hover:bg-[#060620] hover:text-[rgb(227,_227,_232)] hover:border-[1px] hover:border-[solid] hover:border-[rgb(250,250,250)] hover:decoration-clone"
            )}
          >
            Add Staff
          </button>
        </div>
      </form>
      </div>

    </div>
  );
};

export default AddStaff;
