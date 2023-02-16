import {useEffect, useState} from "react";
import Options from "./Options";

const DropDown = (props) => {
    const [isOpen, setIsOpen] = useState(true);
    const [selectedOption, setSelectedOption] = useState({name: '', value: ''});

    const clickHandler = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div class="dropDownContainer" onClick={clickHandler}>
            <div class={`dropDownContainer-selector ${isOpen ? 'clicked' : ''}`}>
                Dropdown!
                <div className="dropDownContainer-selector-arrow">
                    <img src="/arrow-down.svg" />
                </div>
            </div>
            <Options visibility={isOpen} />
        </div>
    )
}

export default DropDown;