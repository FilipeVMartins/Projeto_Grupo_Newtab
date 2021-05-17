import React from 'react';
import "./Hero.css";
import useWindowDimensions from "../WindowsDimension/useWindowDimensions";
import MenuLogoWhite from "../Menu/MenuLogoWhite";
import SearchBar from "../SearchBar/SearchBar";

function Hero() {
    const { width } = useWindowDimensions();
    const platform = width > 1000 ? "Desktop" : "Mobile";
    return (
        <div className={"heroBackground" + platform}>
            <MenuLogoWhite />
            <div className={"titleSubtitle" + platform}>
                <h1 id={"title" + platform}>Encontre hashtags de maneira fácil</h1>
                <h2 id={"subtitle" + platform}>Digite o que deseja no campo de buscas e confira os resultados do Twitter abaixo</h2>
            </div>
            <SearchBar />
        </div>
    );
};


export default Hero;