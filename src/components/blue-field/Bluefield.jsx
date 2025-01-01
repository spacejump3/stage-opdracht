import './Bluefield.css';
import Button from '../button/Button.jsx';

import Page1 from '../pages/page-1.jsx';
import Page2 from '../pages/page-2.jsx';

function Bluefield() {
	return (
		<>
			<main>
				<div className='blueField'>
					<Page1 />
					{/* <Page2 /> */}
					<Button btnType='volgendeBtn' text='Volgende'/>
					<Button btnType='vorigeBtn' text='Vorige'/>
				</div>
			</main>
		</>
	);
}

export default Bluefield;
