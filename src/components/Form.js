import Dropdown from "./Dropdown/Dropdown";
import data from '../data/mockdata.json';
import ClearButton from "./ClearButton";
import { useRef, useState } from "react";

const Form = () => {
    const [clearValue, setClearValue] = useState(false);

    const changeHandler = (e) => {
        setClearValue(true);
    }

    return (
        <div className="form">
            <Dropdown placeholder="Choose an animal" options={data} value={data[1]} onChange={(e) => console.log(e)} clearValue={clearValue} cleared={(value) => value === true ? setClearValue(false) : null} />
            <ClearButton onClick={changeHandler} />
        </div>
    )
}

export default Form;