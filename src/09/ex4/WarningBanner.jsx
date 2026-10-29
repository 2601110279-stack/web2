import React from "react";

function WarningBanner(props) {
    // warning이 false면 아무것도 렌더링하지 않음 (null 반환)
    if (!props.warning) {
        return null;
    }

    return (
        <div className="warning-banner">
            경고: 문제가 발생했습니다!
        </div>
    );
}

export default WarningBanner;