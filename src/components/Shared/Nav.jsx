import React from 'react';
import { ModeToggle } from "@/components/trigger";
import { NavLink } from "react-router-dom";
import Calendar from "/src/assets/img/calendar.png";
import Calendarlit from "/src/assets/img/calendar-lit.png";
import { useTheme } from "@/components/theme-provider";

function Nav() {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  const LinkData = [
    {
      title: 'Home',
      link: '/'
    },
    {
      title: 'Login',
      link: '/login'
    },
    {
      title: 'Register',
      link: '/register'
    },
  ];

  return (
    <div className={`bg-[#fefefe] bg-transparent backdrop-filter backdrop-blur-[4px] gap-[2cm] 
      absolute top-0 left-0 w-full h-[8vh] flex flex-row justify-center items-center border-b-[1px] font-mono ${isDarkMode ? 'dark' : ''}`}>
      <div className="h-full w-1/4 flex flex-row justify-center items-center text-2xl font-bold text-[--inp-text] gap-4">
        Time T
        <img src={isDarkMode ? Calendar : Calendarlit} className="h-10 gap-9" alt="Calendar" />
      </div>
      <div className="h-full w-3/4 flex flex-row justify-center items-center text-xl font-bold gap-9 pl-[35vw] ">
        {LinkData.map((link, index) => (
          <NavLink to={link.link} key={index}>
            <li className="list-none text-[100%] ">{link.title}</li>
          </NavLink>
        ))}
        <ModeToggle />
      </div>
    </div>
  );
}

export default Nav;

