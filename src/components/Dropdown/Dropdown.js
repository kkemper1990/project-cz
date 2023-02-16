import {useEffect, useState} from "react";

const DropDown = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState({name: '', value: ''});

    return (
        <div class="dropDownContainer">
            Dropdown!
            <div className="arrow">
                <img src="/arrow-down.svg" />
            </div>
        </div>
    )
}

export default DropDown;