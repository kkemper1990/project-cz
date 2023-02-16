import { useEffect, useState } from "react";
import Option from "./Option";

const Options = (props) => {
    const [data, setData] = useState([]);

    const clickHandler = (value) => {
        props.optionSelect(value);
    }

    useEffect(() => {
        setData(props.data);
    }, [props]);

    return (
        <div className={`optionContainer ${props.clicked ? 'clicked' : ''}`}style={{visibility: props.visibility === true ? 'visible' : 'hidden', display: props.visibility === true ? 'block' : 'none'}}>
            {data.map((item, index) => (
                <Option key={index} name={item.name} value={item.value} onClick={clickHandler} positioned={index === props.position ? true : false} />
            ))}
        </div>
    )
}

export default Options;