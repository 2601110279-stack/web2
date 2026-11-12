import React from "react";

function Boilingverdict(props) {
    if (props.celsius >= 100) {
        return <p className="verdict boiling">🔥 물이 끓습니다.</p>;
    }
    return <p className="verdict not-boiling">💧 물이 끓지 않습니다.</p>;
}

export default Boilingverdict;