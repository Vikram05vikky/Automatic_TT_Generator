import React from 'react';
import { NavLink } from 'react-router-dom';
import {  LayoutDashboard, LogOut, LucidePackagePlus, LucideUserRoundPlus } from 'lucide-react';
import { UsersRound } from 'lucide-react';
import Calendar from "/src/assets/img/calendar.png";
import Calendarlit from "/src/assets/img/calendar-lit.png";
import { useTheme } from '../theme-provider';

const AdminLeftbar = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';
  const adminLinks = [
    {
      title: 'Dashboard',
      link: '/admin/dashboard',
      icon: LayoutDashboard
    },
    {
      title: 'Class',
      link: '/admin/users',
      icon: UsersRound
    },
    {
      title: 'Add Staff',
      link: '/admin/addstaff',
      icon: LucideUserRoundPlus
    },
    {
      title: 'Add Subject',
      link: '/admin/addsubject',
      icon: LucidePackagePlus
    }
  ];

  return (
    <div className='h-[96vh] w-1/6 flex justify-center items-center flex-col pt-10 rounded-2xl mt-[2vh] ml-[2vh] bg-blue-50 dark:bg-blue-800/20'>
      <div className='h-1/6 font-mono text-[150%] flex flex-row'>
      <div className='mr-4'>
        Time T
      </div>
      <div className='pt-[.4vh]'>
      <img src={isDarkMode ? Calendar : Calendarlit} className="h-10 gap-9" alt="Calendar" />
        </div>
      </div>
      <div className='h-5/6 w-full flex flex-col justify-start items-center'>
        {adminLinks.map((data, index) =>
          <NavLink 
            key={index}
            to={data.link}
            className='list-none w-[90%] flex items-center gap-3 px-3 py-4 text-black dark:text-white font-mono text-[130%] hover:border hover:border-stone-950 hover:dark:border-stone-100 hover:rounded-xl'
          >
            <data.icon className="w-6 h-6" />
            <span>{data.title}</span>
          </NavLink>
        )}
      </div>
      <div className='h-1/6 w-full flex flex-col justify-center items-center'>
        <NavLink 
          to="/login"
          className='list-none w-[90%] flex items-center gap-3 px-3 py-4 text-black dark:text-white font-mono text-[130%] hover:border hover:border-stone-950 hover:dark:border-stone-100 hover:rounded-xl'
          >
          <LogOut/>
          <span>Logout</span>
        </NavLink>
      </div>
    </div>
  );
}

export default AdminLeftbar;
