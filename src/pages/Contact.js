import React from 'react'
import {Button} from '../components/Button'

export default function Contact() {
    return (
        <div className="contact_container">
            <form name="contact" data-netlify="true">
                    <p className="paragraph">
                        <label>E-mail <input type="email" name="name" /></label>
                    </p>
                    <p className="paragraph">
                        <label>Treść Wiadomości <textarea type="message" name="email" /></label>
                    </p>
                    <div className="policy">
                        <p className="paragraph">Wyrażam zgodę na przetwarzanie moich danych osobowych przez home.pl S.A., ul. Zbożowa 4,
                            70-653 Szczecin w celu i w zakresie niezbędnym do realizacji obsługi niniejszego zgłoszenia.
                            Zapoznałem się z treścią informacji o sposobie przetwarzania moich danych osobowych jak w załączniku.
                        </p>
                        <input type="checkbox" id="scales" name="scales"/>
                    </div>
                        <Button><button onClick={ (e) => e.preventDefault() } type="submit"><p >Wyślij</p></button></Button>
            </form>
        </div>
    )
}
