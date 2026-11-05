import React from "react";
import "./Reservation.css"; // CSS 파일 불러오기

function Reservation() {
    const [haveBreakfast, setHaveBreakfast] = React.useState(true);
    const [numberOfGuest, setNumberOfGuest] = React.useState(1);

    const handleSubmit = (event) => {
        alert(`아침식사 여부 : ${haveBreakfast}, 방문객 수 : ${numberOfGuest}`);
        event.preventDefault();
    }

    return (
        <form className="reservation-form" onSubmit={handleSubmit}>
            <h2 className="reservation-title">예약 정보 입력</h2>

            <div className="input-group">
                <label className="reservation-label">
                    <span className="label-text">아침식사 여부 :</span>
                    <input
                        type="checkbox"
                        className="reservation-checkbox"
                        checked={haveBreakfast}
                        onChange={(event) => {
                            setHaveBreakfast(event.target.checked);
                        }}
                    />
                </label>
            </div>

            <div className="input-group">
                <label className="reservation-label">
                    <span className="label-text">방문자 수 :</span>
                    <input
                        type="number"
                        className="reservation-input"
                        value={numberOfGuest}
                        min="1"
                        onChange={(event) => {
                            setNumberOfGuest(event.target.value);
                        }}
                    />
                </label>
            </div>

            <button className="reservation-btn" type="submit">제출</button>
        </form>
    );
}

export default Reservation;