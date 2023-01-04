const Button = ({ text, styleButton, typeB }) => {
    return (<button className={styleButton} type={typeB}>{text}</button>);
}

export default Button;