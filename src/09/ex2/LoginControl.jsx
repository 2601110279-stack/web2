import React, { useState } from "react";
import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";
import Greeting from "../ex1/Greeting";
import "./LoginControl.css"; // CSS 파일 import

function LoginControl(props)  {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const logInClickListener = () => {
        setIsLoggedIn(true);
    }

    const logOutClickListener = () => {
        setIsLoggedIn(false);
    }

    let button;

    if (isLoggedIn) {
        // LogoutButton 내부의 <button> 태그에 이 className이 적용되어야 합니다.
        button = <LogoutButton onClick={logOutClickListener} className="btn-logout" />
    } else {
        // LoginButton 내부의 <button> 태그에 이 className이 적용되어야 합니다.
        button = <LoginButton onClick={logInClickListener} className="btn-login" />
    }

    return (
        <div className="login-container">
            <Greeting isLoggedIn={isLoggedIn} />
            {button}
        </div>
    );
}

export default LoginControl;