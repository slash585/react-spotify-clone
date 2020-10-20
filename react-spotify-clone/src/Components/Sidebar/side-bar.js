import React from 'react'
import './side-bar.css'
import SideBarOption from '../SideBarOption/side-bar-option'
import HomeIcon from '@material-ui/icons/Home'
import SearchIcon from '@material-ui/icons/Search'
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic'

function SideBar() {
    return (
        <div className="sidebar">
            <img className="sidebar-logo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="spotify-logo"/>
            <SideBarOption Icon={HomeIcon} title={"Home"} />
            <SideBarOption Icon={SearchIcon} title={"Search"} />
            <SideBarOption Icon={LibraryMusicIcon} title={"Your Library"} />

            <br/>
            <strong className="sidebar-title">PLAYLISTS</strong>
            <hr/>

            <SideBarOption title="Rock"/>
            <SideBarOption title="Hip Hop"/>
            <SideBarOption title="RnB"/>


        </div>
    )
}

export default SideBar
