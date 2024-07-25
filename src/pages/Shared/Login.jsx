import React from "react";
import cn from 'classnames';
import { AnimatedGridPatternDemo } from "@/components/AnimatedGridPatternDemo";
import { MeteorDemo } from "@/components/meteroids";
// import Nav from "./Nav";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const move = useNavigate();

  const handledash=()=>{
    move("/admin/dashboard");
  }
  return (
    <div className="v1 font-mono">
      <body className="h-screen m-0 flex justify-center bg-cover bg-no-repeat items-center">
        <form class="h-[50vh] w-[28vw] flex bg-[rgb(198,_193,_193)] bg-transparent backdrop-filter backdrop-blur-[3px] justify-center items-center flex-col gap-[.5rem] [box-shadow:3.6px_2.4px_6.6px_-20px_rgba(0,_0,_0,_0.139),_8.5px_5.6px_14.2px_-20px_rgba(0,_0,_0,_0.165),_15.2px_10.1px_23.7px_-20px_rgba(0,_0,_0,_0.177),_25.2px_16.7px_36.4px_-20px_rgba(0,_0,_0,_0.186),_41.5px_27.5px_55.9px_-20px_rgba(0,_0,_0,_0.198),_72.6px_48.1px_96.7px_-20px_rgba(0,_0,_0,_0.222),_157px_104px_279px_-20px_rgba(0,_0,_0,_0.29)] rounded-[10px] border-[1px] border-[--inp-text]  decoration-clone
">
    {/* <AnimatedGridPatternDemo/> */}
    {/* <MeteorDemo/> */}
          <h2 className="--log-text font-bold text-[200%]">Login</h2>
          <br></br>
          <input
            type="text"
            name=""
            id="name"
            className={cn(
              " w-4/5 p-4  bg-[rgb(252,_250,_250)] rounded-[5px] text-black",
              "focus:border-b-[4px_solid_#ea8f21] text-black"
             )}            placeholder="Name"
            required
          />

          <input
            type="password"
            name=""
            id="pass1"
            className={cn(
              " w-4/5 p-4  bg-[rgb(252,_250,_250)] rounded-[5px]",
              "focus:border-b-[4px_solid_#ea8f21] text-black"
             )}            placeholder="Password"
            required
          />
  <br></br>
          <button className={cn(
              "outline-[none] flex justify-center items-center flex-col no-underline rounded-[5px] w-[30%] h-[10%] border-[none] bg-[rgb(227,_227,_232)] text-[#020227] duration-700",
              "hover:bg-[#060620] hover:text-[rgb(227,_227,_232)] hover:border-[1px] hover:border-[solid] hover:border-[rgb(250,250,250)] hover:decoration-clone"
             )} onClick={handledash}>Login</button>

        </form>
      </body>
    </div>
  );
};

export default Login;