import React from 'react'

export default function Homeoffer(props) {
    return (
        <div className="offer_in_homepage" >
            <span className="image_holder">
                <img src={props.src} alt="dog" ></img>
            </span>
            <p>
                {props.desc}
                <span></span>
            </p>
        </div>
    )
}
