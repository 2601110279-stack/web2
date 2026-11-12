import React, { useState } from "react";
import TemperatureInput from "./TemperatureInput";
import "./Calculator.css"; // CSS 파일 연결

function Calculator(props) {
    return (
        <div>
        <TemperatureInput scale={"c"}/>
        <TemperatureInput scale={"f"}/>
        </div>
    );
}

export default Calculator;