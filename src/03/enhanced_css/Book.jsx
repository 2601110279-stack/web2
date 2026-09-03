import React from "react";

function Book(props) {
    return(
        <div className="book-card">
            <img src={props.imgUrl} className="book-cover" />
            <h1>{props.name}</h1>
            <h2>작가 : {props.writer}</h2>

        </div>
    );
}

export default Book;