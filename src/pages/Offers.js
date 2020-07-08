import React, {useEffect, useState} from 'react'
import Select from '../components/Select'
import Product from '../components/Product'
import {connect} from "react-redux"
import {change_category} from '../redux'

function Offers(props) {


  const [productarray, setproductarray] = useState([])

  useEffect(() => {
     
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
          query: '{ allBluzas { id cena nazwa opis zdjCie { url } } }'
        }),
      }
    )
    .then(res => res.json())
    .then((res) => {
      setproductarray(res.data.allBluzas)
    })
    .catch((error) => {
      console.log(error);
    });

  }, [])

  const products = productarray.length > 0 ? productarray.map( (el) => <Product key={el.id} name={el.nazwa} price={el.cena} src={el.zdjCie.url} /> ) :  (<p>loading</p>) 


    return (
        <div className="offers_container">
          <div className="ornament">  </div>
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
      category: state.category
    }
  ), {change_category})(Offers)