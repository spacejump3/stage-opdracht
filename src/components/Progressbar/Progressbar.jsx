import './Progressbar.css'

function Progressbar({ currentStep }) {
    return (
        <div className='progressBar'>
            <div className='bar'></div>
            <div className='circle'>{currentStep}/2</div>
        </div>
        
    )
}

export default Progressbar