import React, { useState } from "react";
import Boilingverdict from "./Boilingverdict";
import TemperatureInput from "./TemperatureInput";
import "./Calculator.css"; // CSS 파일 연결

function Calculator(props) {
    const [temperature, setTemperature] = useState('');
    const [scale, setScale] = useState("c");

    const handleCelsiusChange = (temperature) => {
        setTemperature(temperature);
        setScale("c");
    }

    const handleFahrenheitChange = (temperature) => {
        setTemperature(temperature);
        setScale("f");
    }

    const celsius = scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
        <div>
            <TemperatureInput
                scale={"c"}
            temperature={celsius}
                onTemperatureChange={handleCelsiusChange}
            />
            <TemperatureInput
                scale={"f"}
                temperature={fahrenheit}
                onTemperatureChange={handleFahrenheitChange}
            />
            <Boilingverdict celsius={parseFloat(celsius)} />
        </div>
    );
}

function toCelsius(fahrenheit) {
    return ((fahrenheit -32) * 5) / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
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