import React from 'react'

const website_url = "http://localhost:3000";
const AUTH_URL =
    "https://accounts.spotify.com/authorize?client_id=c358a6d11119494fb227b7e5aba6be5f&response_type=code&redirect_uri=" + website_url + "&show_dialog=true&scope=user-read-private%20user-read-email%20user-modify-playback-state%20user-read-playback-position%20user-library-read%20streaming%20user-read-playback-state%20user-read-recently-played%20playlist-read-private";
const Login = () => {
    return (
        <button>
            <a href={AUTH_URL}>Login with spotify</a>
        </button>
    )
}

export default Login