import React from 'react'
import fb from '../images2/fb.png'
import pint from '../images2/pint.png'
import ig from '../images2/ig.png'
import pies1 from '../images2/pies1.jpg'
import pies2 from '../images2/pies2.jpg'
import pies3 from '../images2/pies3.jpg'
import pies4 from '../images2/pjesek_2.png'
import {Button} from '../components/Button'
import Homeoffer from '../components/Homeoffer'

export default function Home() {
    return (
        <div className="view">
            <div className="social-media-and-description" >
                <div className="description">
                    <h1>Witaj w świecie <br/>
                        skórzanego rękodzieła!
                    </h1>
                    <h2>Jeżeli poszukujesz obroży, smyczy, lub innego
                        skórzanego akcesoria dla swojego pupila,
                        to jesteś w odpowiednim miejscu!
                    </h2>
                    <Button> <button><a href="/home">Sprawdź!</a></button>  </Button>
                </div>
                <div className="social-media">
                        <span className="socialmedia-container" ><img src={fb} alt="facebook_logo" ></img></span>
                        <span className="socialmedia-container" ><img src={ig} alt="instagram_logo" ></img></span>
                        <span className="socialmedia-container" ><img src={pint} alt="pint_logo" ></img></span>
                </div>
            </div>
            <div className="home_offers">
                <Homeoffer src={pies1} desc="Pies1" />
                <Homeoffer src={pies2} desc="pIES2" />
                <Homeoffer src={pies3} desc="PIES3" /> 
            </div>
            <div className="mobile_bg_container" >
                <img src={pies4} alt="dog_image" ></img>
            </div>
        </div>
    )
}
