import './Choice.css'

function Choice({choiceText, imgContent, value, onChange}) {
    return (
        <fieldset>
            <label className={imgContent}>
                <input type="radio" name="choice" value={value} onChange={onChange} />
                {choiceText}
            </label>
        </fieldset>
    )
}

export default Choice