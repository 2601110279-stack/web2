import React, { useState } from "react";
import WarningBanner from "./WarningBanner";
import "./MainPage.css"; // CSS 파일 불러오기

function MainPage() {
    const [showWarning, setShowWarning] = useState(false);

    const handleToggleClick = () => {
        setShowWarning(prevShowWarning => !prevShowWarning);
    }

    return (
        <div className="page-container">
            {/* WarningBanner 컴포넌트에 warning 상태 전달 */}
            <WarningBanner warning={showWarning} />

            <button className="toggle-btn" onClick={handleToggleClick}>
                {showWarning ? '감추기' : '보이기'}
            </button>
        </div>
    );
}

export default MainPage;