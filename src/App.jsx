import React from 'react'
// import { AnimatedGridPatternDemo } from './components/AnimatedGridPatternDemo'
// import Login from './pages/Shared/Login'
// import { MeteorDemo } from './components/meteroids'
// import Register from './pages/Shared/Register'
// import { ModeToggle } from './components/trigger'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './pages/Shared/Home'
import Login from './pages/Shared/Login'
import Register from './pages/Shared/Register'
import Notfound from './pages/Shared/Notfound'
import Sharedlayout from './layout/Sharedlayout'

 
const App = () => {
  return (
    //   <div className='h-screen w-screen flex items-center justify-center'>
    //   {/* <AnimatedGridPatternDemo/> */}
    //   {/* <Login/> */}
    //   {/* <ModeToggle/> */}
    
    //   <Register/>
    // </div>
    
    <>
    {/* <MeteorDemo/> */}
    <BrowserRouter>
      <Routes>
        <Route element={<Sharedlayout/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='*' element={<Notfound/>}/>
          </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App


