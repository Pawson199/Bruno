import React, {useEffect, useState, useRef} from 'react'
import Select from '../components/Select'
import Product from '../components/Product'
import {connect} from "react-redux"
import {change_category} from '../redux'
import {Button} from '../components/Button'
const contentful = require('contentful')

function Offers(props) {


  const [productarray, setproductarray] = useState([])

  useEffect(() => {
    const client = contentful.createClient({
      space: 'f7ius08ge64j',
      environment: 'master',
      accessToken: 'LCdJVL6-l_G8pEUS8U_0qhaMO0dUv417XCaMSLn4caY'
    })

    client.getEntries({content_type: 'dog'})
    .then((response) => {
    
  const products_new =  response.items.map( el =>
      ({
        id: el.sys.id,
        cena: el.fields.dogPrice,
        nazwa: el.fields.dogName,
        photo_url: el.fields.dogPhoto.fields.file.url 
      })
      )
      setproductarray(products_new)
      ref2.current.classList.remove('center')
      })
    .catch(console.error)

  }, [])

  const ref = useRef()
  const ref2 = useRef()

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

  console.log(productarray)

  const products = productarray.length > 0 
  ? 
    productarray.map( (el) => <Product key={el.id} name={el.nazwa} price={el.cena} src={el.photo_url} /> ) 
  :  
    (<span className="spinner" >
      <span ></span>
    </span>) 


    return (
        <div className="offers_container" >
          <div className="ornament">  </div>
            <span className="category_button" >
              <Select 
                fun={props.change_category} 
                category={props.category} 
                categories={["Obroże", "Smycze", "Obroże dla kotów", "Zestawy", "Adresatki", "Torby", "Portfele", "Akcesoria"]} 
            />
            </span>
            <div className="offers center" ref={ref2}>
              {products}
            </div>
            <div className="message_buton_wrapper" ref={ref}>
                <Button> <button onClick={ (e) => { e.preventDefault(); window.scrollTo({top: 0, behavior: 'smooth'}); } }> <p > W górę </p> </button> </Button>
            </div>
        </div>

    )
}

export default connect(state => (
    {
      category: state.category
    }
  ), {change_category})(Offers)