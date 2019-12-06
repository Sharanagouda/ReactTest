import React from "react";
import Logo from "./../../assets/images/logo192.png";
import "./styles.scss";

const Header = (props) => {
    return(
    <header>
        <div className="wrap">
            <div className="logo">
                <img src={Logo} alt="Logo"/>
            </div>
        </div>
    </header>)
}

export default Header;