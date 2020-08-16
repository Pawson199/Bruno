import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import  getItemHook from './productsFunctions/itemsGetterHook'
import {Button} from '../../components/Button'
import SetQuantity from './productsComponents/SetQuantity'
import { Link } from 'react-router-dom'
import {product_to_cart} from '../../redux'
import {connect} from "react-redux"


function PortfelDetail(props) {
    const {productName} = useParams()
    const [quantity, setquantity] = useState(0)
    const [item_details, set_item_details] = useState([])
    useEffect(
        () => {
            getItemHook("Portfele", productName, set_item_details) 
        },
    [productName])

    console.log(quantity)

    return (
        item_details.length > 0 ? 
        <div className="product_container">
            <span className="back_to_offers_button">
                <i></i>
                <Link><p> Wróć do ofert </p></Link>
            </span>
            <div className="product_info_image" >
                <div className="product_gallery" >
                    <img alt="product" src={item_details[0].fields.zdjecie.fields.file.url} />
                </div>
                <div className="product_info_image_info" >
                    <h2>{item_details[0].fields.nazwa}</h2>
                    <div>
                        <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                               It has survived not only five centuries,
                             but also the leap into electronic typesetting, remaining essentially unchanged.</span>
                        <span><p>499.99</p><small>PLN</small></span>
                    </div>
                </div>
            </div>
            <label>
                <h3>
                    Ilość
                </h3>
            </label>
            <SetQuantity amount={quantity} setamount={setquantity} />
            <span className="button_add_to_cart" >
                <Button>
                        <button 
                        onClick={ () => props.product_to_cart({
                            name:item_details[0].fields.nazwa,
                            image: item_details[0].fields.zdjecie.fields.file.url,
                            quantity: quantity,
                            sizes: "null",
                            sizes2: "null",
                            color: "null",
                            price: +item_details[0].fields.cena,
                            identifier: Date.now()
                        })}>
                            <p>Do koszyka</p>
                        </button>
                </Button>
            </span>
        </div>
        :
        <span className="product_spinner" >
            <span ></span>
        </span>
    )
}

export default connect(() => ({}), {product_to_cart})(PortfelDetail)