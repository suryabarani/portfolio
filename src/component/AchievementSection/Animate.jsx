import React from 'react'
import './Achievement.css'

function Animate(props) {
  return (<>
      <div class="timeline">
            <div class="icon"></div>
            <div class="date-content">
                <div class="date-outer">
                    <span class="date">
                        <span class="month">{props.list.month}</span>
                        <span class="year">{props.list.year}</span>
                    </span>
                </div>
            </div>
            <div class="timeline-content">
                <h5 class="title">{props.list.title}</h5>
                <div className="d-flex">
                <p class="ms-4 description">
                    {props.list.description}
                </p>
                </div>
            </div>
        </div>
  </>)
}

export default Animate