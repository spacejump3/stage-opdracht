import './Img-list.css';

// assets
import laadpaal from '../../assets/laadpaal.png';

function Imglist({price}) {
	return (
		<>
            <div className='laadpunt-list'>
                <img src={laadpaal} alt='afbeelding van een Bluecurrent laadpaal' />

                <div>
                    <ul>
                        <li>✓ Laden met vaste kabel</li>
                        <li>✓ 5 meter</li>
                        <li>✓ Laden met vaste kabel</li>
                        <li>✓ Op een paal</li>
                        <li>✓ Graafwerk</li>
                        <li>✓ Geen</li>
                    </ul>

                    <p>Jouw keuze</p>
                    <p>{price}</p>
                </div>
            </div>
		</>
	);
}

export default Imglist;
