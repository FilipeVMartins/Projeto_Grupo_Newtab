import React from 'react';
import ImageLogo from "./img/logo-white.svg";
import ButtonHome from "./Button/ButtonHome";
import ButtonExit from "./Button/ButtonExit";
import useWindowDimensions from "../WindowsDimension/useWindowDimensions"
import "./Menu.css";

function MenuSearch() {
    const { width } = useWindowDimensions();
    const platform = width > 1000 ? "Desktop" : "Mobile";
    return (
        <div className={"menuBackground"}>
            <div className={"logo" + platform}>
                <img id={"logo" + platform} src={ImageLogo} alt="" />
            </div>
            <div className={"menuButtons" + platform}>
                <ButtonHome/>
                <ButtonExit/>
            </div>
        </div>
    )

};

export default MenuSearch;