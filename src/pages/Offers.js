import React from 'react'
import Select from '../components/Select'
import {connect} from "react-redux"
import {change_category} from '../redux'

function Offers(props) {

    return (
        <div className="offers_container">
            <Select 
                fun={props.change_category} 
                category={props.category} 
                categories={["Obroże", "Smycze", "Obroże dla kotów", "Zestawy", "Adresatki", "Torby", "Portfele", "Akcesoria"]} 
            />
        </div>
    )
}

export default connect(state => ({category: state.category}), {change_category})(Offers)