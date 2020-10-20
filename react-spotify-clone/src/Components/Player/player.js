import React from 'react'
import './player.css'
import SideBar from '../Sidebar/side-bar'
import Body from '../Body/body'
import Footer from '../Footer/footer'

function Player({ spotify }) {
    return (
        <div className="player">
            <div className="player-body">
                {/* Sidebar */}
                <SideBar/>
                {/* Body */}
                <Body/>
            </div>


            {/* Footer */}
            <Footer/>
        </div>
    )
}

export default Player
