import React from 'react'

export default function Product(props) {
    return (
        <div>
            <span>
                <img src={props.src} alt="leatger-product" />
            </span>
            <span>
                <p>{props.name}</p>
                <p>{props.price}</p>
            </span>
        </div>
    )
}
