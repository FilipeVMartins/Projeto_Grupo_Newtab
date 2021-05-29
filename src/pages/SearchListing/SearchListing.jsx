import React, { useState, useEffect } from 'react';
import MenuSearch from '../../components/Menu/MenuSearch'
import './SearchListing.css'; // Estava 'SearchiListing', mudei para 'SearchListing'
import useWindowDimensions from "../../components/WindowsDimension/useWindowDimensions";
import Axios from 'axios';
import NavMenu from '../../components/Menu/NavMenu';



function SearchListing() {
    
    const { width } = useWindowDimensions();
    const platform = width > 1000 ? "Desktop" : "Mobile";

    const [data, setData] = useState([]);

    useEffect(() => {

         fetch("https://api.airtable.com/v0/app6wQWfM6eJngkD4/tbl4mrtX1Owvos7eB?filterByFormula=(%7BSquad%7D%3D1)&pageSize=10&sort%5B0%5D%5Bfield%5D=Data&sort%5B0%5D%5Bdirection%5D=desc&sort%5B1%5D%5Bfield%5D=Hora&sort%5B1%5D%5Bdirection%5D=desc&timeZone=America/Sao_Paulo&view=Grid%20view&api_key=key2CwkHb0CKumjuM&offset")
             .then(result => result.json())
             .then(data => {
                 setData(data.records);
                 console.log(data.records);
                })
    },[]);



    return (
        <div className="searchListingBackground">
            {/* <MenuSearch /> */}
            <div className="searchListing-nav" >
                <NavMenu headerHeightMobile={5.875} headerHeightDesktop={7.5593}/>
            </div>
            <div className={"searchListing searchListing" + platform}>
                <div className={"searchListingDiv" + platform}>
                    <span className={"searchListingTitle searchListingTitle" + platform}>Buscas realizadas</span>
                </div>

                <table className={"listing listing" + platform}>
                    <thead>
                        <tr className="listingTop">
                            <th className={"listingTitleHastag listingTitle" + platform}>Hashtag</th>
                            <th className={"listingTitleDate listingTitle" + platform}>Data</th>
                            <th className={"listingTitleHour listingTitle" + platform}>Hora</th>
                        </tr>
                    </thead>
                    <tbody>                        
                            {data.map(
                                item =>
                                (

                                    <tr className="listingLine" key={item.id}>
                                        <td className={"listingObjectHastag listingObject" + platform}>{item.fields.Hashtag}</td>
                                        <td className={"listingObjectDate listingObject" + platform}>{item.fields.Data}</td>
                                        <td className={"listingObjectHour listingObject" + platform}>{item.fields.Hora}</td>
                                    </tr>

                                ))}
                    </tbody>
                </table>

            </div>
        </div>
    );
}

export default SearchListing;