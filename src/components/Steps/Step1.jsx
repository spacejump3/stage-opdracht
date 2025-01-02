import './Steps.css';
import Introtext from '../Introtext/Introtext.jsx';
import Choice from '../Choice/Choice.jsx';

function Step1({ handleSelection, currentChoice }) {
	return (
		<div className='page'>
			<div className='endCard'>
				<Introtext preTitleText='Motorhuis laadpunt samenstellen' titleText='Wat voor laadpunt wil je?' paragraph='Kies één van de twee laadpunten' />
			</div>
			<div className='choices'>
				<Choice choiceText='Hidden' imgContent='img-hidden' value='1' checked={currentChoice === '1'} onChange={handleSelection} />
				<Choice choiceText='U:Move' imgContent='img-umove' value='2' checked={currentChoice === '2'} onChange={handleSelection} />
			</div>
		</div>
	);
}

export default Step1;
