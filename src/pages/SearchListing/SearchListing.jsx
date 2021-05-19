import React from 'react';
import MenuSearch from '../../components/Menu/MenuSearch'
import './SearchiListing.css';
import useWindowDimensions from "../../components/WindowsDimension/useWindowDimensions";


function SearchiListing() {
    const { width } = useWindowDimensions();
    const platform = width > 1000 ? "Desktop" : "Mobile";
    return (
        <div className="searchListingBackground">
            <MenuSearch />
            <div className={"searchListing searchListing" + platform}>
                <div>
                <span className={"searchListingTitle searchListingTitle" + platform}>Buscas realizadas</span>
                <div className={"listing listing" + platform}>
                    <div className="listingTop">
                        <div className={"listingTitleHastag listingTitle" + platform}>Hashtag</div>
                        <div className={"listingTitleDate listingTitle" + platform}>Data</div>
                        <div className={"listingTitleHour listingTitle" + platform}>Hora</div>
                    </div>
                    <div className="listingLine">
                        <div className={"listingObjectHastag listingObject" + platform}>#hashtagname</div>
                        <div className={"listingObjectDate listingObject" + platform}>25/02</div>
                        <div className={"listingObjectHour listingObject" + platform}>09:30</div>
                    </div>
                    <div className="listingLine">
                        <div className={"listingObjectHastag listingObject" + platform}>#hashtagname</div>
                        <div className={"listingObjectDate listingObject" + platform}>25/02</div>
                        <div className={"listingObjectHour listingObject" + platform}>09:30</div>
                    </div>
                    <div className="listingLine">
                        <div className={"listingObjectHastag listingObject" + platform}>#hashtagname</div>
                        <div className={"listingObjectDate listingObject" + platform}>25/02</div>
                        <div className={"listingObjectHour listingObject" + platform}>09:30</div>
                    </div>
                    <div className="listingLast">
                    </div>
                </div> 
                </div>
            </div>
        </div>
    );
}

export default SearchiListing;