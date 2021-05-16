import React from 'react';
import "./Search.css"
import useWindowDimensions from "../WindowsDimension/useWindowDimensions"


function Search() {
    const {width} = useWindowDimensions();
    const platform =  width>1000 ? "Desktop" : "Mobile";
    return (
        <div className={"searchBackground searchBackground"+platform}>
            <input type="search" placeholder="Buscar..." className={"search search"+platform}/>
        </div>
    );
};

export default Search;