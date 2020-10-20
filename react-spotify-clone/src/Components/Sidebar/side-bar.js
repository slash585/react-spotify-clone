import React from 'react'
import './side-bar.css'
import SideBarOption from '../SideBarOption/side-bar-option'
import HomeIcon from '@material-ui/icons/Home'
import SearchIcon from '@material-ui/icons/Search'
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic'
import { useDataLayerValue } from '../../data-layer'

function SideBar() {
    const [{ playlists }, dispatch] = useDataLayerValue();
    console.log("playlist:",playlists)

    return (
        <div className="sidebar">
            <img className="sidebar-logo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="spotify-logo" />
            <SideBarOption Icon={HomeIcon} title={"Home"} />
            <SideBarOption Icon={SearchIcon} title={"Search"} />
            <SideBarOption Icon={LibraryMusicIcon} title={"Your Library"} />

            <br />
            <strong className="sidebar-title">PLAYLISTS</strong>
            <hr />

            {playlists?.items?.map((playlist)=>(
                <SideBarOption key={playlist.key} title={playlist.name}/>
            ))}



        </div>
    )
}

export default SideBar
