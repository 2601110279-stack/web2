import React from "react";

function Toolbar(props) {
    const { isLoggedIn, loginClick, logoutClick } = props;

    return (
        <div className="toolbar-container">
            {isLoggedIn ? (
                <span className="toolbar-greeting">환영합니다!</span>
            ) : (
                <span className="toolbar-greeting">로그인 해주세요.</span>
            )}

            {isLoggedIn ? (
                <button className="toolbar-btn logout" onClick={logoutClick}>로그아웃</button>
            ) : (
                <button className="toolbar-btn login" onClick={loginClick}>로그인</button>
            )}
        </div>
    );
}

export default Toolbar;