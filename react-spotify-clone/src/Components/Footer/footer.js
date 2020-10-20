import React from 'react'
import './footer.css'
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import { Grid, Slider } from "@material-ui/core";



function Footer() {
    return (
        <div className="footer">
            <div className="footer-left">
                <img
                className="footer-album-logo" 
                 src="https://mir-s3-cdn-cf.behance.net/projects/404/3cb22f102092769.Y3JvcCw5OTksNzgyLDAsMTA4.png" 
                 alt=""/>
                <div className="footer-song-info">
                    <h4>Metallica</h4>
                    <p>Master of Puppets</p>
                </div>
            </div>

            <div className="footer-center">
                <ShuffleIcon className="footer-green"/>
                <SkipPreviousIcon className="footer-icon"/>
                <PlayCircleOutlineIcon fontSize="large" className="footer-icon"/>
                <SkipNextIcon className="footer-icon"/>
                <RepeatIcon className="footer-green"/>

            </div>

            <div className="footer-right">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon/>
                    </Grid>

                    <Grid item>
                        <VolumeDownIcon/>
                    </Grid>

                    <Grid item xs>
                        <Slider aria-labelledby="continuous-slider"/>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}



export default Footer
