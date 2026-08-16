import React from 'react'
import './Contect.css'
import myimg from '../Contect/github-logo-.png'
import Layout from '../../Layout/Layout'
import{useState} from 'react'
import { LocationEditIcon, MailIcon, Phone } from 'lucide-react'

function Contect() {
    const[isOpen,setisOpen]=useState(true)
  return (<>
  <Layout>
    <main className='main-Contect'>
      <div>
        <div className='p ps-5  d-flex container justify-content-space-between item-center '>
          <div>
              
                <ul>
                  <p className='d-flex justify-content-space-around py-2'><span  className='pe-4'><MailIcon /></span> <a href="" style={{textDecoration:'underline',color:'inherit'}}>surya.barani2003@gmail.com</a> </p>
                  <p className='d-flex justify-content-space-around py-2'><span  className='pe-4'><Phone/></span> +91 9514470940 </p>
                  <p className='d-flex justify-content-space-around py-2'><span  className='pe-4'><LocationEditIcon/></span>  perumbakkam,chennai-600100 </p>
                  <p className='d-flex justify-content-space-around '><img className='pe-3 img' src= {myimg}/> <a className='item-center mt-1  '  style={{textDecoration:'underline',color:'inherit'}} href="https://github.com/suryabarani">suryabarani</a> </p>
                  <p className='d-flex justify-content-space-around '><span className='pe-4 fs-3 '>in</span> <a className='item-center mt-2 pt-1 ' style={{textDecoration:'underline',color:'inherit'}} href="https://www.linkedin.com/in/suryabarani2003/"> LINKEDIN </a> </p>
                </ul> 
                 
          </div>
          <main className='mainone d-flex justify-content-end'>
     <div  className='form-container '>
        <div className='form-toggle'>
                 <button className={isOpen? 'active' : ''} onClick={()=>setisOpen(!false)}>Login</button>
                 <button className={!isOpen? 'active' : ""} onClick={()=>setisOpen(false)}>SignUp</button>
        </div>
        { isOpen? <>
            <div className='form'>
                <h2 className=''> Login Form </h2>
                <input className='form-control py-2' type="email"  placeholder='Email'/>
                <input className='form-control mt-3 py-2 mb-2' type="password"  placeholder='password'/>
                <a >Forgot Password?</a>
                <button className='mb-3'>Login</button>
                <p>Not a Member? <a onClick={()=>setisOpen(false)}> Signup now</a></p>
            </div>
        </>: <>
        <div className='form'>
                <h2 className=''> Login Form </h2>
                <input className='form-control py-2' type="email"  placeholder='Email'/>
                <input className='form-control mt-3 py-2' type="password"  placeholder='password'/>
                <input className='form-control mt-3 mb-3 py-2' type="password"  placeholder='Conform password'/>
                <button className='my-2'>SingUp</button>
        </div>
        </>}
     </div>
  </main>
        </div>
      </div>
    </main>
  </Layout>
  </>)}

export default Contect