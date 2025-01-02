import './Button.css'

function Button({text, btnType, type, onClick, disabled}) {
    return (
        <button type={type} className={btnType} onClick={onClick} disabled={disabled}>
            {text}
        </button>
    )
}

export default Button