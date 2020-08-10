import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import getItemHook from './dataFetcher/itemsGetterHook'
import {Button} from '../../components/Button'
import { Link } from 'react-router-dom'

export default function TorekbaDetail(props) {
    const {productName} = useParams()
    const [item_details, set_item_details] = useState([])
    useEffect(
        () => {
            getItemHook("Torby", productName, set_item_details) 
        },
    [productName])

        console.log(item_details)

    return (
        item_details.length > 0 ? 
        <div className="product_container">
        <span className="back_to_offers_button" >
                <i></i>
                <Link><p> Wróć do ofert </p></Link>
        </span>
        <div className="product_info_image" >
            <div className="product_gallery" >
                <img alt="product" src={item_details[0].fields.zdjecie.fields.file.url} />
            </div>
            <div>
                <h1>Nazwa produktu</h1>
                <div>
                    <span>Opis</span>
                    <span>Cena</span>
                </div>
            </div>
        </div>
        <span>Ilość</span>
        <Button>Dodaj do koszyka</Button>
    </div>
    :
    <div>ni ma</div>
    )
}
