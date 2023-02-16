import {useEffect, useState} from "react";
import Options from "./Options";

const DropDown = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState({name: '', value: ''});

    const clickHandler = () => {
        setIsOpen(!isOpen);
    }

    const optionSelectHandler = (value) => {
        setSelectedOption(value)
    }

    // Close the dropdown menu when clicked outside of the menubox
    const clickListener = (event) => {
        const target = event.target.classList.contains("dropDownContainer-selector");
        if(!target) {
            setIsOpen(false);
        }
    }

    useEffect(() => {
        window.addEventListener('click', clickListener);
    }, [])

    return (
        <div className="dropDownContainer" onClick={clickHandler}>
            <div className={`dropDownContainer-selector ${isOpen ? 'clicked ' : ' '} ${selectedOption.name !== undefined && selectedOption.name !== null && selectedOption.name !== '' ? 'selected' : ''}`}>
                {selectedOption.name === '' ? (props.placeholder !== undefined ? props.placeholder : 'Dropdown!') : selectedOption.name}
                <div className="dropDownContainer-selector-arrow">
                    <img src="/arrow-down.svg" />
                </div>
            </div>
            <Options visibility={isOpen} clicked={isOpen} optionSelect={optionSelectHandler} data={props.data} />
        </div>
    )
}

export default DropDown;