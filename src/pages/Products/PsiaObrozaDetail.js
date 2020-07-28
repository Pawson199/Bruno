import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {connect} from "react-redux"
import { getItem } from '../../redux'

function PsiaObrozaDetail(props) {

    const {productName} = useParams()
    const {getItem} = props
    useEffect(
        () => {
            getItem('dog', productName)
        },
    [getItem, productName])

        console.log(props.item)

    return (
        <div>
            OBROZA PSIA
        </div>
    )
}


export default connect(state => (
    {
     item: state.oneItem,
    }
  ), {getItem})(PsiaObrozaDetail)
