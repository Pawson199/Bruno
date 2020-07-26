import React, {useEffect, useState} from 'react'
import {connect} from "react-redux"
import {Button} from '../components/Button'

function Adress(props) {

    const [ price_off_all, setprice_off_all ] = useState(0)
    const [ paczkomat, setpaczkomat ] = useState({})

    useEffect( () => {
        let price = 0
        props.products_in_cart.forEach( el => price += el.price  )
        setprice_off_all(price)
    },[props.products_in_cart])

    window.easyPackAsyncInit = function () {
        global.easyPack.init({
            defaultLocale: 'pl',
            mapType: 'osm',
            searchType: 'osm',
            points: {
                types: ['parcel_locker']
            },
            map: {
                initialTypes: ['parcel_locker']
            }
        });
    };
    function openModal() {
        global.easyPack.modalMap(function(point, modal) {
        modal.closeModal();
        setpaczkomat(point)
        }, { width: 800, height: 600 });
    }

    const summary = () => (
        <div className="summary_in_deliviery" >
            <h2><b>Do zapłaty:  </b>{price_off_all + props.choosed_deliviery}PLN</h2>
            <span>
                <input type="checkbox"></input>
                <p><small>Akceptuję regulamin serwisu i zapoznałem/am się z informacjami dotyczącymi moich danych osobowych zamieszczonymi w polityce prywatności.</small></p>
            </span>
            <Button><button onClick={ () => console.log(paczkomat) } ><p>Płatność</p></button></Button>
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
                    <div className="data_form" >
                        <form>
                        {basic_form()}
                        <span>
                            <label>Paczkomat</label>
                            <input type="text" disabled placeholder={ paczkomat.address !== undefined ? `${paczkomat.address.line1}, ${paczkomat.address.line2}` : 'Wybierz paczkomat' } ></input>
                        </span>
                        <div className="inpost_map">
                        <Button><button onClick={ (e) => { openModal(); e.preventDefault(); return false;}}><p>Paczkomaty</p></button></Button>
                        </div>
                        </form>
                        {summary()}
                    </div>
                </div>
            )
        }
        else if( props.choosed_deliviery === 16 ){
            return (
                <div className="dpd_container" >
                    <h1>Dane do zamówienia</h1>
                    <div className="data_form" >
                        <form>
                        {basic_form()}
                            <span>
                                <label>Ulica</label>
                                <input type="text" ></input>
                            </span>
                            <span>
                                <label>Nr domu/lokalu</label>
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