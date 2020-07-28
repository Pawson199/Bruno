import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {connect} from "react-redux"
import { getItem } from '../../redux'

function Zestaw(props) {

    const {productName, zestaw } = useParams
    const { getItem } = props

    useEffect(
        () => {
            getItem(productName, zestaw)
        },
    [getItem, productName, zestaw])

    return (
        <div>
            Zestawy
        </div>
    )
}


export default connect(state => (
    {
     item: state.oneItem,
    }
  ), {getItem})(Zestaw)
