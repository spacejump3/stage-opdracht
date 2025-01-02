import './Page.css';
import Introtext from '../intro-text/Intro-text.jsx';
import Choice from '../choice/Choice.jsx';

function Page1({handleSelection}) {
	return (
		<div className='page'>
			<div className='laadpunt-text'>
				<Introtext blueText='Motorhuis laadpunt samenstellen' titleText='Wat voor laadpunt wil je?' paragraph='Kies één van de twee laadpunten' />
			</div>
			<div className='choices'>
				<Choice laadpuntText='Hidden' imgContent='img-hidden' value='1' onChange={handleSelection} />
				<Choice laadpuntText='U:Move' imgContent='img-umove' value='2' onChange={handleSelection} />
			</div>
		</div>
	);
}

export default Page1;
