import React from 'react'
import './header.css'
import SearchIcon from '@material-ui/icons/Search'
import { Avatar } from '@material-ui/core'
import { useDataLayerValue } from '../../data-layer'

function Header() {
    const [{ user }, dispatch] = useDataLayerValue();
    return (
        <div className="header">
            <div className="header-left">
                <SearchIcon />
                <input
                    type="text"
                    placeholder="Search for Artist, Songs, Albums" />

            </div>
            <div className="header-right">
                <Avatar src={user?.images[0]?.url} alt="mehmet-ali" />
                <h4>{user?.display_name}</h4>

            </div>
        </div>
    )
}

export default Header
