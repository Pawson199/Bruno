import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {useHistory} from "react-router-dom";
import logo from "../images2/bruno-logo.png"
import {connect} from "react-redux"

function Menu(props) {

    let history = useHistory();
    const [permission, setPermission] = useState("display_off")
    const [burger, setBurger] = useState('no-cross')
    const [ burgerornot, setburgerornot ] = useState(false)
    
    const setPermissionOnClick = () => {
      setPermission( 
        prevState => prevState === "display_off" ?  "display_in" : 'display_off'
      );
      setBurger(
        prevState => prevState === "no-cross" ?  "cross" : 'no-cross'
      )
    }
    

    function checkWidth() {
        window.innerWidth < 900 ? setburgerornot(false) : setburgerornot(true)
    }

    useEffect(() => {

        window.innerWidth < 900 ? setburgerornot(false) : setburgerornot(true)

        window.addEventListener('resize',  checkWidth )
        return () => {
            window.removeEventListener('resize', checkWidth)
        }
    }, [])

    const burger_menu = () => { return ( 
        <>

          <div onClick={setPermissionOnClick} className={` ${burger} burger`} >
            <span ></span>
          </div>
          <ul onClick={setPermissionOnClick} className={`${permission} burgerek`}>
            <li ><Link to="/" >HOME</Link></li>
            <li ><Link to="/offers" >OFERTY</Link></li>
            <li ><Link to="/contact" >KONTAKT</Link></li>
          </ul>
        </>
      )
    }
    
     const classic_menu = () => { return ( 
      <ul>
        <li ><Link to="/" >Strona główna</Link></li>
        <li ><Link to="/offers" >Oferty</Link></li>
        <li ><Link to="/contact" >Kontakt</Link></li>
      </ul>)
    }


    return (
        <nav className="menu">
            {burgerornot  ? classic_menu() : burger_menu()}
            <div className="logo-container">
              <img onClick={ () =>  history.replace('/')} alt="logo" src={logo}/> 
            </div>
              <div className="cart">
                <Link to="/cart" >
                  <i className="ri-shopping-bag-3-line ri-xl"></i>
                  <p>{props.products_in_cart.length}</p>
                </Link>
              </div>
           
        </nav>
    )
}

export default connect(state => (
  {
    products_in_cart : state.cart
  }
), {})(Menu)