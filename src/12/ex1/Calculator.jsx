import React, { useState } from "react";
import Boilingverdict from "./Boilingverdict";
import "./Calculator.css"; // CSS 파일 연결

function Calculator(props) {
    const [temperature, setTemperature] = useState('');

    const handleChange = (event) => {
        setTemperature(event.target.value);
    }

    return (
        <fieldset>
            <legend>섭씨 온도를 입력하세요:</legend>
            <input
                value={temperature}
                onChange={handleChange}/>
            <Boilingverdict
                celsius={parseFloat(temperature)} />
        </fieldset>
    )
}

export default Calculator;