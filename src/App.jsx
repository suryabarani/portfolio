import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter,Routes,Route}  from 'react-router-dom'


import SideNav from './component/Second-/Side-nav/SideNav'
import Home from './component/Second-/pages/Home/Home'
import About from './component/Second-/pages/About/About'
import Contect from './component/Second-/pages/Contect/Contect'
import Project from './component/Second-/pages/Project/Project'
import Skills from './component/Second-/pages/Skills/Skills'

function App(){
  return( 
    <BrowserRouter>
             <Routes> 
                   <Route path='/' element={<Home/>}/>
                   <Route path='/About' element={<About/>}/>
                   <Route path='/Contect' element={<Contect/>}/>
                   <Route path='/Project' element={<Project/>}/>
                   <Route path='/Skills' element={<Skills/>}/>
              </Routes>
  </BrowserRouter>
  
)}

export default App