import React from 'react';
import ImageButtonLogin from "./icon/icon-user-alt.svg";
import "./ButtonBlue.css"
import useWindowDimensions from "../../WindowsDimension/useWindowDimensions"
import { Link } from 'react-router-dom';

function ButtonLogin() {
    const { width } = useWindowDimensions();
    const platform = width > 1000 ? "Desktop" : "Mobile";

    return (
        <Link to="/pages/Login/Login">
        <button className={"buttonMenuBlue buttonMenu" + platform}>
            <img className={"imgButtonMenu imgButtonMenu" + platform} alt="Login" src={ImageButtonLogin} />
            <label>Login</label>
        </button>
        </Link>

    )

};

export default ButtonLogin;