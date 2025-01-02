import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';

import Container from './components/Container/Container.jsx';
import Step1 from './components/Steps/Step1.jsx';
import Step2 from './components/Steps/Step2.jsx';
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
			<Container >
				{currentStep === 1 && (<Step1 handleSelection={handleSelection} />)}
				{currentStep === 2 && (<Step2 currentChoice={currentChoice} />)}
				<Button btnType='nextBtn' text='Volgende' onClick={incrementStep} disabled={!currentChoice ? true : false}/>
				<Button btnType='previousBtn' text='Vorige' onClick={decrementStep} />
			</Container>
		</>
	);
}

export default App;
