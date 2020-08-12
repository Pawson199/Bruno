import React from 'react'

export default function setQuantity(props) {
    return (
        <div className="quantity" >
            <p><b>{props.amount}</b></p>
            <div>
                <i className="ri-add-line ri-xl" onClick={ () => props.setamount( prev => prev + 1 ) } ></i>
                <i className="ri-subtract-line ri-xl" onClick={ () => props.amount === 0 ? null : props.setamount( prev => prev - 1 ) } ></i>
            </div>
        </div>
    )
}
