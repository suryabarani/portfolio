import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter,Routes,Route}  from 'react-router-dom'
import Nav from './component/NavSection/Nav'
import Header from './component/HeaderSection/Header'
import About from './component/AboutSection/About'
import Skill from './component/SkillSection/Skill'
import Project from './component/ProjectSection/Project'
import Achievement from './component/AchievementSection/Achievement'
import Contact from './component/ContactSection/Contact'
import Bg from './component/Bg'
import PList from './component/ProjectSection/PList'
function App(){
  return( 
    <BrowserRouter>
    <Nav/>
        <Routes> 
              <Route path='/' element={<Header Bg={Bg}/>}/>
              <Route path='/about' element={<About Bg={Bg}/>}/>
              <Route path='/skill' element={<Skill Bg={Bg}/>}/>
              <Route path='/project' element={<Project Bg={Bg}/>}/>
              <Route path='/achievement' element={<Achievement Bg={Bg}/>}/>
              <Route path='/contact' element={<Contact  Bg={Bg}/>}/> 
               </Routes>
  </BrowserRouter>
  
)}

export default App