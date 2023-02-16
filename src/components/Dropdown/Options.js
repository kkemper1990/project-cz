const Options = (props) => {
    return (
        <div className="optionContainer" style={{visibility: props.visibility === true ? 'visible' : 'hidden'}}>
            <div className="optionContainer-option">hoi</div>
            <div className="optionContainer-option">hoi</div>
        </div>
    )
}

export default Options;