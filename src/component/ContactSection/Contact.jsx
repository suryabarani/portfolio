import React, { useRef, useState } from 'react'
import './Contact.css'
import Bg from '../Bg'
import emailjs from '@emailjs/browser';
import OutLet from '../OutLet'
import Call from '../ContactSection/call.gif'
import github from '../ContactSection/github.png'
import link from '../ContactSection/link.gif'




const Result=()=>{
   return(
     <p>sent successfully.. I will contact you soon</p>
   )
}
function Contact({Bg}) {
   const [result, showResult] = useState(false)
  const form =useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kesqofk', 'template_ijfdrim', form.current, '-ZJxXgAytAjgNfiVh')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
      e.target.reset()
      showResult(true);
  };
  return (<>
      {Bg && <Bg />}
       <OutLet>
      <div className="container contact">
        <div className="head">
          <h5 className="subheading">Get in touch</h5>
          <h1 className="main-head"><img className="size-2" src={Call} />Contact</h1>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <div class="row">
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 left">
              <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 m-2">
                <input type="text" class="form-control" name="name" placeholder="Name" />
              </div>
              <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 m-2">
                <input type="mail" class="form-control" name="mail" placeholder="Mail" />
              </div>
              <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 m-2">
                <input type="text" class="form-control" name="subject" placeholder="Subject" />
              </div>
              <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 m-2">
                <textarea type="text" row="10" class="form-control" name="message" placeholder="Message" />
              </div>
              <button className="btn btn-primary m-2"> Submit </button>
              <div>{result? <Result/> :null}</div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 right">
              <p>I am interested in working with any company that thinks my skill will be helpful for them. If you are looking for someone like me, please let me know. Or you can just 'say hi' to me.</p>
              <p><img style={{width:"20px", height:"20px"}} src={link}/><a href="https://github.com/suryabarani" target="_blank"><img className="link" src={github}/></a></p>
              <p><i class="fa fa-envelope bounce-1" aria-hidden="true"></i>surya.barani2003@gmail.com</p>
              <p><i class="fa fa-phone" aria-hidden="true"></i>  +91 9514470940</p>
              <p><i class="fa fa-map-marker" aria-hidden="true"></i> perumbakkam,shollinganallur,chennai-600131</p>
            </div>
          </div>
        </form>
      </div>
    </OutLet>
  </>)
}

export default Contact