import './Page.css';
import Form from '../form/Form.jsx';
import Introtext from '../intro-text/Intro-text.jsx';
import Imglist from '../img-list/Img-list.jsx';

function Page2() {
	return (
		<>
        <div className='page'>
            <div className='laadpunt-text'>
                <Introtext blueText='Motorhuis laadpunt samenstellen' titleText='Gefeliciteerd!' paragraph='Je hebt een pracht oplaadpunt samengesteld! Vul jouw gegevens in en wij nemen graag jouw setting door. Tot snel!' />

                {/* laadpunt + list */}
                <Imglist price='€1.658' />
            </div>
            <Form />
        </div>
		</>
	);
}

export default Page2;
