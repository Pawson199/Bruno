import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import getItemHook from './dataFetcher/itemsGetterHook'
import { Link } from 'react-router-dom'
import Select from '../../components/Select'
import {Button} from '../../components/Button'

export default function Zestaw(props) {

    const [item_details, set_item_details] = useState([])
    const {productName} = useParams()

    useEffect(
        () => {
            getItemHook("Zestawy", productName, set_item_details) 
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
                    <h1>{item_details[0].fields.nazwa}</h1>
                    <div>
                        <span>Opis</span>
                        <span>Cena: {item_details[0].fields.cena}</span>
                    </div>
                </div>
            </div>
            <Select
                categories={["Obroże", "Smycze",
                "Zestawy", "Adresatki", 
                "Torby", "Portfele"]}
                category_name='Rozmiar'
                 >
                Wybierz rozmiar 
            </Select>
            <Select
                categories={["Rozowy", "Czerowny",
                "Bialy", "Niebieski", 
                "Zielony", "Fiolet"]}
                category_name='Kolor'
                 >
                Wybierz rozmiar
            </Select>
            <span>Ilość</span>
            <Button>Dodaj do koszyka</Button>
        </div>
        :
        <div>ni ma</div>
    )
}