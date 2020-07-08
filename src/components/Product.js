import React, {useState} from 'react'

export default function Product(props) {

    const [ loaded, setloaded ] = useState(true)

    return (
        <div>
            <span>
                <span className={`${loaded}`} > <div></div> </span>
                <img onLoad={ () => setloaded( prev => !prev ) }  src={props.src} className={`image_check ${loaded}`} alt="leatger-product" />
            </span>
            <span className="product_name_price">
                <p>{props.name}</p>
                <p>{props.price} PLN</p>
            </span>
        </div>
    )
}