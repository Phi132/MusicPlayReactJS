import React, { useState, useEffect, useContext } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink,

} from "react-router-dom";
import { Helmet } from "react-helmet";

import ReactTooltip from 'react-tooltip';
import MyMusicActive from './MyMusicActive';
import OverviewMM from './OverviewMM';
import Libary from './Libary';
import Playlist from './Playlist';
import Artist from './Artist'
import Album from './Album';
import MV from './MV';
import Upload from './Upload';
import { Auth } from '../context/Auth'
import FormLogin from '../formLogin/FormLogin';
const MyMusic = (props) => {
    const [mymusics] = useState([
        {
            path: "/mymusic",
            label: "tổng quan"
        },
        {
            path: "/mymusic/libary/song",
            label: "Bài Hát"
        },
        {
            path: "/mymusic/libary/playlist",
            label: "Playlist"
        },
        {
            path: "/mymusic/libary/artist",
            label: "Nghệ Sĩ"
        },
        {
            path: "/mymusic/libary/album",
            label: "Album"
        },
        {
            path: "/mymusic/libary/mv",
            label: "MV"
        },
        {
            path: "/mymusic/libary/upload",
            label: "Tải Lên"
        }
    ]);

    const songs = props.songs
    var CurrentIndex = props.currentIndex;

    // phát tất cả
    const onPlayAll = () => {
        props.setisPlaying(true)
    }
    // click btn log out
    const logOutToggle = () => {
        toggleAuth();
    }
    //load Auth Context
    const { isAuthenticated, toggleAuth } = useContext(Auth)
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Nhạc Cá Nhân | Tận Hưởng Âm Nhạc Thôi Nào</title>
                
            </Helmet>

            {isAuthenticated ? (
                <div className="logedIn">

                    <div className="user_profile_header">
                        <div className="profile_container">
                            <div className="profile_cnt_avt">
                                <img src="https://s120-ava-talk.zadn.vn/7/4/3/5/61/120/162864bc3fb9fea846983427858d3dd1.jpg"
                                    className="avt_profile" alt="avt Profile" />
                            </div>
                            <div className="profile_cnt_name">
                                <span>Thành Phi Đẹp Trai</span>
                            </div>
                            <div className="profile_cnt_actions">
                                <div className="buy-vip-action">
                                    mua vip ngay
                                </div>
                                <div className="receive-vip">
                                    nhap code vip
                                </div>
                                <div className="log-out"
                                    data-tip="Đăng Xuất"
                                    data-effect="solid"
                                    data-background-color="#4e4e4e"
                                    data-offset="{'top' : 10}"
                                    onClick={logOutToggle}
                                >
                                    <ReactTooltip />
                                    <i className="fas fa-sign-out-alt"></i>
                                </div>

                            </div>
                        </div>
                    </div>

                    <nav className="user_profile_navbar">
                        <div className="profile_navbar_music">
                            <div className="navbar_menu">
                                {
                                    mymusics.map((mymusic, index) => {
                                        return (
                                            <MyMusicActive
                                                key={index}
                                                mymusicItem={mymusic}
                                            />
                                        )
                                    })
                                }



                            </div>
                        </div>
                    </nav>

                    <div className="container" style={{ paddingTop: 0, paddingBottom: 0, paddingLeft: 60, paddingRight: 60 }}>
                        <div className="song-list-header">
                            <div className="list-title">
                                <span>Bài Hát</span>
                                <i className="fas fa-chevron-right"></i>
                            </div>
                            <div className="list-header-options">
                                <div className="header-option-upload">
                                    <input type="file" name="option-upload" id="option-upload" style={{ display: "none" }} />
                                    <label htmlFor="option-upload">
                                        <div className="option-upload">
                                            <a className="btn-option-link" tabIndex="0">
                                                <i className="fas fa-cloud-upload-alt"></i>
                                            </a>
                                        </div>
                                    </label>
                                </div>
                                <div className="option-play-all"
                                    onClick={onPlayAll}
                                >
                                    <div className="play-all">
                                        <i className="fas fa-play"></i>
                                        <span>Phát Tất Cả</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* doi cho nay */}

                        <Switch>

                            <Route exact={true} path="/mymusic">
                                <OverviewMM
                                    songs={songs}
                                    CurrentIndex={CurrentIndex}
                                    setCurrentIndex={props.setCurrentIndex}
                                    setisPlaying={props.setisPlaying}
                                    setClickSong={props.setClickSong}
                                    clickSong={props.clickSong}
                                />
                            </Route>
                            <Route exact={true} path="/mymusic/libary/song">
                                <Libary
                                    songs={songs}
                                    currentIndex={CurrentIndex}
                                    setCurrentIndex={props.setCurrentIndex}
                                    isPlaying={props.isPlaying}
                                    setisPlaying={props.setisPlaying}
                                    clickSong={props.clickSong}
                                    setClickSong={props.setClickSong}
                                />
                            </Route>

                            <Route exact={true} path="/mymusic/libary/playlist">
                                <Playlist

                                />
                            </Route>
                            <Route exact={true} path="/mymusic/libary/artist">
                                <Artist

                                />
                            </Route>
                            <Route exact={true} path="/mymusic/libary/album">
                                <Album

                                />
                            </Route>
                            <Route exact={true} path="/mymusic/libary/mv">
                                <MV

                                />
                            </Route>
                            <Route exact={true} path="/mymusic/libary/upload">
                                <Upload

                                />
                            </Route>
                        </Switch>

                    </div>


                </div>
            ) : <FormLogin />}

        </>

    )

}

export default MyMusic;