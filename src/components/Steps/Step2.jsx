import './Steps.css';
import Form from '../Form/Form.jsx';
import Introtext from '../Introtext/Introtext.jsx';
import Imglist from '../Imglist/Imglist.jsx';

import laadpaal from '../../assets/laadpaal.png';
import hidden from '../../assets/hidden.png';

function Step2({ currentChoice }) {
	return (
		<div className='page'>
			<div className='endCard'>
				<Introtext preTitleText='Motorhuis laadpunt samenstellen' titleText='Gefeliciteerd!' paragraph='Je hebt een pracht oplaadpunt samengesteld! Vul jouw gegevens in en wij nemen graag jouw setting door. Tot snel!' />

				{currentChoice === '1' && <Imglist price='€1.558' img={hidden} />}
				{currentChoice === '2' && <Imglist price='€1.658' img={laadpaal} />}
			</div>
			<Form />
		</div>
	);
}

export default Step2;
