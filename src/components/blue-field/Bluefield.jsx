import './Bluefield.css';

function Bluefield({children}) {
	return (
		<main>
			<div className='blueField'>
				{children}
			</div>
		</main>
	);
}

export default Bluefield;
