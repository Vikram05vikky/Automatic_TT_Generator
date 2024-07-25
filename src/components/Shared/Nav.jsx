import { ModeToggle } from "@/components/trigger";
import Login from "@/pages/Shared/Login";
import Register from "@/pages/Shared/Register";
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
          TT
        </div>
        <div className="h-full w-3/4 flex flex-row justify-center items-center text-xl font-bold gap-9 pl-[35vw]">
        {/* <button className="outline-[0] border-[0] w-[40px] h-[40px] rounded-[50%] bg-transparent flex items-center text-[20px] justify-center --log-text [transition:all_ease-in-out_0.3s] cursor-pointer" 
        >
          <h2 className="--log-text  text-[100%]">Login</h2>
        </button>
        <button className="outline-[0] border-[0] w-[40px] h-[40px] rounded-[50%] bg-transparent flex items-center text-[20px] justify-center --log-text [transition:all_ease-in-out_0.3s] cursor-pointer"
        >
        <h2 className="--log-text text-[100%]">Register</h2>
        </button> */}
        {
          LinkData.map((link,index) =>(
            <NavLink to={link.link}>
            <li key={index}className="list-none">{link.title}</li>
            </NavLink>
          ))
        }
        <ModeToggle/>
        </div>

       
      </div>
  );
}

export default Nav;