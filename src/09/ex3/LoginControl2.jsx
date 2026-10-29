import React, { useState } from "react";
import LogoutButton from "../ex2/LogoutButton";
import LoginButton from "../ex2/LoginButton";
import Greeting from "../ex1/Greeting";

function LoginControl2(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const logInClickListener = () => {
        setIsLoggedIn(true);
    };

    const logOutClickListener = () => {
        setIsLoggedIn(false);
    };

    let button;

    button = isLoggedIn ? (
        <LogoutButton onClick={logOutClickListener} className="btn-logout" />
    ) : (
        <LoginButton onClick={logInClickListener} className="btn-login" />
    );

    return (
        <div className="login-container">
            <Greeting isLoggedIn={isLoggedIn} />
            {button}
        </div>
    );
}

export default LoginControl2;