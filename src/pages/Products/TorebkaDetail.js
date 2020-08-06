import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import getItemHook from './dataFetcher/itemsGetterHook'

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
        <div className="product_container">
              { item_details.length > 0 ? item_details[0].fields.nazwa : null}
        </div>
    )
}
