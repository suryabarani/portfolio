import React from 'react';
import './Project.css';
import github from "../ProjectSection/github.png";
import website from "../ProjectSection/website.png";

function PList(props) {
    return (
        <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
            <div class="card-body box">
                <img className="img-fluid mb-4 neosmile" src={props.card.image} />
                <h5 class="card-title"><strong>{props.card.title}</strong></h5>
                <p class="card-text">{props.card.description}</p>
                <p>
                     <a href={props.card.webLink} target="_blank"><img className="img-fluid project-git" src={website} /></a>
                </p>
                <p class="card-text">{props.card.tools}</p>
                             
            </div>
        </div>
    )
}

export default PList