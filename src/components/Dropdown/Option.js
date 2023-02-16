const Option = (props) => {
    const clickHandler = () => {
        props.onClick({name: props.name, value: props.value})
    }

    return (
        <div className="optionContainer-option" onClick={clickHandler}>
            {props.name}
        </div>
    )
}

export default Option;