import React from 'react';
import ImageButtonExit from "./icon/icon-power-off.svg";
import "./ButtonBlue.css"
import useWindowDimensions from "../../WindowsDimension/useWindowDimensions"
import { Link } from 'react-router-dom';

function ButtonExit() {
    const { width } = useWindowDimensions();
    const platform = width > 1000 ? "Desktop" : "Mobile";

    return (
        <Link to="/pages/Home/Home">
            <button className={"buttonMenuBlue buttonMenu" + platform}>
                <img className={"imgButtonMenu imgButtonMenu" + platform} alt="Exit" src={ImageButtonExit} />
                <label>Sair</label>
            </button>
        </Link>
    )

};

export default ButtonExit;