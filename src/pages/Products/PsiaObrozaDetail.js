import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import  getItemHook from './productsFunctions/itemsGetterHook'
import { Link } from 'react-router-dom'
import {Button} from '../../components/Button'
import SetQuantity from './productsComponents/SetQuantity'
import SetColors from './productsComponents/SetColors'

export default function PsiaObrozaDetail(props) {

    const [item_details, set_item_details] = useState([])
    const [quantity, setquantity] = useState(0)
    const [color, setColor] = useState("")
    const {productName} = useParams()
    useEffect(
        () => {
            getItemHook("Obroze", productName, set_item_details) 
        },
    [productName])

         console.log(color,quantity)

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
                    Wybierz rozmiar
                </h3>
            </label>
            <div className="sizes" >
                <span><b>XS</b> <small>19cm  x 1.5cm</small> </span> 
                <span> <b>S</b> <small>22cm  x 2cm</small> </span>  
                <span> <b>M</b> <small>24cm  x 2cm</small> </span>  
                <span> <b>L</b> <small>24cm  x 3cm</small> </span>  
                <span> <b>XL</b> <small>28cm  x 3cm</small> </span>  
                <span> <b>XXL</b> <small>35cm  x 4cm</small> </span>   
            </div>
            <label>
                <h3>
                    Wybierz kolor
                </h3>
            </label>
            <SetColors setcolor={setColor} />
            <label>
                <h3>
                    Ilość
                </h3>
            </label>
            <SetQuantity amount={quantity} setamount={setquantity} />
            <span className="button_add_to_cart" >
                <Button><button><p>Do koszyka</p></button></Button>
            </span>
        </div>
        :
        <span className="product_spinner" >
            <span ></span>
        </span>
    )
}