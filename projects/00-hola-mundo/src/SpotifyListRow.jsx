import React from "react";
import ReactPropTypesfrom from "react";

export function SpotifyListRow({ imgUrl, nameSong, artistName, songTime}){
    return (
        <div className="sp-list-row">
            <div className="sp-list-row-song">
            <img className="sp-list-row-img" src={imgUrl} alt="Album de cover"/>
            <div className="sp-list-row-data">
                <p className="sp-list-row-name">{nameSong}</p>
                <p className="sp-list-row-artist">{artistName}</p>
            </div>
            </div>
            <p className="sp-list-row-time">{songTime}</p>
        </div>
    )
}