import React from "react";
import Book from "./Book";

function Library() {
    return(
        <div>
            <Book name="봇치·더·록! 1"  imgUrl="https://image.yes24.com/goods/113753714/XL" writer="하마지 아키" />
            <Book name="봇치·더·록! 2"  imgUrl="https://image.yes24.com/goods/115027487/XL" writer="하마지 아키" />
            <Book name="먼작귀 2권"  imgUrl="https://image.yes24.com/goods/112029435/XL"  writer="나가노" />
            <Book name="연인 이상 친구 미만 2권"  imgUrl="https://image.yes24.com/goods/141220949/XL" writer="yatoyato" />
            <Book name="먼작귀 5권"  imgUrl="https://image.yes24.com/goods/124908853/XL" writer="나가노" />
        </div>
    );
}

export default Library;