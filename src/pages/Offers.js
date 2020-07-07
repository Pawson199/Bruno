import React from 'react'
import Select from '../components/Select'
import {connect} from "react-redux"
import {change_category} from '../redux'

function Offers(props) {


fetch(
  'https://graphql.datocms.com/',
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${process.env.REACT_APP_API_PRODUCTS_KEY}`,
    },
    body: JSON.stringify({
      query: '{ allBluzas { cena nazwa opis zdjCie { url } } }'
    }),
  }
)
.then(res => res.json())
.then((res) => {

    res.data.allBluzas.forEach( el => {
        console.log(el)
    } )
})
.catch((error) => {
  console.log(error);
});


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