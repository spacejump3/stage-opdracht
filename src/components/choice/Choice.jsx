import './Choice.css'

function Choice({laadpuntText, imgContent, value, onChange}) {
    return (
        <fieldset>
            <label className={imgContent}>
                <input type="radio" name="choice" value={value} onChange={onChange} />
                {laadpuntText}
            </label>
        </fieldset>
    )
}

export default Choice