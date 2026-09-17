import React from "react";
import Welcome from "./Welcome";
import './Welcome.css';

function WelcomeList(){
    return(
        <div className="notebook-container">
            <Welcome name="퉁퉁이"/><br/>
            <Welcome name="비실이"/><br/>
            <Welcome name="노진구"/><br/>
        </div>
    );
}

export default WelcomeList;