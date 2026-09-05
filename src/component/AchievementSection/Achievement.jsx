import React from 'react'
import './Achievement.css'
import { Link } from 'react-router-dom'
import OutLet from '../OutLet';
import Goal from '../AchievementSection/goal.gif'
import Bg from '../Bg'
import Animate from './Animate';

function Achievement({Bg}) {
  let details=
    [
        {
            month:"July",
            year:"2024",
            title:"Completed Einstro Study Abroad Website",
            description:"I maintain this webside. if come any bug i fixed it. I also add some new features in this app  "
        },
        {
            month:"Aug",
            year:"2026",
            title:"Completed Neosmile Dental OMR Website",
            description:" I help with my mentor:My contribution is CRUD opration and Navigation thats all i maded."
        },
    ]
  return (<>
     {Bg && <Bg />}
     <OutLet>
            <div className="top achievetop"><h4 className="text-center text-weight-500 mt-4 fs-1"><img className="size-2" src={Goal}/>Acheivements</h4></div>
            <div class="container achieve"> 
              <div class="main-timeline">
                    {
                        details.map((list)=>{
                            return <Animate list={list}/>
                        })
                    }
                </div>
              </div>
            </OutLet>
  </>)
}

export default Achievement