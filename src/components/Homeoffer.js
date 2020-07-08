import React, {useState} from 'react'

export default function Homeoffer(props) {

    const [ loaded, setloaded ] = useState(true)

    return (
        <div className="offer_in_homepage" >
            <span className="image_holder">
                <span className={`${loaded}`} > <div></div> </span>
                <img onLoad={ () => setloaded( prev => !prev ) } className={`${loaded}`} src={props.src} alt="dog" ></img>
            </span>
            <p>
                {props.desc}
                <span></span>
            </p>
        </div>
    )
}
