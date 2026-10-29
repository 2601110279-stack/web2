import React, { useState } from "react";
import Toolbar from "./Toolbar";
import "./LandingPage.css"; // CSS 파일 불러오기

function LandingPage() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const loginClick = () => {
        setIsLoggedIn(true);
    };

    const logoutClick = () => {
        setIsLoggedIn(false);
    };

    return (
        <div className="landing-container">
            <Toolbar
                isLoggedIn={isLoggedIn}
                loginClick={loginClick}
                logoutClick={logoutClick}
            />

            <hr className="divider" width="50%" />

            <div className="content-area">
                9장 조건부 렌더링 실습 화면입니다.
                <br/>
            </div>
        </div>
    );
}

export default LandingPage;