import React, {useEffect, useState, useRef} from 'react'
import {connect} from "react-redux"
import {Button} from '../components/Button'
import { validate } from 'validate.js';

function Adress(props) {

    const [ price_off_all, setprice_off_all ] = useState(0)
    const [ paczkomat, setpaczkomat ] = useState([])
    const [name, setname] = useState('')
    const [surname, setsurname] = useState('')
    const [number, setnumber] = useState('')
    const [email, setemail] = useState('')
    const [contry_code, setcontry_code] = useState('')
    const [city, setcity] = useState('')
    const [street, setstreet] = useState('')
    const [home_number, sethome_number] = useState('')

    const ref1 = useRef()
    const ref2 = useRef()
    const checkbox = useRef()

    const handleChange = e => {
        switch(e.target.name){
            case "email" :
                setemail(e.target.value)
            break;
            case "name" :
                setname(e.target.value)
            break;
            case "surname" :
                setsurname(e.target.value)
            break;
            case "number" : 
            { 
                let stringLength = 0
                for( let i = 0; i < number.length; i++ ){
                   if(number[i] !== '-') stringLength++
                };
                if( stringLength < 9 || number.length < 9) setnumber(  e.target.value.replace(' ','-') )
                else setnumber( prev => prev.substring(0, number.length - 1) )
                break;
            }
            case "street" :
                setstreet(e.target.value)
            break;
            case "home_number" :
                sethome_number(e.target.value)
            break;
            case "city" :
                setcity(e.target.value)
            break;
            case "country_code" :
                setcontry_code(e.target.value)
            break;
            default:
              alert("no input found")
        }
    };

    const checkFields = (useref) => {

        let constraints = {
            from: {
              email: true
            }
        };

        const regex = new RegExp('[0-9]{9}');

        [...useref.current].forEach( el =>{
            if(el.value === "") el.style.cssText = "border: 1px solid red" 

            else if(el.name === 'email' && JSON.stringify(validate({from: el.value}, constraints)) !== undefined){
                el.style.cssText = "border: 1px solid red"
            }
            else if(el.name === 'number' && !regex.test(number)){
                el.style.cssText = "border: 1px solid red"
            }

            else el.style.cssText = ""
        })

        let isempty = false;

       const choosedForm = props.choosed_deliviery === 13 ? 
        [ name, surname, email ] 
        :
        [ name, surname, email, contry_code, city, street, home_number ]

        choosedForm.forEach( 
            element => element.length === 0 ? isempty = true : null
        )

        if( isempty 
            || (paczkomat.length !== undefined && props.choosed_deliviery === 13) //this option is valid only for inpost deliviery
            || !regex.test(number) 
            || JSON.stringify(validate({from: email}, constraints)) !== undefined
            ){
                alert("Popraw dane zaznaczone na czerwono")
        }

        else{
            checkbox.current.checked ?
            alert("Udało się! Teraz mógłbyś zapłacić, gdyby sklep był spięty z systemem płatności mobilnej. Mogłbyś, ale nie jest, więc trzeba jeszcze poczekać xD")
            : alert('no spoczo, ale musisz zaznaczyc zgode')
        }

    }

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
        }, { width: 600, height: 500 });
    }

    const summary = () => (
        <div className="summary_in_deliviery" >
            <h2><b>Do zapłaty:  </b>{price_off_all + props.choosed_deliviery}PLN</h2>
            <span>
                <input ref={checkbox} type="checkbox"></input>
                <p><small>Akceptuję regulamin serwisu i zapoznałem/am się z informacjami dotyczącymi moich danych osobowych zamieszczonymi w polityce prywatności.</small></p>
            </span>
            <Button><button onClick={ () => checkFields(props.choosed_deliviery === 13 ? ref1 : ref2 ) } ><p>Płatność</p></button></Button>
        </div>
    )

    const basic_form = () => (
        <>
            <span>
                    <label>E-mail</label>
                    <input onChange={handleChange} value={email}  name="email" type="email" ></input>
            </span>
            <span>
                    <label>Numer Telefonu</label>
                    <input onChange={handleChange} value={number}  name="number" type="text" ></input>
            </span>
            <span>
                    <label>Imię</label>
                    <input onChange={handleChange} value={name}  name="name" type="text" ></input>
            </span>
            <span>
                    <label>Nazwisko</label>
                    <input onChange={handleChange} value={surname}  name="surname" type="text" ></input>
            </span>
        </>
    )
    
  const return_correct_deliviery_option = () => {

        if( props.choosed_deliviery === 13 ){
            return (
                <div className="inpost_container" >
                    <h1>Dane do zamówienia</h1>
                    <div className="data_form" >
                        <form ref={ref1}>
                        {basic_form()}
                        <span>
                            <label>Paczkomat</label>
                            <input type="text" disabled 
                            value={paczkomat.address !== undefined ? `${paczkomat.address.line1}, ${paczkomat.address.line2}` : ''} 
                            placeholder='Wybierz paczkomat' >    
                            </input>
                        </span>
                        <div className="inpost_map">
                        <Button><button value="button" name="inpost" onClick={ (e) => { openModal(); e.preventDefault(); return false;}}><p>Paczkomaty</p></button></Button>
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
                        <form ref={ref2} >
                        {basic_form()}
                            <span>
                                <label>Ulica</label>
                                <input onChange={handleChange}  name="street" type="text" ></input>
                            </span>
                            <span >
                                <label>Nr domu/lokalu</label>
                                <input onChange={handleChange}  name="home_number" type="text" ></input>
                            </span>
                            <span>
                                <label>Kod pocztowy</label>
                                <input onChange={handleChange}  name="country_code" type="text" pattern="[0-9]{5}"></input>
                            </span>
                            <span>
                                <label>Miasto/Wieś</label>
                                <input onChange={handleChange}  name="city" type="text" ></input>
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
                <p className="error_adres_p" > Najpierw wybierz metodę dostawy w swoim koszyku. </p>
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