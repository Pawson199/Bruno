import React, {useState} from 'react'
import {Button} from '../components/Button'

export default function Contact() {

    const [ email, setEmail ] = useState("")
    const [ message, setMessage ] = useState("")
    
    const onSub = (e) => {
        const data = { "form-name": "contact", email, message }
    
        fetch("/", {
          method: "POST",
          body: data
        })
          .then(() => console.log("udalo sie!"))
          .catch(error => console.log("nie udalo sie!"));
    
        e.preventDefault();
    }

    const handleChange = e => {
        const {name, value} = e.target
        if (name === 'email' ){
          return setEmail(value)
        }
        if (name === 'message' ){
          return setMessage(value)
        }
      }

    return (
        <div className="contact_container">
            <form onSubmit={onSub} name="contact" method="POST" data-netlify="true">
                    <p className="paragraph">
                        <label>E-mail <input type="email" name="email" onChange={handleChange} /></label>
                    </p>
                    <p className="paragraph">
                        <label>Treść Wiadomości <textarea type="message" name="message" onChange={handleChange} /></label>
                    </p>
                    <div className="policy">
                        <p className="paragraph">Wyrażam zgodę na przetwarzanie moich danych osobowych przez Bruno Leatherworks Wojciech Bednarek Rokicińska 476 
                        92-601 Łódź w celu i w zakresie niezbędnym do realizacji obsługi niniejszego zgłoszenia.
                            Zapoznałem się z treścią informacji o sposobie przetwarzania moich danych osobowych jak w załączniku.
                        </p>
                        <input type="checkbox" id="scales" name="scales"/>
                    </div>
                    <Button><button type="submit"><p >Wyślij</p></button></Button>
            </form>
        </div>
    )
}
