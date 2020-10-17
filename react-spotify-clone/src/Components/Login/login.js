import React from 'react'
import './login.css'
import {accessUrl} from '../../spotify'

function Login() {
    return (
        <div className="login">
            <h2>Im login page</h2>
            <img src="https://ambientmusicguide.com/wp-content/uploads/2018/11/spotify-banner.png" alt="spotify-logo" />            
            <a href={accessUrl}>LOGIN WITH SPOTIFY</a>

        </div>
    )
}

export default Login
