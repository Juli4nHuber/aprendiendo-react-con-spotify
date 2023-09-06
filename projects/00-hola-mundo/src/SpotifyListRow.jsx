import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartSolid} from '@fortawesome/free-solid-svg-icons' ;
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
export function SpotifyListRow({ imgUrl, nameSong, artistName, songTime, initialIsLike }){
    const [isLike, setIsLike] = useState(initialIsLike);
    return (
        <div className="sp-list-row">
            <div className="sp-list-row-song">
                <img className="sp-list-row-img" src={imgUrl} alt="Album de cover"/>
                <div className="sp-list-row-data">
                    <p className="sp-list-row-name">{nameSong}</p>
                    <p className="sp-list-row-artist">{artistName}</p>
                </div>
            </div>
            <div className="sp-list-row-like-container">
                <FontAwesomeIcon className="sp-list-row-like" icon={ isLike ? faHeartSolid : faHeartRegular} onClick={() => setIsLike(!isLike)}/>
            </div>
            <p className="sp-list-row-time">{songTime}</p>
        </div>
    )
}