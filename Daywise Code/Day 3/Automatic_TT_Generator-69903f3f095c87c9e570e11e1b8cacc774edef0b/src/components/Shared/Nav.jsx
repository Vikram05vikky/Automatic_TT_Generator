import { ModeToggle } from "@/components/trigger";
import Login from "@/pages/Shared/Login";
import Register from "@/pages/Shared/Register";
import { Calendar } from "lucide-react";
import { NavLink } from "react-router-dom";
function Nav() {

  const LinkData=[
    {
    title:'Home',
    link:'/'
  },
    {
    title:'Login',
    link:'/login'
  },
    {
    title:'Register',
    link:'/register'
  },
]
  return (
      <div className="bg-[#fefefe]  bg-transparent backdrop-filter backdrop-blur-[4px]  gap-[2cm] 
      absolute top-0 left-0 w-full h-[8vh] flex flex-row justify-center items-center border-b-[1px] font-mono">
        <div className="h-full w-1/4 flex flex-row justify-center items-center text-2xl font-bold text-[--inp-text]">
          Time T <Calendar/>
        </div>
        <div className="h-full w-3/4 flex flex-row justify-center items-center text-xl font-bold gap-9 pl-[35vw] ">
       
        {
          LinkData.map((link,index) =>(
            <NavLink to={link.link}>
            <li key={index}className="list-none text-[100%] ">{link.title}</li>
            </NavLink>
          ))
        }
        <ModeToggle/>
        </div>

       
      </div>
  );
}

export default Nav;