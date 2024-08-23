import React from 'react';
import {Datas} from "./interfaces";
import '../assets/styles/card.css'

function Card({id, text, photo, name, title}:Datas) {
    return (
        <div className="card-container">
            <div className="first-ct">
                <h1>''</h1>
                <p>{text}</p>
            </div>
            <div className="second-ct">
                <img src={photo} alt="profile"/>
                <h3>{name}</h3>
                <p>{title}</p>
            </div>
        </div>
    );
}

export default Card;