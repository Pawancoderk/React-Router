import { Route, Routes } from 'react-router-dom'
import Home from '../Components/Home'
import User from '../Components/User'
import About from '../Components/About'
import Userdetail from '../Components/Userdetail'

function Router() {
  return (
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/user' element={<User/>}>
    
    <Route path='/user/:name' element={<Userdetail/>}/>
    </Route>
    <Route path='/about' element={<About/>}/>
   
  </Routes>
  )
}

export default Router