import React, {useState} from "react";

function Toggle2(props){
    const [isToggleOn, setIsToggleOn] = useState(true);

    // 방법 1. 함수 안에 함수로 정의
    //  function handleClick(){
    //     setIsToggleOn((isToggleOn) => !isToggleOn);
    //  }

    const handleClick = () => {
      setIsToggleOn((isToggleOn) => !isToggleOn);
   }

    return (
        <button onClick={handleClick}>
           Button {isToggleOn ? "켜짐" : "꺼짐"}
        </button>
    );
}

export default Toggle2;