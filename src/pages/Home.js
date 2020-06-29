import React from 'react'
import fb from '../images2/fb.png'
import pint from '../images2/pint.png'
import ig from '../images2/ig.png'

export default function Home() {
    return (
        <div>
            <div>
                <div>
                    <span className="socialmedia-container" ><img src={fb} alt="facebook_logo" ></img></span>
                    <span className="socialmedia-container" ><img src={ig} alt="instagram_logo" ></img></span>
                    <span className="socialmedia-container" ><img src={pint} alt="pint_logo" ></img></span>
                </div>
                <div>
                    <h1>Witaj w świecie
                        skórzanego rękodzieła.</h1>
                    <h2>Jeżeli poszukujesz obroży, smyczy,  lub innego 
                        skórzanego akcesoria dla swojego pupila, 
                        to jesteś w odpowiednim miejscu!</h2>
                </div>
            </div>
        </div>
    )
}
