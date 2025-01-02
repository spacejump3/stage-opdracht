import './Introtext.css';

function Introtext({ preTitleText, titleText, paragraph }) {
	return (
		<div className='introText'>
			<p>{preTitleText}</p>
			<h2>{titleText}</h2>
			<p>{paragraph}</p>
		</div>
	);
}

export default Introtext;
