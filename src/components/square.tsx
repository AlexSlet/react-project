import { useState } from "react";

export default function Square ({value, onSquareClick}: {value: string, onSquareClick: Function}) {
    function handleClick() {
        onSquareClick()
    }

    return <button className="square" onClick={handleClick}>{value}</button>
}