import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './Components/Login/login';
import {getTokenFromResponse} from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';

const spotify = new SpotifyWebApi();

function App() {
  const [token,setToken] = useState(null);

  useEffect(()=>{
    const hash = getTokenFromResponse();
    window.location.hash ="";

    let _token = hash.access_token;

    if(_token){
      setToken(_token)

      spotify.setAccessToken(_token);

      spotify.getMe().then(user =>{
        console.log('Kullanıcı:',user)
      });

    }
    console.log("i have a token",token)
  },[]);


  return (
    <div className="app">
      
      {
        token ? (
          <h1>Hoşgeldiniz</h1>
        ):
        (
          <Login/>
        )
      }

      


    </div>
  );
}

export default App;
