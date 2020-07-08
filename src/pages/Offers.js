import React, {useEffect, useState, useRef} from 'react'
import Select from '../components/Select'
import Product from '../components/Product'
import {connect} from "react-redux"
import {change_category} from '../redux'
import {Button} from '../components/Button'

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


  const ref = useRef()

  const button_listener = () => {  
      if( window.pageYOffset > 100 && window.pageYOffset < document.querySelector('body').clientHeight - 1000 && window.innerWidth < 900 ){
          ref.current.classList.add('visible')
      }
      else{
          ref.current.classList.remove('visible')
      }
   }


  useEffect(() => {
          window.addEventListener("scroll", button_listener)
      return () => {
          window.removeEventListener("scroll", button_listener)
      }
  }, [])

  const products = productarray.length > 0 
  ? 
    productarray.map( (el) => <Product key={el.id} name={el.nazwa} price={el.cena} src={el.zdjCie.url} /> ) 
  :  
    (<span className="spinner" >
      <span ></span>
    </span>) 


    return (
        <div className="offers_container" >
          <div className="ornament">  </div>
            <span className="category_button"  id="start">
              <Select 
                fun={props.change_category} 
                category={props.category} 
                categories={["Obroże", "Smycze", "Obroże dla kotów", "Zestawy", "Adresatki", "Torby", "Portfele", "Akcesoria"]} 
            />
            </span>
            <div className="offers">
              {products}
            </div>
            <div className="message_buton_wrapper" ref={ref}>
                <Button> <button onClick={ (e) => { e.preventDefault(); window.scrollTo({top: 0, behavior: 'smooth'}); } }> <a  href="#start"> W górę </a> </button> </Button>
            </div>
        </div>

    )
}

export default connect(state => (
    {
      category: state.category
    }
  ), {change_category})(Offers)