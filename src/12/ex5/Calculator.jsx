import React, { useState } from "react";
import TemperatureInput from "./TemperatureInput";
import "./Calculator.css"; // CSS 파일 연결

function Calculator(props) {
    const [temperature, setTemperature] = useState('');
    const [scale, setScale] = useState("c");

    const handlekilometerChange = (temperature) => {
        setTemperature(temperature);
        setScale("k");
    }

    const handlemileChange = (temperature) => {
        setTemperature(temperature);
        setScale("m");
    }

    const kilometer = scale === "m" ? tryConvert(temperature, tokilometer) : temperature;
    const mile = scale === "k" ? tryConvert(temperature, tomile) : temperature;

    return (
        <div>
            <TemperatureInput
                scale={"k"}
                temperature={kilometer}
                onTemperatureChange={handlekilometerChange}
            />
            <TemperatureInput
                scale={"m"}
                temperature={mile}
                onTemperatureChange={handlemileChange}
            />
            <p>{kilometer}km는 {mile}마일입니다.</p>
        </div>
    );
}

function tokilometer(mile) {
    return mile * 1.609344;
}

function tomile(kilometer) {
    return kilometer * 0.621371;
}

function tryConvert (temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)){
        return "";
    }

    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();


}

export default Calculator;