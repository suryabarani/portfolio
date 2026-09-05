import React from 'react';
import { Link } from 'react-router-dom';
import Download from "./download.gif"
import OutLet from '../OutLet';
import Bg from '../Bg'

function Header({ Bg }) {
  return (
    <>
      {Bg && <Bg />}
      <OutLet>
        <div className="container header-wrapper position-relative text-white min-vh-100 d-flex justify-content-center align-items-center overflow-x-hidden">
          <div className="main-info position-relative px-4 text-center" style={{ zIndex: 1 }}>
            <h3>Hello, I'm</h3>
            <h1><strong>SURYA B</strong></h1>
            <div className='mt-2'>
              <h1 className='fullstack'>FULL STACK DEVELOPER.</h1>
            </div>

            <div className="d-flex justify-content-center align-items-center gap-3 mt-4 flex-wrap">
              <a href="https://drive.google.com/file/d/1ah8WgRNRRbHv3QDxvDvmWmGGz9dN3kBc/view"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-light btn-main-offer">
                Get Resume <img className='icon' src={Download} style={{ width: "20px", height: "20px" }} alt="download" />
              </a>
              <Link className="btn btn-outline-light btns" to={"/about"} role="button">
                About me <i className="fa fa-arrow-right" aria-hidden="true"></i>
              </Link>
            </div>
          </div>
        </div>
      </OutLet>
    </>
  );
}

export default Header;