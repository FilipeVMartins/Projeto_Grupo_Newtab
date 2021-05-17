import React from 'react';
import ImageButtonAbout from "./icon/icon-info-circle.svg";
import "./ButtonPink.css"
import useWindowDimensions from "../../WindowsDimension/useWindowDimensions"
import { Link } from 'react-router-dom';

function ButtonAbout() {
    const { width } = useWindowDimensions();
    const platform = width > 1000 ? "Desktop" : "Mobile";

    return (
        <Link to="/pages/About/About">
            <button className={"buttonMenuPink buttonMenu" + platform}>
                <img className={"imgButtonMenu imgButtonMenu" + platform} alt="About" src={ImageButtonAbout} />
                <label>Sobre</label>
            </button>
        </Link>
    )

};

export default ButtonAbout;