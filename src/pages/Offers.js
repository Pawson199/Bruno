import React, {useEffect} from 'react'
import Select from '../components/Select'
import Product from '../components/Product'
import {connect} from "react-redux"
import {change_category, get_products} from '../redux'

function Offers(props) {

  const {get_products} = props

  useEffect(() => {
      get_products()
  }, [])

  const products = props.products.map( (el) => <Product key={el.id} name={el.nazwa} price={el.cena} src={el.zdjCie.url} /> )

    return (
        <div className="offers_container">
            <span className="category_button">
              <Select 
                fun={props.change_category} 
                category={props.category} 
                categories={["Obroże", "Smycze", "Obroże dla kotów", "Zestawy", "Adresatki", "Torby", "Portfele", "Akcesoria"]} 
            />
            </span>
            <div className="offers">
              {products}
            </div>
        </div>

    )
}

export default connect(state => (
    {
      category: state.category,
      products: state.products
    }
  ), {change_category, get_products})(Offers)