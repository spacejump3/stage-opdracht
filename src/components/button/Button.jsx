import './Button.css'

function Button({text, btnType}) {
    return (
        <>
            <button className={btnType}>
                {text}
            </button>
        </>
    )
}

export default Button