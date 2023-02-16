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
        if(props.clearValue === true){
            setSelectedOption({name: '', value: ''});
            props.cleared(true);
        }
    }, [props.clearValue])

    useEffect(() => {
        if(selectedOption.name !== '' && selectedOption.name !== props.value.name){
            var event = new Event('change');
            Object.defineProperty(event, 'target', {writable: false, value: 'dropdown'});
            props.onChange(event)
        }
    }, [selectedOption])

    useEffect(() => {
        if(props.value !== undefined) {
            setSelectedOption(props.value);
        }
    }, [props.value])

    useEffect(() => {
        window.addEventListener('click', clickListener);
        window.addEventListener("keypress", function(event) {
            // If the user presses the "Enter" key on the keyboard
            if (event.key === "Enter") {
              // Cancel the default action, if needed
              event.preventDefault();
              // Trigger the button element with a click
              setIsOpen(true);
            }
          });
    }, [])

    return (
        <ul className="dropDownContainer" onClick={clickHandler} autofocus>
            <div className={`dropDownContainer-selector ${isOpen ? 'clicked ' : ' '} ${selectedOption.name !== undefined && selectedOption.name !== null && selectedOption.name !== '' ? 'selected' : ''}`}>
                {selectedOption.name === '' ? (props.placeholder !== undefined ? props.placeholder : 'Dropdown!') : selectedOption.name}
                <div className="dropDownContainer-selector-arrow">
                    <img src="/arrow-down.svg" />
                </div>
            </div>
            <Options visibility={isOpen} clicked={isOpen} optionSelect={optionSelectHandler} data={props.options} />
        </ul>
    )
}

export default DropDown;