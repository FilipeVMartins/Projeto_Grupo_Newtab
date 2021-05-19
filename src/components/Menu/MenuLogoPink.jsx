import React from 'react';
import ImageLogo from "./img/logo-pink.svg";
import ButtonAbout from "./Button/ButtonAbout";
import ButtonLogin from "./Button/ButtonLogin";
import useWindowDimensions from "../WindowsDimension/useWindowDimensions"
import "./Menu.css";
import "./MenuFixed.css";

function MenuLogoPink() {
    const { width } = useWindowDimensions();
    const platform = width > 1000 ? "Desktop" : "Mobile";
    return (
        <div className={"menuBackground menuBackgroundPink"} id='menuBackgroundPink'>
            <div className={"logo" + platform}>
                <img id={"logo" + platform} src={ImageLogo} alt="" />
            </div>
            <div className={"menuButtons" + platform}>
                <ButtonAbout/>
                <ButtonLogin/>
            </div>
        </div>
    )

};

export default MenuLogoPink;