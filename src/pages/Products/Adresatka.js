import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import  getItemHook from './dataFetcher/itemsGetterHook'
import { Link } from 'react-router-dom'
import Select from '../../components/Select'
import {Button} from '../../components/Button'

export default function Adresatka(props) {
    const {productName} = useParams()
    const [item_details, set_item_details] = useState([])
    useEffect(
        () => {
            getItemHook("Adresatki", productName, set_item_details) 
        },
    [productName])

        console.log(item_details)

    return (
        <div className="product_container">
              <div className="product_container" >
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
            <span>
                <label>Napis na adresatce:</label>
                <textarea type="text" ></textarea>
            </span>
            <span>
                <label>Wybierz kolor adresatki</label>
                <Select
                categories={["Rozowy", "Czerowny",
                "Bialy", "Niebieski", 
                "Zielony", "Fiolet"]}
                category_name='Kolor'
                 >
                </Select>
            </span>
            <span>Ilość</span>
            <Button>Dodaj do koszyka</Button>
        </div>
        </div>
    )
}
