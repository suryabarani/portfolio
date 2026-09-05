import React from 'react'
import './About.css'
import Bg from '../Bg'
import me from './my.jpeg'
import OutLet from '../OutLet';
import { Link } from 'react-router-dom';
import Call from './call.gif'

function About({Bg}) {
  return (
    <>
      {Bg && <Bg />}
      <OutLet>
        <div className="about container mb-5 pb-2">
          <div className=" row">
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 image">
              <img className="img" src={me} alt="profile pic" />
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 aboutMe">
              <p className="text-center">
                <h1 className="text-inline">About</h1>
              </p>
              <p className="words">
                I am a dedicated and results-driven Full-Stack Developer and hands-on Freelancer experience in the MERN stack (MongoDB, Express.js, React, Node.js). I excel at designing and developing web applications, My expertise spans both front-end and back-end development, from creating responsive, visually appealing interfaces to implementing efficient server-side logic and databases. I am committed to writing clean, maintainable code and continuously improving my skills to stay at the forefront of technology. With a passion for problem-solving and innovation, I take pride in bringing creative ideas to life while ensuring high performance and security in every project.
              </p>

              <div>
                <Link className="btn btn-dark mt-4 btn-s" to={"/contact"} role="button">
                  Contact Me{" "}
                  <img src={Call} style={{ width: "20px", height: "20px" }} alt="call icon" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </OutLet>
    </>
  )
}

export default About