import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import getItemHook from './dataFetcher/itemsGetterHook'

export default function SmyczDetail(props) {

    const {productName} = useParams()
    const [item_details, set_item_details] = useState([])
    useEffect(
        () => {
            getItemHook("Smycze", productName, set_item_details) 
        },
    [productName])

        console.log(item_details)

    return (
        <div className="product_container">
            Adresatki
        </div>
    )
}
