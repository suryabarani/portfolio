import React, { useState } from 'react'
import './Contect.css'
import myimg from '../Contect/github-logo-.png'
import Layout from '../../Layout/Layout'
import { LocationEditIcon, MailIcon, Phone } from 'lucide-react'

function Contect() {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <Layout>
      <main className='mainone d-flex justify-content-center justify-content-md-end'>
        <div className='contact-wrapper m-5 ps-md-5 d-flex flex-column flex-md-row container justify-content-between align-items-center'>
           {/* Login / Signup form */}
          <div className='form-container'>
            <div className='form-toggle'>
              <button className={`btn ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(true)}>Login</button>
              <button className={`btn ${!isOpen ? 'active' : ''}`} onClick={() => setIsOpen(false)}>SignUp</button>
            </div>

            {isOpen ? (
              <div className='form'>
                <h2>Login Form</h2>
                <input className='form-control py-2' type="email" placeholder='Email' />
                <input className='form-control mt-3 py-2 mb-2' type="password" placeholder='Password' />
                <a href="#">Forgot Password?</a>
                <button className='mb-3 btn '>Login</button>
                <p>Not a Member? <a className='btn ' onClick={() => setIsOpen(false)}>Signup now</a></p>
              </div>
            ) : (
              <div className='form'>
                <h2>Signup Form</h2>
                <input className='form-control py-2' type="email" placeholder='Email' />
                <input className='form-control mt-3 py-2' type="password" placeholder='Password' />
                <input className='form-control mt-3 mb-3 py-2' type="password" placeholder='Confirm password' />
                <button className='my-2 btn'>Signup</button>
              </div>
            )}
          </div>

          {/* Contact info */}
          <div className='contact-info mt-5'>
            <ul className='list-unstyled'>
              <p className='d-flex justify-content-start align-items-center py-2'>
                <span className='pe-4'><MailIcon /></span>
                <a href="mailto:surya.barani2003@gmail.com" style={{ textDecoration: 'underline', color: 'inherit' }}>
                  surya.barani2003@gmail.com
                </a>
              </p>
              <p className='d-flex justify-content-start align-items-center py-2'>
                <span className='pe-4'><Phone /></span> +91 9514470940
              </p>
              <p className='d-flex justify-content-start align-items-center py-2'>
                <span className='pe-4'><LocationEditIcon /></span> perumbakkam, chennai-600100
              </p>
              <p className='d-flex justify-content-start align-items-center py-2'>
               <span className='pe-4 fs-5'>GITHUB :</span>
                <a style={{ textDecoration: 'underline', color: 'inherit' }} href="https://github.com/suryabarani">
                  suryabarani
                </a>
              </p>
              <p className='d-flex justify-content-start align-items-center py-2'>
                <span className='pe-4 fs-5'>Linkedin :</span>
                <a style={{ textDecoration: 'underline', color: 'inherit' }} href="https://www.linkedin.com/in/suryabarani2003/">
                  LINKEDIN
                </a>
              </p>
            </ul>
          </div>
       </div>
      </main>
    </Layout>
  )
}

export default Contect