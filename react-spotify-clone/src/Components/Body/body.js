import React from 'react'
import './body.css'
import Header from '../Header/header'
import { useDataLayerValue } from '../../data-layer'
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from '../SongRow/song-row'


function Body({ spotify }) {
    const [{ discover_weekly }, dispatch] = useDataLayerValue();


    return (
        <div className="body">
            <Header spotify={spotify} />

            <div className="body-info">
                <img src={discover_weekly?.images[0].url} />
                <div className="body-info-text">
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>{discover_weekly?.description}</p>
                </div>
            </div>

            <div className="body-songs">
                <div className="body-icons">
                    <PlayCircleFilledIcon className="body-suffle" />
                    <FavoriteIcon fontSize="large" />
                    <MoreHorizIcon />
                </div>

                {discover_weekly?.tracks.items.map((item) => (
                    <SongRow  track={item.track} />
                ))}

            </div>

        </div>
    )
}

export default Body
