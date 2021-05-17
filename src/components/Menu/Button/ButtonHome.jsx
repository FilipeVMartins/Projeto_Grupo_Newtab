import React from 'react';
import ImageButtonHome from "./icon/icon-home.svg";
import "./ButtonPink.css"
import useWindowDimensions from "../../WindowsDimension/useWindowDimensions"
import { Link } from 'react-router-dom';

function ButtonHome() {
    const { width } = useWindowDimensions();
    const platform = width > 1000 ? "Desktop" : "Mobile";

    return (
        <Link to="/pages/Home/Home">
            <button className={"buttonMenuPink buttonMenu" + platform}>
                <img className={"imgButtonMenu imgButtonMenu" + platform} alt="Home" src={ImageButtonHome} />
                <label>Home</label>
            </button>
        </Link>
    )

};

export default ButtonHome;