import React, {useState} from 'react'
import {Button} from '../components/Button'

export default function Contact() {

    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [checkbox1, setcheckbox1] = useState(false)
    
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

   const reminder_of_agreement = (e) => {
    if(checkbox1 === false){
      alert("zaznacz zgodę!");
      e.preventDefault();
    }
    else{
      handleSubmit(e)
    }
   } 

    return (
        <div className="contact_container">
         <form >
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
                        <input type="checkbox" id="scales" name="scales" onChange={ (e) => e.target.checked ? setcheckbox1( true ) : setcheckbox1( false ) } />
                    </div>
                    <Button><button type="submit" onClick={ e => reminder_of_agreement(e) }><p >Wyślij</p></button></Button>
            </form>
        </div>
    )
}
