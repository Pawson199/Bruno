import React from 'react'
import {Button} from '../components/Button'

export default function Contact() {
    
    return (
        <div className="contact_container">
            <form name="contact" method="post">
                    <input type="hidden" name="form-name" value="contact" />
                    <p className="paragraph">
                        <label>E-mail <input type="email" name="email" /></label>
                    </p>
                    <p className="paragraph">
                        <label>Treść Wiadomości <textarea name="message" /></label>
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
