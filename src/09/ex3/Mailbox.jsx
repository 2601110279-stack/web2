import React from "react";
import "./Mailbox.css"; // CSS 파일 불러오기

function Mailbox(props) {
    const unreadMessage = 3;

    return (
        <div className="mailbox-container">
            <h1 className="mailbox-greeting">안녕하세요!</h1>

            {unreadMessage > 0 && (
                <h2 className="mailbox-notification">
                    현재 <span className="unread-count">{unreadMessage}</span>개의
                    읽지 않은 메세지가 있습니다.
                </h2>
            )}
        </div>
    );
}

export default Mailbox;