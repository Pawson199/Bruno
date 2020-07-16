import React from 'react'
import {connect} from "react-redux"
import cart_img from '../images2/cart_image.svg'
import {Button} from '../components/Button'

function Cart(props) {

const products = props.products_in_cart.map( el => <span>{el.name}</span> )

    return (
        products.length > 0 ?
        <div className="cart_container full">
            <h1>Koszyk</h1>
            <div className="products_container" >
                {products}
            </div>
        </div>
        : 
        <div className="cart_container empty">
            <h1>Twój koszyk jest pusty</h1>
            <img src={cart_img} alt="empty_cart" ></img>
            <Button> <button><p>Produkty</p></button>  </Button>
        </div>

    )
}

export default connect(state => (
    {
      products_in_cart : state.cart
    }
  ), {})(Cart)