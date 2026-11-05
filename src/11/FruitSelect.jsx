import React, { useState } from "react";
import "./FruitSelect.css"; // CSS 파일 불러오기

function FruitSelect() {
    // 화면의 기본 선택값과 일치하도록 초기값을 'apple'로 설정합니다.
    const [value, setValue] = useState('apple');

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const handleSubmit = (event) => {
        alert('선택한 과일 : ' + value);
        event.preventDefault();
    }

    return (
        <form className="fruit-form-container" onSubmit={handleSubmit}>
            <label className="fruit-label">
                <span className="label-text">과일을 선택하세요 :</span>
                <select className="fruit-select" value={value} onChange={handleChange}>
                    <option value="apple">사과</option>
                    <option value="banana">바나나</option>
                    <option value="grapes">포도</option>
                    <option value="melon">참외</option>
                </select>
            </label>
            <button className="fruit-submit-btn" type="submit">제출</button>
        </form>
    );
}

export default FruitSelect;