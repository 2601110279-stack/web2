import React from "react";
import Dialog from "./Dialog";

function WelcomeDialog() {
    return (
        <div>
            <Dialog title={"Welcome to us"}
                    message={"Welcome to visit my site"}>
            </Dialog>
        </div>
    );
}

export default WelcomeDialog;