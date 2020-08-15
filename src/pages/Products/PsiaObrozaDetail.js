import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import  getItemHook from './productsFunctions/itemsGetterHook'
import { Link } from 'react-router-dom'
import {Button} from '../../components/Button'
import SetQuantity from './productsComponents/SetQuantity'
import SetColors from './productsComponents/SetColors'
import SetSizes from './productsComponents/SetSizes'
import {product_to_cart} from '../../redux'
import {connect} from "react-redux"

function PsiaObrozaDetail(props) {

    const [item_details, set_item_details] = useState([])
    const [quantity, setquantity] = useState(0)
    const [sizes, setSize] = useState([])
    const [color, setColor] = useState("")
    const {productName} = useParams()
    useEffect(
        () => {
            getItemHook("Obroze", productName, set_item_details) 
        },
    [productName])

         console.log(item_details)

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
                        <span><p>{item_details[0].fields.cena}</p><small>PLN</small></span>
                    </div>
                </div>
            </div>
            <label>
                <h3>
                    Wybierz rozmiar
                </h3>
            </label>
            <SetSizes 
                setSize={setSize}
                sizes={
                    [ ["XS", 19, 1.5], ["S", 22, 2], ["M", 24, 2],
                    ["L", 24, 3], ["XL", 28, 3], ["XXL", 35, 4] ]
                }
            />
            <label>
                <h3>
                    Wybierz kolor
                </h3>
            </label>
            <SetColors setColor={setColor} />
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
                        sizes:{w: sizes[1], l: sizes[0]},
                        quantity: quantity,
                        price: +item_details[0].fields.cena,
                        color: color,
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

export default connect(() => ({}), {product_to_cart})(PsiaObrozaDetail)