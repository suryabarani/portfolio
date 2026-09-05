import React from 'react'
import './Skill.css'
import OutLet from '../OutLet';
import Bg from '../Bg'
import html from "../SkillSection/html.png"
import css from "../SkillSection/css.png"
import bootstrap from "../SkillSection/bootstrap.png"
import javascript from "../SkillSection/js.png"
import code from "../SkillSection/coding.png"
import github from "../SkillSection/github.png"
import python from "../SkillSection/python.png"
import photoshop from "../SkillSection/photoshop.png"
import skill from "../SkillSection/settings.gif"
import sql from "../SkillSection/sql.png"
import mongo from "../SkillSection/mongo.png"
import react from "../SkillSection/react.png"
import node from "../SkillSection/nodejs.png"
import express from "../SkillSection/express.png"
import SkillCard from './SList'

function Skill({Bg}) {
  let skillList=[
      {
        image: html,
        title: "HTML",
        bar:"html",
        percentage:"95%"
      },
      {
        image: css,
        title: "CSS",
        bar:"css",
        percentage:"95%"
      },
      {
        image: javascript,
        title: "JavaScript",
        bar:"javascript",
        percentage:"75%"
      },
      {
        image: bootstrap,
        title: "Bootstrap",
        bar:"bootstrap",
        percentage:"95%"
      },
      {
        image: react,
        title: "React",
        bar:"react",
        percentage:"95%"
      },
      {
        image: node,
        title: "NodeJs",
        bar:"node",
        percentage:"70%"
      },
      {
        image: express,
        title: "Express",
        bar:"node",
        percentage:"70%"
      },
      {
        image: mongo,
        title: "MongoDb",
        bar:"mongodb",
        percentage:"70%"
      },
      {
        image: github,
        title: "GitHub",
        bar:"github",
        percentage:"75%"
      },
      
    ]
  return (<>
       {Bg && <Bg />}
   <OutLet>
      <div className="container heading">
        <div className="main-skill">
          <h1 className="text-center"><img className="size-2" src={skill} />Skill</h1>
        </div>
        <div className="skills">
          <h3 className="text-center sub">Technical</h3>
          <h5>I have become confident using following technologies</h5>
        </div>
        <div className="row justify-content-center">
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 m-4 skill-content">
            <div className='row skill-set'>
              {
                skillList.map((list)=>{
                  return <SkillCard list={list}/>
                })
              }
            </div>
          </div>
        </div>
      </div>
    </OutLet>
  </>)
}

export default Skill