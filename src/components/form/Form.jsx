import './Form.css';
import Button from '../Button/Button.jsx';

function Form() {
	return (
		<form>
			<label>
				Naam
				<input type='text' placeholder='Voornaam' required />
				<input type='text' placeholder='Achternaam' required />
				<span dataError='Vul uw voornaam in'></span>
			</label>

			<label>
				Contact
				<input type='number' placeholder='Telefoonnummer' required />
				<input type='email' placeholder='E-mail' required />
			</label>

			<label>
				Adres
				<input type='text' placeholder='Straatnaam + huisnr.' required pattern='^(?=.*[A-Za-z])(?=.*\d).+$' />
				<div className='adres'>
					<input type='text' placeholder='Postcode' required pattern='^\d{4}[A-Za-z]{2}$' />
					<input type='text' placeholder='Plaats' required pattern='^[^0-9]+$' />
				</div>
			</label>
			<div className='submit-button'>
				<Button text='Direct betalen' type='submit' />
				<a href=''>Stuur een offerte</a>
			</div>
			<p>Betalen via iDEAL, Creditcard... etc.</p>
		</form>
	);
}

export default Form;
