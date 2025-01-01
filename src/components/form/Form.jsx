import './Form.css'
import Button from '../../components/button/Button.jsx'

function Form() {
    return (
        <form action="submit">
                <label>Naam
                    <input type="text" placeholder="Voornaam" />
                    <input type="text" placeholder="Achternaam" />
                </label>

                <label>Contact
                    <input type="tel" placeholder="Telefoonnummer" />
                    <input type="email" placeholder="E-mail" />
                </label>

                <label>Adres
                    <input type="text" placeholder="Straatnaam + huisnr." />
                    <div className='adres'>
                        <input type="text" placeholder="Postcode" />
                        <input type="text" placeholder="Plaats" />
                    </div>
                </label>
                <div className='submit-button'>
                    <Button text='Direct betalen'/>
                    <a href="">Stuur een offerte</a>
                </div>
                <p>Betalen via iDEAL, Creditcard... etc.</p>
        </form>
    )
}

export default Form