import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import getItemHook from './dataFetcher/itemsGetterHook'

export default function Zestaw(props) {

    const {productName, zestaw } = useParams
    const [item_details, set_item_details] = useState([])

    useEffect(
        () => {
            getItemHook("Zestawy", productName, set_item_details) 
        },
    [productName, zestaw])

    console.log(item_details)

    return (
        <div className="product_container">
            Zestawy
        </div>
    )
}