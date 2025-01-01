import { useState } from 'react';
import './App.css';
import Header from './components/header/Header.jsx';
import Form from './components/form/Form.jsx';

import Bluefield from './components/blue-field/Bluefield.jsx';


function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<Header />
			<Bluefield />
		</>
	);
}

export default App;
