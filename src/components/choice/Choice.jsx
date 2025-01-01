import './Choice.css'

function Choice({laadpuntText, imgContent}) {
    return (
        <fieldset>
            <label className={imgContent}>
                <input type="radio" name="choice" />
                {laadpuntText}
            </label>
        </fieldset>
    )
}

export default Choice