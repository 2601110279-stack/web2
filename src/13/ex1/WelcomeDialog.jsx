import React from "react";
import FancyBorder from "./FancyBorder";

function WelcomeDialog(props) {
    return(
        <div>
        <FancyBorder color="blue">
            <h1 className="Dialog-title">
                어서오세요
            </h1>
            <p className="Dialog-description">
                우리 사이트에 방문하신 것을 환영합니다!
            </p>
        </FancyBorder>

            <FancyBorder color="green">
                <h1 className="Dialog-title">
                    공지사항
                </h1>
                <p className="Dialog-description">
                    새로운 기능 업데이트가 완료되었습니다.
                </p>
            </FancyBorder>
        </div>
    );
}
export default WelcomeDialog;