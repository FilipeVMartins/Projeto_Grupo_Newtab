import React from 'react';
import "./Footer.css";
import useWindowDimensions from "../WindowsDimension/useWindowDimensions"


function Footer(){
    const {width} = useWindowDimensions();
    const platform =  width>1000 ? "Desktop" : "Mobile";
    return(
        <div className="footerBackground">
            <span className={"footerText footerText"+platform}>
            @Cocreare 2021. Todos os direitos reservados
            </span>
        </div>
    )
}
export default Footer;