import {useEffect, useState} from "react";
import Options from "./Options";

const DropDown = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState({name: '', value: ''});
    const [position, setPosition] = useState(-1);

    const clickHandler = () => {
        setIsOpen((!isOpen));
    }

    const keyPressHandler = () => {
        console.log(position)
        if(isOpen && position !== -1){
            setSelectedOption(props.options[position]);
        }
        setIsOpen((currentOpen => !currentOpen));
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

    // when the clearvalue functionality is active, clear the value
    useEffect(() => {
        if(props.clearValue === true){
            setSelectedOption({name: '', value: ''});
            props.cleared(true);
        }
    }, [props.clearValue])

    // create a new change event
    useEffect(() => {
        if(selectedOption.name !== '' && selectedOption.name !== props.value.name){
            var event = new Event('change');
            Object.defineProperty(event, 'target', {writable: false, value: 'dropdown'});
            props.onChange(event)
        }
    }, [selectedOption])

    // if value prop is filled, select it
    useEffect(() => {
        if(props.value !== undefined) {
            setSelectedOption(props.value);
        }
    }, [props.value])

    useEffect(()=> {
        console.log(isOpen)
    }, [isOpen]);

    // create event listeners for click on document and enter keypress
    useEffect(() => {
        window.addEventListener('click', clickListener);
        window.addEventListener("keypress", function(event) {
            // If the user presses the "Enter" key on the keyboard
            if (event.key === "Enter") {
              // Cancel the default action, if needed
              event.preventDefault();
              event.stopImmediatePropagation();

              // Trigger the element with a click
              keyPressHandler();
            }
          });
    }, [])

    document.onkeydown = (e) => {
        e = e || window.event;
        if (e.keyCode === 40 && position >= -1 && position < props.options.length - 1 && isOpen) {
            setPosition(position + 1);
        } else if (e.keyCode === 38 && position <= props.options.length - 1 && position > 0 && isOpen) {
            setPosition(position - 1);
        }
    }

    return (
        <ul className="dropDownContainer" onClick={clickHandler} autoFocus aria-label={props.placeholder} aria-required="true">
            <div className={`dropDownContainer-selector ${isOpen ? 'clicked ' : ' '} ${selectedOption.name !== undefined && selectedOption.name !== null && selectedOption.name !== '' ? 'selected' : ''}`}>
                {selectedOption.name === '' ? (props.placeholder !== undefined ? props.placeholder : 'Dropdown!') : selectedOption.name}
                <div className="dropDownContainer-selector-arrow">
                    <img src="/arrow-down.svg" />
                </div>
            </div>
            <Options visibility={isOpen} clicked={isOpen} optionSelect={optionSelectHandler} data={props.options} position={position} />
        </ul>
    )
}

export default DropDown;