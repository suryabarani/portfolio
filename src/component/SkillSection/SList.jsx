import React from 'react'
import './Skill.css'
import html from "../SkillSection/html.png"
function SList(props) {
    return (
        <div className='animea justify-content-space-evenly col-sm-6 col-md-6 col-lg-2 col-xl-2 col-xxl-2 mb-4'>
            <img className="size" src={props.list.image} />
            <p className='skill-name'>{props.list.title}</p>
            <div class="progress-bar">
                <span className={`percentage ${props.list.bar}`}>{props.list.percentage}</span>
            </div>
        </div>
    )
}

export default SList