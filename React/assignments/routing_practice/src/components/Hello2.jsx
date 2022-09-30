import React from "react";
import {useParams} from "react-router";

const Hello2 = (props) => {
    const {word} = useParams()
    const {bgColor} = useParams()
    const {fontColor} = useParams()

    return (
        // isNaN(word) ?
            <h1 style={{ color: fontColor, backgroundColor: bgColor }}>The word is: {word}</h1>
            // :
            // <h1>The number is: {word}</h1>
    )
}

export default Hello2;