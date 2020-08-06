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
        <div className="product_container">
        <span>
            <i></i>
            <Link><p> Wróć do ofert </p></Link>
        </span>
        <div>
            Tutaj będą zdjęcia
        </div>
        <div>
            <h1>Nazwa produktu</h1>
            <div>
                <span>Opis</span>
                <span>Cena</span>
            </div>
        </div>
        <span>Ilość</span>
        <Button>Dodaj do koszyka</Button>
    </div>
    )
}