import './Page.css';
import Form from '../form/Form.jsx';
import Introtext from '../intro-text/Intro-text.jsx';
import Imglist from '../img-list/Img-list.jsx';

import laadpaal from '../../assets/laadpaal.png';
import hidden from '../../assets/hidden.png';

function Page2({currentChoice}) {
	return (
		<div className='page'>
			<div className='laadpunt-text'>
				<Introtext blueText='Motorhuis laadpunt samenstellen' titleText='Gefeliciteerd!' paragraph='Je hebt een pracht oplaadpunt samengesteld! Vul jouw gegevens in en wij nemen graag jouw setting door. Tot snel!' />

				{/* laadpunt + list */}
				{/* <Imglist price='€1.658' img={hidden}/> */}
                {currentChoice === '1' && (<Imglist price='€1.558' img={hidden}/>)}
                {currentChoice === '2' && (<Imglist price='€1.658' img={laadpaal}/>)}
			</div>
			<Form />
		</div>
	);
}

export default Page2;
