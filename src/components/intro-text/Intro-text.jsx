import './Intro-text.css';

function Introtext({ blueText, titleText, paragraph }) {
	return (
		<div className='intro-text'>
			<p>{blueText}</p>
			<h2>{titleText}</h2>
			<p>{paragraph}</p>
		</div>
	);
}

export default Introtext;
