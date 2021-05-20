import React from 'react';
import MenuSearch from '../../components/Menu/MenuSearch'
import './SearchListing.css'; // Estava 'SearchiListing', mudei para 'SearchListing'
import useWindowDimensions from "../../components/WindowsDimension/useWindowDimensions";


function SearchiListing() {
    const { width } = useWindowDimensions();
    const platform = width > 1000 ? "Desktop" : "Mobile";
    return (
        <div className="searchListingBackground">
            <MenuSearch />
            <div className={"searchListing searchListing" + platform}>
                <div className={"searchListingDiv" + platform}>
                    <span className={"searchListingTitle searchListingTitle" + platform}>Buscas realizadas</span>
                </div>
                <table className={"listing listing" + platform}>
                    <th className="listingTop">
                        <tr className={"listingTitleHastag listingTitle" + platform}>Hashtag</tr>
                        <tr className={"listingTitleDate listingTitle" + platform}>Data</tr>
                        <tr className={"listingTitleHour listingTitle" + platform}>Hora</tr>
                    </th>
                    <td className="listingLine">
                        <tr className={"listingObjectHastag listingObject" + platform}>#hashtagname</tr>
                        <tr className={"listingObjectDate listingObject" + platform}>25/02</tr>
                        <tr className={"listingObjectHour listingObject" + platform}>09:30</tr>
                    </td>
                    <td className="listingLine">
                        <tr className={"listingObjectHastag listingObject" + platform}>#hashtagname</tr>
                        <tr className={"listingObjectDate listingObject" + platform}>25/02</tr>
                        <tr className={"listingObjectHour listingObject" + platform}>09:30</tr>
                    </td>
                    <td className="listingLine">
                        <tr className={"listingObjectHastag listingObject" + platform}>#hashtagname</tr>
                        <tr className={"listingObjectDate listingObject" + platform}>25/02</tr>
                        <tr className={"listingObjectHour listingObject" + platform}>09:30</tr>
                    </td>
                </table>
            </div>
        </div>
    );
}

export default SearchiListing;