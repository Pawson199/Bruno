import React, {useRef, useEffect} from 'react'
import {connect} from "react-redux"
import cart_img from '../images2/cart_image.svg'
import dpd from '../images2/dpd_2.png'
import inpost from '../images2/inpost_2.png'
import {Button} from '../components/Button'
import { removeFavoriteThing, setdeliviery } from '../redux'
import {Link} from 'react-router-dom'

function Cart(props) {

const deliviery_inpost = useRef()
const deliviery_dpd = useRef()

useEffect(

    () => {
      if( props.products_in_cart.length > 0 ){
        const del_arr = [ deliviery_dpd.current, deliviery_inpost.current ]   

        del_arr.forEach( el => {
            props.choosed_deliviery === +el.value ? el.checked = true : el.checked = false
         } )
      }
    }
    
,[props.choosed_deliviery, props.products_in_cart])

const whichDeliviery = () => {
    if( props.choosed_deliviery === 13 || props.choosed_deliviery === 16 ){
        return  <Button> <Link to="adress" > <button ><p>Zamów</p></button> </Link>  </Button>
    }
    else {
        return <Button> <button onClick={ () => alert("Zaznacz metodę dostawy!") } ><p>Zamów</p></button> </Button>
    }
}

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
                                    <input onClick={ () => props.setdeliviery(13) } value="13" ref={deliviery_inpost} name="deliviery" type="radio"></input>
                                    <label><img alt="inpost_logo" src={inpost} /> 13 PLN</label>
                                </span>
                                <span>
                                    <input onClick={ () => props.setdeliviery(16) } value="16" ref={deliviery_dpd} name="deliviery" type="radio"></input>
                                    <label><img alt="dpd_logo" src={dpd} /> 16 PLN </label>
                                </span>
                            </div>
                        <hr></hr>
                        <p><b>Suma:</b> {sum() + props.choosed_deliviery } PLN </p>    
                    </div>
                    {whichDeliviery()}
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
      products_in_cart : state.cart,
      choosed_deliviery: state.deliviery
    }
  ), { removeFavoriteThing, setdeliviery })(Cart)