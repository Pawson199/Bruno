import React, {useEffect, useRef} from 'react'
import Select from '../components/Select'
import Product from '../components/Product'
import {connect} from "react-redux"
import {change_category} from '../redux'
import {Button} from '../components/Button'

function Offers(props) {

  const {change_category} = props

  useEffect(() => {
    change_category("dog")
  }, [change_category])

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


  const mapIt = () => {
   return props.productarray.map( (el) => <Product key={el.id} name={el.nazwa} price={el.cena} src={el.photo_url} /> )
  }
  const products = props.productarray.length > 0 
  ? 
    mapIt()
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
                categories={["dog", "smycze", "kocie", "zestawy", "adresaty", "torby", "portfele", "akcesoria"]} 
            />
            </span>
            <div className={`offers ${props.center}`}>
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
      productarray: state.products,
      center: state.center_class
    }
  ), {change_category})(Offers)