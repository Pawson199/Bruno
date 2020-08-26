import React, {useState, useRef} from 'react'
import {Button} from '../components/Button'
import { validate } from 'validate.js';

export default function Contact() {

    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [checkbox1, setcheckbox1] = useState(false)

    const ref = useRef()

    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
      }

    const data = {
          email: email,
          message: message
    }

    const handleSubmit = (e) => {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...data })
          })
            .then(() => alert("Wysłano wiadomość!"))
            .catch(error => alert(error));
    
          e.preventDefault();
    }

    const handleChange = e => {
        switch(e.target.name){
            case "email" :
                setEmail(e.target.value)
            break;
            case "message" :
                setMessage(e.target.value)
            break;
            default:
              alert("no input found")
        }
    };

    let constraints = {
        from: {
          email: true
        }
      };


   const reminder_of_agreement = (e) => {

    [...ref.current].forEach( el =>
        el.value === "" ? el.style.cssText = "border: 1px solid red" : el.style.cssText = ""
    )

    console.log([...ref.current])

    if(checkbox1 === false || email.length <= 0 || message.length <= 0 ){
      alert("Wypełnij wszystkie pola i zaznacz zgodę!");
      e.preventDefault();
      return;
    }
    else if( JSON.stringify(validate({from: email}, constraints)) !== undefined ){
        alert('Email musi posiadać poprawny format!');
        e.preventDefault();
        return;
    }
    handleSubmit(e);
   } 


    return (
        <div className="contact_container">
         <h1>Formularz kontaktowy</h1>
         <form ref={ref} >
                    <p className="paragraph">
                        <label>E-mail <input type="email" value={email} onChange={handleChange}  name="email" /></label>
                    </p>
                    <p className="paragraph">
                        <label>Treść Wiadomości <textarea name="message" value={message} onChange={handleChange} /></label>
                    </p>
                    <div className="policy">
                        <p className="paragraph">Wyrażam zgodę na przetwarzanie moich danych osobowych przez Bruno Leatherworks Wojciech Bednarek Rokicińska 476 
                        92-601 Łódź w celu i w zakresie niezbędnym do realizacji obsługi niniejszego zgłoszenia.
                            Zapoznałem się z treścią informacji o sposobie przetwarzania moich danych osobowych jak w załączniku.
                        </p>
                        <input value={checkbox1} type="checkbox" id="scales" name="scales" onChange={ (e) => e.target.checked ? setcheckbox1( true ) : setcheckbox1( false ) } />
                    </div>
                    <Button><button value="button" type="submit" onClick={ e => reminder_of_agreement(e) }><p >Wyślij</p></button></Button>
            </form>
        </div>
    )
}
