import React, {useState} from 'react'
import {connect} from "react-redux"
import cart_img from '../images2/cart_image.svg'
import {Button} from '../components/Button'
import { removeFavoriteThing } from '../redux'

function Cart(props) {

const [ deliviery, setdeliviery ] = useState(0)

const products = props.products_in_cart.map( el => 
    <span key={el.name} >
        <div className="products_description" >
            <h2>{el.name}</h2>
            <p>Cena: <small>{el.price}</small></p>
        </div>
        <div className="product_image" >
            <img alt="offer_name" src={el.image} ></img>
            <div>
             <p>Ilość:  <small>{el.quantity}</small></p>
             <p>Rozmiar: <small>{el.sizes.w} - {el.sizes.l}</small></p>
            </div>
        </div>
        <div className="delete_product"  ><i onClick={ () => props.removeFavoriteThing(el.name) } className="ri-close-fill ri-2x"></i>Usuń</div>
    </span> 
)

const sum = () => {
    let all_prices = 0
    props.products_in_cart.forEach( el => {
        all_prices += el.price
    } )
    return all_prices
} 

    return (
        products.length > 0 ?
        <div className="cart_container full">
            <h1>Koszyk</h1>
            <div className="products_and_summary">
               <div className="products_container" >
                    {products}
                </div>
                <div className="summary" >
                    <h2>
                        Podsumowanie
                    </h2>
                    <div className="sum">
                        <p><b>Produkty:</b> {sum()} PLN </p>
                            <div>
                                <p><b>Wybierz metodę dostawy:</b> </p>
                                <span>
                                    <input onClick={ e => setdeliviery(e.target.value) } value="13" name="deliviery" type="radio"></input>
                                    <label><b>Inpost</b> 13PLN</label>
                                </span>
                                <span>
                                    <input onClick={ e => setdeliviery(e.target.value) } value="16" name="deliviery" type="radio"></input>
                                    <label><b>Kurier</b> 16PLN </label>
                                </span>
                            </div>
                        <hr></hr>
                        <p><b>Suma:</b> {sum() + parseInt(deliviery) } PLN </p>    
                    </div>

                    <Button> <button ><p>Zamów</p></button>  </Button>
                </div>  
                <div id="easypack-map"></div>
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
  ), { removeFavoriteThing })(Cart)