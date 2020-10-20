import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './Components/Login/login';
import {getTokenFromResponse} from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Components/Player/player';
import {useDataLayerValue} from './data-layer'

const spotify = new SpotifyWebApi();

function App() {
  const [{user,token},dispatch] = useDataLayerValue();

  useEffect(()=>{
    const hash = getTokenFromResponse();
    window.location.hash ="";

    let _token = hash.access_token;

    if(_token){

      dispatch({
        type:"SET_TOKEN",
        token:_token
      })


      

      spotify.setAccessToken(_token);

      spotify.getMe().then(user =>{
        dispatch({
          type:'SET_USER',
          user: user
        })
      });

      spotify.getUserPlaylists().then((playlists)=>{
        dispatch({
          type:"SET_PLAYLISTS",
          playlists
        })
      })

    }
    
  },[token,dispatch]);

  return (
    <div className="app">
      
      {!token && <Login/>}
      {token && <Player spotify={spotify}/>}

      


    </div>
  );
}

export default App;
