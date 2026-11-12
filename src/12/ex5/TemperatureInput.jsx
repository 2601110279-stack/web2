import React, { useState } from "react";

const scaleNames = {
    k: '킬로미터',
    m: '마일'
};

function TemperatureInput(props) {

    const handleChange = (event) => {
        props.onTemperatureChange(event.target.value);
    };

    return (
        <fieldset>
            <legend>단위를 입력하세요 (단위: {scaleNames[props.scale]}):</legend>
            <input
                value={props.temperature}
                onChange={handleChange}
            />
        </fieldset>
    );
}

export default TemperatureInput;