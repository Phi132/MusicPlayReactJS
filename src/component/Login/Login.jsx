import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import logoMain from '../../img/logo-main.png';



// const website_url = "http://localhost:3000";
// const AUTH_URL =
//     "https://accounts.spotify.com/authorize?client_id=c358a6d11119494fb227b7e5aba6be5f&response_type=code&redirect_uri=" + website_url + "&show_dialog=true&scope=user-read-private%20user-read-email%20user-modify-playback-state%20user-read-playback-position%20user-library-read%20streaming%20user-read-playback-state%20user-read-recently-played%20playlist-read-private";



const Login = () => {

    const [user, setUser] = useState();
    const [password, setPassword] = useState();
    const [loading, setLoading] = useState(false);

    const onChangeUser = (value) => {
        setUser(value);
    }

    const onChangePass = (value) => {
        setPassword(value);
    }

    useEffect(() => {
        if (window.location.pathname !== "/login") {
            window.location.pathname = "/login";
        }
    }, [window.location.pathname])



    const submitLogin = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            console.log("dang tai");
            var serverRepone = await axios.post("https://sound-site-be.herokuapp.com/login", {
                user: user,
                password: password
            });
            setLoading(false);
            if (serverRepone && serverRepone.data &&
                serverRepone.data.err === 0) {
                localStorage.setItem('userName', JSON.stringify(serverRepone.data.name));
                window.location = "/mymusic";
                // window.location.reload();
            }
            if (serverRepone && serverRepone.data &&
                serverRepone.data.err && serverRepone.data.err === 1) {
                alert(serverRepone.data.mess);

            }
            if (serverRepone && serverRepone.data &&
                serverRepone.data.err && serverRepone.data.err === 3) {
                alert(serverRepone.data.mess);
            }


        } catch (e) {
            console.log(e);
        }
    }

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Đăng Nhập</title>

            </Helmet>
            <div class="loader" style={loading ? { display: "block" } : { display: "none" }}>
                <div class="outer"></div>
                <div class="middle"></div>
                <div class="inner"></div>
            </div>

            <div className="limiter">
                <div className="container-login100">
                    <div className="wrap-login100">
                        <div className="login100-pic js-tilt" data-tilt>
                            <img src={logoMain} alt="IMG" />
                        </div>

                        <form className="login100-form validate-form" onSubmit={(e) => submitLogin(e)}>
                            <span className="login100-form-title">
                                Đăng Nhập
                            </span>

                            <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                                <input className="input100" type="text" name="user" placeholder="Tài Khoản"
                                    onChange={(e) => onChangeUser(e.target.value)}
                                />
                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
                                    <i className="fa fa-envelope" aria-hidden="true"></i>
                                </span>
                            </div>

                            <div className="wrap-input100 validate-input" data-validate="Password is required">
                                <input className="input100" type="password"
                                    name="password" placeholder="Mật Khẩu"
                                    onChange={(e) => onChangePass(e.target.value)}
                                />
                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
                                    <i className="fa fa-lock" aria-hidden="true"></i>
                                </span>
                            </div>

                            <div className="container-login100-form-btn">
                                <button className="login100-form-btn">
                                    Login
                                </button>
                            </div>


                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Login