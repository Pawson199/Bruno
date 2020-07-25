import React, {useEffect, useState} from 'react'
import Map from '../components/Map'
import {connect} from "react-redux"
import {Button} from '../components/Button'

function Adress(props) {

let [ price_off_all, setprice_off_all ] = useState(0)

 useEffect( () => {
    let price = 0
    props.products_in_cart.forEach( el => price += el.price  )
    setprice_off_all(price)
 },[props.products_in_cart])

    const summary = () => (
        <div>
            <p>Wartość produktów:{price_off_all}</p>
            <p>Koszt dostawy:{props.choosed_deliviery}</p>
            <p>Suma:{price_off_all + props.choosed_deliviery}</p>
            <span>
                <input type="checkbox"></input>
                <p>Akceptuję regulamin serwisu i zapoznałem/am się z informacjami dotyczącymi moich danych osobowych zamieszczonymi w polityce prywatności.</p>
            </span>
            <Button><button><p>Zapłać</p></button></Button>
        </div>
    )

    const basic_form = () => (
        <>
            <span>
                    <label>E-mail</label>
                    <input type="email" ></input>
            </span>
            <span>
                    <label>Numer Telefonu</label>
                    <input type="email" ></input>
            </span>
            <span>
                    <label>Imię</label>
                    <input type="email" ></input>
            </span>
            <span>
                    <label>Nazwisko</label>
                    <input type="email" ></input>
            </span>
        </>
    )
    
  const return_correct_deliviery_option = () => {

        if( props.choosed_deliviery === 13 ){
            return (
                <div className="inpost_container" >
                    <h1>Dane do zamówienia</h1>
                    <div>
                        <form>
                        {basic_form()}
                        </form>
                        <h2>Wybierz paczkomat:</h2>
                        <div className="inpost_map">
                            <Map></Map>
                        </div>
                        {summary()}
                    </div>
                </div>
            )
        }
        else if( props.choosed_deliviery === 16 ){
            return (
                <div className="dpd_container" >
                    <h1>Dane do zamówienia</h1>
                    <div>
                        <form>
                        {basic_form()}
                            <span>
                                <label>Ulica</label>
                                <input type="text" ></input>
                            </span>
                            <span>
                                <label>Nr domu</label>
                                <input type="number" ></input>
                            </span>
                            <span>
                                <label>Nr lokalu</label>
                                <input type="number" ></input>
                            </span>
                            <span>
                                <label>Kod pocztowy</label>
                                <input type="text" pattern="[0-9]{5}"></input>
                            </span>
                            <span>
                                <label>Miasto</label>
                                <input type="email" ></input>
                            </span>
                        </form>
                        {summary()}
                    </div>
                </div>
            )
        }
        else{
            return(
             <div className="error_adres" >
                <p> Najpierw wybierz metodę dostawy w swoim koszyku. </p>
            </div>   
            )
        }
    }

    return (
        <>
        {return_correct_deliviery_option()}
        </>
    )
}

export default connect(state => (
    {
      products_in_cart : state.cart,
      choosed_deliviery: state.deliviery
    }
  ), {})(Adress)