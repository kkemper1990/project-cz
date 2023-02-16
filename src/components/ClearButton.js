const ClearButton = (props) => {
    const clickHandler = (e) => {
        props.onClick(e)
    }

    return (
        <div className="clearbutton" onClick={clickHandler}>
            Clear input
        </div>
    )
}

export default ClearButton;