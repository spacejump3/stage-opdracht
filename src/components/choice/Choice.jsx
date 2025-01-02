import './Choice.css'

function Choice({choiceText, imgContent, value, onChange, checked}) {
    return (
        <fieldset>
            <label className={imgContent}>
                <input type="radio" name="choice" value={value} onChange={onChange} checked={checked} />
                {choiceText}
            </label>
        </fieldset>
    )
}

export default Choice