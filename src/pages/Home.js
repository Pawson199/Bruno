import React from 'react'
import fb from '../images2/fb.png'
import pint from '../images2/pint.png'
import ig from '../images2/ig.png'
import pies1 from '../images2/pj1.png'
import pies2 from '../images2/pj2.png'
import pies4 from '../images2/pjesek_2.png'
import {Button} from '../components/Button'
import Homeoffer from '../components/Homeoffer'
import {connect} from "react-redux"
import {count_load} from "../redux"

function Home(props) {


    return (
        props.isloaded >= 3 ? 
        (
        <div className="home_container">
            <div className="clippy1 clip" ></div>
            <div className="clippy2 clip" ></div>
            <div className="social-media-and-description" >
                <div className="description">
                    <h1>Witaj w świecie <br/>
                        skórzanego rękodzieła!
                    </h1>
                    <h2>Jeżeli poszukujesz obroży, smyczy, lub innego
                        skórzanego akcesoria dla swojego pupila,
                        to jesteś w odpowiednim miejscu!
                    </h2>
                    <Button> <button><p>Sprawdź!</p></button>  </Button>
                </div>
                <div className="social-media">
                        <span className="socialmedia-container" ><img src={fb} alt="facebook_logo" ></img></span>
                        <span className="socialmedia-container" ><img src={ig} alt="instagram_logo" ></img></span>
                        <span className="socialmedia-container" ><img src={pint} alt="pint_logo" ></img></span>
                </div>
            </div>
            <div className="home_offers">
                <Homeoffer src={pies2} desc="Oferujemy grawer na zamówienie!" />
                <Homeoffer src={pies1} desc="Szyjemy akcesoria na każdy rozmiar!" />
            </div>
            <div className="mobile_bg_container" >
                <img onLoad={ () => props.count_load() } src={pies4} alt="dog" ></img>
            </div>
        </div>
        ) 
        : 
        (
        <div className="image_test">
            <div className="spinner" >
                <span ></span>
            </div>
            <span className="hide">
                <Homeoffer src={pies2} desc="Oferujemy grawer na zamówienie!" />
                <Homeoffer src={pies1} desc="Szyjemy na każdy rozmiar!" />
                <img onLoad={ () => props.count_load() } src={pies4} alt="dog" ></img>
            </span>
        </div>
        )
    )
}

export default connect(state => (
    {
      isloaded: state.isloaded
    }
  ), {count_load})(Home)