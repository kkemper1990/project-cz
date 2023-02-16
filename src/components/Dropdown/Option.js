const Option = (props) => {
    const clickHandler = () => {
        props.onClick({name: props.name, value: props.value})
    }

    return (
        <li className="optionContainer-option" onClick={clickHandler} aria-label={props.name} aria-required="true">
            {props.name}
        </li>
    )
}

export default Option;