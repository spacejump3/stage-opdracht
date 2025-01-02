import { useState } from 'react';
import './App.css';
import Header from './components/header/Header.jsx';

import Bluefield from './components/blue-field/Bluefield.jsx';
import Page1 from './components/pages/page-1.jsx';
import Page2 from './components/pages/page-2.jsx';
import Button from './components/Button/Button.jsx';

function App() {
	const [currentStep, setCurrentStep] = useState(1);
	const [currentChoice, setCurrentChoice] = useState(null);

	function incrementStep() {
		if (currentStep >= 2) {
			return
		}
		
		setCurrentStep(currentStep + 1)
	}

	function decrementStep() {
		if (currentStep <= 1) {
			return
		}
		
		setCurrentStep(currentStep - 1)
	}

	function handleSelection(event) {
		setCurrentChoice(event.target.value)
	}

	return (
		<>
			<Header />
			<Bluefield >
				{currentStep === 1 && (<Page1 handleSelection={handleSelection} />)}
				{currentStep === 2 && (<Page2 currentChoice={currentChoice} />)}
				<Button btnType='volgendeBtn' text='Volgende' onClick={incrementStep} disabled={!currentChoice ? true : false}/>
				<Button btnType='vorigeBtn' text='Vorige' onClick={decrementStep} />
			</Bluefield>
		</>
	);
}

export default App;
