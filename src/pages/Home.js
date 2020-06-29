import React from 'react'
import fb from '../images2/fb.png'
import pint from '../images2/pint.png'
import ig from '../images2/ig.png'
import {Button} from '../components/Button'

export default function Home() {
    return (
        <div>
            <div className="social-media-and-description" >
                <div className="description">
                    <h1>Witaj w świecie <br/>
                        skórzanego rękodzieła!
                    </h1>
                    <h2>Jeżeli poszukujesz obroży, smyczy, lub innego
                        skórzanego akcesoria dla swojego pupila,
                        to jesteś <br/> w odpowiednim miejscu!
                    </h2>
                    <Button> <button><a href="/home">Sprawdź!</a></button>  </Button>
                </div>
                <div className="social-media">
                        <span className="socialmedia-container" ><img src={fb} alt="facebook_logo" ></img></span>
                        <span className="socialmedia-container" ><img src={ig} alt="instagram_logo" ></img></span>
                        <span className="socialmedia-container" ><img src={pint} alt="pint_logo" ></img></span>
                </div>
            </div>
        </div>
    )
}
