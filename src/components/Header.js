import React from "react";
import "../styles/Header.css";



function Header() {
    return (
        <header>
            <div className="header-text">
                <h1>Employee Directory</h1>
                <h2>Click the down arrows to filter employees or use search box to narrow your results. </h2>
            </div>
        </header>

    )
}


export default Header;