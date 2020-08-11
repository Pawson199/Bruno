import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import  getItemHook from './dataFetcher/itemsGetterHook'
import {Button} from '../../components/Button'
import { Link } from 'react-router-dom'

export default function PortfelDetail(props) {
    const {productName} = useParams()
    const [item_details, set_item_details] = useState([])
    useEffect(
        () => {
            getItemHook("Portfele", productName, set_item_details) 
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
                        <span><p>499.99</p><small>PLN</small></span>
                    </div>
                </div>
            </div>
            <label>
                <h3>
                    Ilość
                </h3>
            </label>
            <div className="quantity" >
                    <p><b>0</b></p>
                    <i className="ri-add-line ri-xl"></i>
                    <i className="ri-subtract-line ri-xl"></i>
            </div>
            <span className="button_add_to_cart" >
                <Button><button><p>Do koszyka</p></button></Button>
            </span>
        </div>
        :
        <div>ni ma</div>
    )
}