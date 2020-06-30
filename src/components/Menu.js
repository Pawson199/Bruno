import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {useHistory} from "react-router-dom";
import logo from "../images2/bruno-logo.png"

export default function Menu() {

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
            <li ><Link to="/oferta" >OFERTY</Link></li>
            <li ><Link to="/about" >O NAS</Link></li>
            <li ><Link to="/kontakt" >KONTAKT</Link></li>
          </ul>
        </>
      )
    }
    
     const classic_menu = () => { return ( 
      <ul>
        <li ><Link to="/" >Strona główna</Link></li>
        <li ><Link to="/oferta" >Oferty</Link></li>
        <li ><Link to="/about" >O nas</Link></li>
        <li ><Link to="/kontakt" >Kontakt</Link></li>
      </ul>)
    }


    return (
        <nav className="menu">
            {burgerornot  ? classic_menu() : burger_menu()}
            <div className="logo-container">
              <img onClick={ () =>  history.replace('/')} alt="logo" src={logo}/> 
            </div>
            <div className="cart">
            <i className="ri-shopping-bag-3-line ri-xl"></i>
                <p> 0 </p>
            </div>
        </nav>
    )
}