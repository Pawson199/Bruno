import React from 'react'
import {connect} from "react-redux"
import {count_load} from "../redux"

function Homeoffer(props) {


    return (
        <div className="offer_in_homepage" >
            <span className="image_holder">
                <img onLoad={ () => props.count_load() }  src={props.src} alt="dog" ></img>
                <div><i className="ri-play-fill ri-2x"></i></div>
            </span>
            <p>
                {props.desc}
                <span></span>
            </p>
        </div>
    )
}

export default connect(state => (
    {
      isloaded: state.isloaded
    }
  ), {count_load})(Homeoffer)