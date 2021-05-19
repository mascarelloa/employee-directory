import React from "react";

const style = {
    header: {
        background: "#111111",
        height: "175px",
        textAlign: "center"
    },

    h1: {
        color: "#ffffff",
    },

    h2: {
        color: "#aaaaaa",
        fontSize: "16px"
    }
}

function Header() {
    return (
        <header style={style.header}>
            <h1 style={style.h1}>Employee Directory</h1>
            <h2 style={style.h2}>Click the down arrows to filter employees or use search box to narrow your results. </h2>
        </header>
    )
}


export default Header;