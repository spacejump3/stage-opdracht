import './Container.css';

function Container({children}) {
	return (
		<main>
			<div className='container'>
				{children}
			</div>
		</main>
	);
}

export default Container;
