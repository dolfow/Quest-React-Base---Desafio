import './button.css'

const sayAlert = () => {
    alert(`A label desse botão é ${Button.defaultProps.label}`);
    
}


const Button = ({label}) => {
    return <button className='btn' onClick={sayAlert}>{label}</button>
}

Button.defaultProps = {
    label: "Baixar CV"
}



export default Button