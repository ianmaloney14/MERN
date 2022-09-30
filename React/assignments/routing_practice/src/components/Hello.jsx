import React from "react";
import {useParams} from "react-router";

const Hello = (props) => {
    const {word} = useParams()

    return (
        <div>The word is: {word}</div>
    )
}

export default Hello;