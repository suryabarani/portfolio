import React from 'react'
import './Project.css'
import Bg from '../Bg'
import OutLet from '../OutLet';
import ProjectCard from './PList'
import Einstro from "../ProjectSection/einstro.png"
import EinstroAdmin from "../ProjectSection/einstroAdmin.png"
import NeosmileOmr from "../ProjectSection/neosmileOmr.png"
import DataColecting from '../ProjectSection/Project.png'

function Project({Bg}) {
  let realProject =[
        {
            image: Einstro,
            title: "Einstro Study Abroad",
            description: "A dynamic web application built with React and Bootstrap, designed to help students explore and apply for study abroad programs. The site features a responsive, user-friendly interface with a course finder tool and smooth navigation, offering a seamless experience across devices.",
            webLink: "https://einstrostudyabroad.com/",
            backend: false
        },
        {
            image: EinstroAdmin,
            title: "Einstro Study Abroad - Admin",
            description: "An admin dashboard built with React and Bootstrap, providing administrators with a streamlined interface to manage study abroad programs, applications, and student data. The responsive design ensures efficient access and control across various devices.",
            webLink: "https://einstrostudyabroad.com/admin/",
            backend: false
        },
        {
            image: NeosmileOmr,
            title: "Neosmile Dental OMR",
            description: "A modern website built with React and Bootstrap, designed to showcase Neosmile Dental’s services, team, and patient care. The site is fully responsive, offering a user-friendly experience on all devices, with smooth navigation and informative content about treatments like Invisalign and Root Canal Therapy.",
            webLink: "https://neosmiledentalomr.in/",
            backend: false
        },
    ]
    let projectList = [
        {
            image: DataColecting,
            title: "DATA COLECTING",
            description: "Data Collecting is a web application that allows users to collect and manage data efficiently.",
            backend: true
        },
    ]
  return (<>
        {Bg && <Bg />}
        <OutLet>
        <div className="container project">
        <h2 className="text-center py-3">Real Project</h2>
          <div className="row">
            {realProject.map((card) => {
              return <ProjectCard card={card} />;
            })}
          </div> 
          <hr></hr>
          <h2 className="text-center">Demo Project</h2>
          <div className="next-page">
            <div className="row mt-5">
              {projectList.map((card) => {
                return <ProjectCard card={card} />;
              })}
            </div>
          </div>
        </div>
      </OutLet>
  </>)
}

export default Project