import React from 'react';
import ImageLogo from "./img/logo-white.svg";
import ButtonAbout from "./Button/ButtonAbout";
import ButtonLogin from "./Button/ButtonLogin";
import useWindowDimensions from "../WindowsDimension/useWindowDimensions"
import "./Menu.css";

function MenuLogoWhite() {
    const { width } = useWindowDimensions();
    const platform = width > 1000 ? "Desktop" : "Mobile";
    return (
        <div className={"menuBackground"}>
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

export default MenuLogoWhite;