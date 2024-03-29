import React, { useState, useEffect, useRef, useContext } from 'react';
import ReactTooltip from 'react-tooltip';
import { Helmet } from "react-helmet";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink,

} from "react-router-dom";
import Home from './Home';
import MyMusic from './MyMusic/MyMusic';
import PlayMusic from './PlayMusic';
import VolumeSong from './VolumeSong';
import Chart from './ChartPage/Chart';
import { Auth } from './context/Auth';
import Maintance from './Maintance/Maintance';
// import SpotifyWebApi from 'spotify-web-api-node';
import PlaylistPage from './Playlist/PlaylistPage';



// const spotifyApi = new SpotifyWebApi({
//     clientId: 'c358a6d11119494fb227b7e5aba6be5f',
// });

const Navigation = (props, exact) => {
    // const accessToken = Authenticantion(props.code);
    const [ setSearch] = useState();
    const [searchResult] = useState();
    const [searchActive, setSearchActive] = useState(false);

    const [ setChooseTrack] = useState();




    const [currentIndex, setCurrentIndex] = useState(Number(localStorage.getItem('currentIndex')) || 0);
    const [isPlaying, setisPlaying] = useState(false);
    const [clickSong, setClickSong] = useState(false);


    //set reducer accestoken

    // const [{ accessTokenProvider, currentPlaylistNoapi, owner, IndexSong }, dispatch] = useProviderContext();
    // useEffect(() => {
    //     dispatch({
    //         accessTokenProvider: accessToken,
    //         type: reducerCases.SET_TOKEN
    //     })

    // }, [dispatch, accessToken, accessTokenProvider]);
    // useEffect(() => {
    //     try {
    //         const getUserProfile = async () => {
    //             if (accessTokenProvider) {
    //                 var response = await axios.get(
    //                     "https://api.spotify.com/v1/me",
    //                     {
    //                         headers: {
    //                             Authorization: "Bearer " + accessTokenProvider,
    //                             "Content-Type": "application/json",
    //                         }
    //                     }
    //                 )
    //             }

    //             if (response && response.data) {
    //                 dispatch({
    //                     owner: response.data,
    //                     type: reducerCases.SET_OWNER
    //                 });
    //             }

    //         };
    //         getUserProfile();
    //     } catch (e) {
    //         console.log(e);
    //     }

    // }, [dispatch, accessToken, accessTokenProvider]);

    // useEffect(() => {
    //     try {
    //         const getPlayList = async () => {
    //             if (accessTokenProvider) {
    //                 var response = await axios.get(
    //                     "https://api.spotify.com/v1/me/playlists",
    //                     {
    //                         headers: {
    //                             Authorization: "Bearer " + accessTokenProvider,
    //                             "Content-Type": "application/json",
    //                         }
    //                     }
    //                 )
    //             }

    //             if (response && response.data && response.data.items) {
    //                 const items = response.data.items;
    //                 const playLists = items.map((value, index) => {
    //                     return ({
    //                         name: value.name,
    //                         id: value.id,
    //                         image: value.images
    //                     })
    //                 })
    //                 dispatch({
    //                     playLists,
    //                     type: reducerCases.SET_PLAYLIST
    //                 });
    //             }

    //         };
    //         getPlayList();
    //     } catch (e) {
    //         console.log(e);
    //     }

    // }, [dispatch, accessToken, accessTokenProvider]);

    //ramdom
    const [isClickRandom, setisClickRandom] = useState((localStorage.getItem('isRandom') === 'true' ? true : false) || false);
    //loop song
    const [isClickLoop, setisClickLoop] = useState((localStorage.getItem('isLoop') === 'true' ? true : false) || false);
    // volume song
    const [volumeSong, setvolumeSong] = useState(Number(localStorage.getItem('volume')) || 0.5);
    //click theme
    const [isClickTheme, setisClickTheme] = useState(false);
    // changeTheme
    const setTheme = props.setTheme;

    //search

    // useEffect(() => {
    //     if (!accessToken) return
    //     spotifyApi.setAccessToken(accessToken);
    // }, [accessToken]);

    // useEffect(() => {
    //     if (!search) {
    //         return setSearchResult([]);
    //     }
    //     if (!accessToken) return


    //     spotifyApi.searchTracks(search)
    //         .then(data => {
    //             setSearchResult(
    //                 data.body.tracks.items.map((item) => {
    //                     return {
    //                         name: item.album.name,
    //                         singer: item.artists[0].name,
    //                         timeSong: item.duration_ms,
    //                         image: item.album.images,
    //                         trackUri: item.uri,
    //                     };
    //                 })
    //             )
    //         })
    //         .catch((e) => {
    //             console.log(e);
    //         })
    // }, [search]);

    const inputSearch = (e) => {
        if (e.target.value === '') {
            console.log("rong");
            setSearchActive(false);
        } else {
            setSearch(e.target.value);
            setSearchActive(true);
        }

    };
    const onKeyUpSearch = (e) => {
        if (e.keyCode === 32) {
            function onKeyup(e) {
                e.preventDefault();
                if (e.keyCode === 32) {
                    setisPlaying(isPlaying);
                }
            }
            window.addEventListener('keyup', onKeyup);

        }

    }
    // const LeaveSearch = () => {
    //     setSearchActive(false);
    // }
    const clickSearch = () => {
        setSearchActive(true);
    }

    // xử lí khi click vào overlay
    const onClickOverlay = () => {
        setisClickTheme(false)
    }


    const songRef = useRef();
    // lưu bài hát hiện tại vào local storage

    //xử lí khi click vào theme đóng mở theme

    const onClickTheme = () => {
        setisClickTheme(true);
    }

    const onClickCloseTheme = () => {
        setisClickTheme(false);
    }
    useEffect(() => {
        function onKeyup(e) {
            e.preventDefault();
            if (e.keyCode === 27) {
                setisClickTheme(false);
            }
        }
        window.addEventListener('keyup', onKeyup);
        return () => window.removeEventListener('keyup', onKeyup)
    }, [])

    //change theme
    const onAcceptChangeTheme = (colorTheme) => {
        setTheme(colorTheme)
    }
    //choose song
    const chooseTrackSong = (trackUri) => {
        console.log(trackUri);
        setChooseTrack(trackUri)
    }
    // lấy context
    // const { isAuthenticated } = useContext(Auth)

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Web Player | Music for everyone</title>

            </Helmet>


            <Router>

                <div className="musicWeb" >
                    <div className="header">
                        <div className="header-content">
                            <div className="h-content-left">
                                <div className="arrow">
                                    <div className="arrow-retreat">
                                        <NavLink activeClassName="active-trans-page" exact={true} to="/">
                                            <i className="fas fa-arrow-left"></i>

                                        </NavLink>
                                    </div>
                                    <div className="arrow-advance">
                                        <NavLink activeClassName="active-trans-page" exact={true} to="/mymusic">
                                            <i className="fas fa-arrow-right"></i>

                                        </NavLink>
                                    </div>
                                </div>

                                <div className={searchActive
                                    ? "header-search header-search-active"
                                    : "header-search"}

                                >
                                    <i className="fas fa-search"></i>
                                    <input className="input-search-header" type="search"
                                        placeholder="Nhập tên bài hát, ca sĩ, MV..."
                                        onChange={(e) => inputSearch(e)}
                                        onClick={clickSearch}
                                        onKeyUp={onKeyUpSearch}
                                        // onBlur={LeaveSearch}
                                        aria-label="Search" />
                                    {
                                        searchResult
                                            && searchResult.length > 0 ?
                                            (
                                                <div className={!searchActive ? "d-none" : "search-more-click"}
                                                >
                                                    <ul className="search-more">

                                                        {searchResult.map((item, index) => {

                                                            return (
                                                                <li className="search-more-item" key={index} onClick={() => chooseTrackSong(item.trackUri)}>
                                                                    <i className="fas fa-search"></i>
                                                                    <div className="text-search">{item.name} - {item.singer}</div>
                                                                </li>
                                                            )
                                                        })

                                                        }

                                                    </ul>
                                                </div>
                                            ) : (
                                                <div className={!searchActive ? "d-none" : "search-more-click"}
                                                >
                                                    <ul className="search-more">

                                                    </ul>
                                                </div>
                                            )

                                    }

                                </div>
                            </div>
                            <div className="h-content-right">
                                <div className="theme" data-toggle="tooltip" data-placement="bottom" title="Giao Diện">
                                    <button className="btn-theme"
                                        onClick={onClickTheme}
                                    >
                                        <i className="icon-theme">
                                            <svg width="20" height="20" viewBox="0 0 20 20">
                                                <defs>
                                                    <linearGradient id="j32lhg93hd" x1="62.206%" x2="18.689%" y1="70.45%"
                                                        y2="39.245%">
                                                        <stop offset="0%" stopColor="#F81212"></stop>
                                                        <stop offset="100%" stopColor="red"></stop>
                                                    </linearGradient>
                                                    <linearGradient id="hjoavsus6g" x1="50%" x2="11.419%" y1="23.598%" y2="71.417%">
                                                        <stop offset="0%" stopColor="#00F"></stop>
                                                        <stop offset="100%" stopColor="#0031FF"></stop>
                                                    </linearGradient>
                                                    <linearGradient id="la1y5u3dvi" x1="65.655%" x2="25.873%" y1="18.825%"
                                                        y2="56.944%">
                                                        <stop offset="0%" stopColor="#FFA600"></stop>
                                                        <stop offset="100%" stopColor="orange"></stop>
                                                    </linearGradient>
                                                    <linearGradient id="2dsmrlvdik" x1="24.964%" x2="63.407%" y1="8.849%"
                                                        y2="55.625%">
                                                        <stop offset="0%" stopColor="#13EFEC"></stop>
                                                        <stop offset="100%" stopColor="#00E8DF"></stop>
                                                    </linearGradient>
                                                    <filter id="4a7imk8mze" width="230%" height="230%" x="-65%" y="-65%"
                                                        filterUnits="objectBoundingBox">
                                                        <feGaussianBlur in="SourceGraphic" stdDeviation="3.9"></feGaussianBlur>
                                                    </filter>
                                                    <filter id="301mo6jeah" width="312.7%" height="312.7%" x="-106.4%" y="-106.4%"
                                                        filterUnits="objectBoundingBox">
                                                        <feGaussianBlur in="SourceGraphic" stdDeviation="3.9"></feGaussianBlur>
                                                    </filter>
                                                    <filter id="b2zvzgq7fj" width="295%" height="295%" x="-97.5%" y="-97.5%"
                                                        filterUnits="objectBoundingBox">
                                                        <feGaussianBlur in="SourceGraphic" stdDeviation="3.9"></feGaussianBlur>
                                                    </filter>
                                                    <filter id="a1wq161tvl" width="256%" height="256%" x="-78%" y="-78%"
                                                        filterUnits="objectBoundingBox">
                                                        <feGaussianBlur in="SourceGraphic" stdDeviation="3.9"></feGaussianBlur>
                                                    </filter>
                                                    <path id="qtpqrj1oda"
                                                        d="M3.333 14.167V5.833l-1.666.834L0 3.333 3.333 0h3.334c.04 1.57.548 2.4 1.524 2.492l.142.008C9.403 2.478 9.958 1.645 10 0h3.333l3.334 3.333L15 6.667l-1.667-.834v8.334h-10z">
                                                    </path>
                                                    <path id="jggzvnjgfc" d="M0 0H20V20H0z"></path>
                                                    <path id="2eiwxjmc7m"
                                                        d="M3.333 14.167V5.833l-1.666.834L0 3.333 3.333 0h3.334c.04 1.57.548 2.4 1.524 2.492l.142.008C9.403 2.478 9.958 1.645 10 0h3.333l3.334 3.333L15 6.667l-1.667-.834v8.334h-10z">
                                                    </path>
                                                </defs>
                                                <g fill="none" fillRule="evenodd" transform="translate(2 3)">
                                                    <mask id="tinejqaasb" fill="#fff">
                                                        {/* <use xlink:to="#qtpqrj1oda"></use> */}
                                                        <use xlinkHref='#qtpqrj1oda' />
                                                    </mask>
                                                    <use fill="#FFF" fillOpacity="0" xlinkHref='#qtpqrj1oda'></use>
                                                    <g mask="url(#tinejqaasb)">
                                                        <g transform="translate(-2 -3)">
                                                            <mask id="uf3ckvfvpf" fill="#fff">
                                                                <use xlinkHref='#jggzvnjgfc'></use>
                                                            </mask>
                                                            <use fill="#D8D8D8" xlinkHref='#jggzvnjgfc'></use>
                                                            <circle cx="8.9" cy="6.8" r="9" fill="url(#j32lhg93hd)"
                                                                filter="url(#4a7imk8mze)" mask="url(#uf3ckvfvpf)"></circle>
                                                            <circle cx="9.3" cy="13.7" r="5.5" fill="url(#hjoavsus6g)"
                                                                filter="url(#301mo6jeah)" mask="url(#uf3ckvfvpf)"></circle>
                                                            <circle cx="15.9" cy="6.9" r="6" fill="url(#la1y5u3dvi)"
                                                                filter="url(#b2zvzgq7fj)" mask="url(#uf3ckvfvpf)"></circle>
                                                            <circle cx="16.4" cy="17.7" r="7.5" fill="url(#2dsmrlvdik)"
                                                                filter="url(#a1wq161tvl)" mask="url(#uf3ckvfvpf)"></circle>
                                                        </g>
                                                    </g>
                                                    <use fill="#FFF" fillOpacity="0.05" xlinkHref='#2eiwxjmc7m' ></use>
                                                </g>
                                            </svg>
                                        </i>


                                    </button>
                                </div>

                                <input className="input1" type="file" name="upload-btn" id="upload-btn" />
                                <label htmlFor="upload-btn">
                                    <div className="upload">
                                        <span className="btn-theme-link" tabIndex="0">
                                            <i className="fas fa-cloud-upload-alt"></i>
                                        </span>
                                    </div>
                                </label>


                                <div className="setting-main">
                                    <div className="setting">
                                        <button className="btn-theme">
                                            <i className="fas fa-cog"></i>
                                        </button>

                                    </div>
                                </div>
                                <NavLink className="profile" to="/mymusic">
                                    <div className="progile-avt">
                                        <button className="btn-theme">
                                            <img src="/assets/img/avt01.jpg"
                                                alt="" className="img-profile" />
                                        </button>

                                    </div>
                                </NavLink>
                            </div>
                        </div>


                    </div>

                    <div className="playlist-home" ></div>
                    <div className="music_user--home">
                        <div className="home_user-1" >
                            <div className="home_user-2" >
                                <Switch>
                                    <Route path="/playlistpage">
                                        <PlaylistPage
                                            clickSong={clickSong}
                                            setClickSong={setClickSong}
                                            isPlaying={isPlaying}
                                            setisPlaying={setisPlaying}
                                        />
                                    </Route>
                                    <Route exact={true} path="/zingchart">
                                        <Chart />
                                    </Route>
                                    <Route path="/mymusic">
                                        <MyMusic
                                            currentIndex={currentIndex}
                                            // songs={myplaylist}
                                            clickSong={clickSong}
                                            setClickSong={setClickSong}
                                            //
                                            songRef={songRef}

                                            setCurrentIndex={setCurrentIndex}
                                            //
                                            isPlaying={isPlaying}
                                            setisPlaying={setisPlaying}
                                        />
                                    </Route>

                                    <Route exact={true} path="/radio">
                                        <Maintance />
                                    </Route>
                                    <Route exact={true} path="/follow">
                                        <Maintance />
                                    </Route>

                                    <Route exact={true} path="/">
                                        <Home />
                                    </Route>
                                </Switch>
                            </div>
                        </div>

                    </div>

                    <aside className="sidebar">
                        <div className="sidebar-wrapper">
                            <nav className="sidebar-brand">
                                <div className="logo-brand  ">
                                    <Link to="/">
                                        <div className="img-logo-main">

                                        </div>
                                    </Link>


                                </div>
                            </nav>
                            <ul className="sidebar-main">
                                <li className="individual type-main">
                                    <NavLink to="/mymusic" className="link-main"
                                        activeClassName="sidebar-active"
                                    >
                                        <div className="main-icon">
                                            <i className="fas fa-music"></i>
                                        </div>
                                        <div className="main-name">
                                            <span>Cá Nhân</span>
                                        </div>
                                    </NavLink>
                                </li>
                                <li className="discover type-main">
                                    <NavLink exact to="/" className="link-main"
                                        activeClassName="sidebar-active"
                                    >
                                        <div className="main-icon">
                                            <i className="fas fa-plus-circle"></i>
                                        </div>
                                        <div className="main-name">
                                            <span>Khám Phá</span>
                                        </div>
                                    </NavLink>
                                </li>
                                <li className="zingChart type-main">
                                    <NavLink exact to="/zingchart" className="link-main"
                                        activeClassName="sidebar-active"
                                    >
                                        <div className="main-icon">
                                            <i className="fas fa-chart-line"></i>
                                        </div>
                                        <div className="main-name">
                                            <span>#zingchart</span>
                                        </div>
                                    </NavLink>
                                </li>
                                <li className="radio type-main">
                                    <NavLink exact to="/radio" className="link-main"
                                        activeClassName="sidebar-active"
                                    >
                                        <div className="main-icon">
                                            <i className="fas fa-random"></i>
                                        </div>
                                        <div className="main-name">
                                            <span>radio</span>
                                        </div>
                                    </NavLink>
                                </li>
                                <li className="follow type-main">
                                    <NavLink exact to="/follow" className="link-main"
                                        activeClassName="sidebar-active"
                                    >
                                        <div className="main-icon">
                                            <i className="far fa-dot-circle"></i>
                                        </div>
                                        <div className="main-name">
                                            <span>Theo Dõi</span>
                                        </div>
                                    </NavLink>
                                </li>
                            </ul>
                            <div className="sidebar-divide">

                            </div>
                            <div className="sidebar-more">
                                <nav className="sidebar-more--srcoll">

                                    <div className="vip-banner">
                                        <div className="describe-vip">
                                            Nghe nhạc không quảng cáo cùng kho nhạc VIP
                                        </div>
                                        <span className="buy-vip">
                                            mua vip
                                        </span>
                                    </div>
                                    <div className="sidebar-libary">
                                        <div className="sidebar-libary-title">
                                            thư viện
                                        </div>
                                        <div className="icon-labary">
                                            <span className="link-libary">
                                                <i className="fas fa-pencil-alt"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <ul className="sidebar-libary-personal">
                                        <li className="libary-personal-item">
                                            <span className="link-libary-item">
                                                <i className="icon-p-item">
                                                    <img src="https://zjs.zadn.vn/zmp3-desktop/releases/v1.0.13/static/media/my-song.cf0cb0b4.svg"
                                                        alt="icon" />
                                                </i>
                                                <span>Bài Hát</span>
                                            </span>
                                        </li>

                                        <li className="libary-personal-item">
                                            <a className="link-libary-item">
                                                <i className="icon-p-item">
                                                    <img src="https://zjs.zadn.vn/zmp3-desktop/releases/v1.0.13/static/media/my-playlist.7e92a5f0.svg"
                                                        alt="icon" />
                                                </i>
                                                <span>Playlist</span>
                                            </a>
                                        </li>

                                        <li className="libary-personal-item">
                                            <a className="link-libary-item">
                                                <i className="icon-p-item">
                                                    <img src="https://zjs.zadn.vn/zmp3-desktop/releases/v1.0.13/static/media/my-history.374cb625.svg"
                                                        alt="icon" />
                                                </i>
                                                <span>Gần Đây</span>
                                            </a>
                                        </li>

                                    </ul>
                                </nav>
                            </div>
                            <div className="sidebar-divide">

                            </div>
                            <div className="add-list">
                                <button className="sidebar-btn">
                                    <i className="fas fa-plus"></i>
                                    <span>Tạo playlist mới</span>
                                </button>
                            </div>

                        </div>

                    </aside>

                    <div className="row">

                    </div>
                    <div className="footer">
                        {

                            <PlayMusic
                                // songs={songs}
                                currentIndex={currentIndex}
                                setCurrentIndex={setCurrentIndex}
                                clickSong={clickSong}
                                setClickSong={setClickSong}
                                //
                                songRef={songRef}

                                //
                                isPlaying={isPlaying}
                                setisPlaying={setisPlaying}
                                //random
                                isClickRandom={isClickRandom}
                                setisClickRandom={setisClickRandom}
                                //loop song
                                isClickLoop={isClickLoop}
                                setisClickLoop={setisClickLoop}
                                // volume level
                                volumeSong={volumeSong}
                                setvolumeSong={setvolumeSong}

                                //track uri
                                // accessToken={sessionStorage.getItem('accessToken')}
                               

                            />

                        }

                        {
                            <VolumeSong
                                volumeSong={volumeSong}
                                setvolumeSong={setvolumeSong}
                            />
                        }

                    </div>




                    <div className={
                        isClickTheme ? "overlay__theme" : "overlay__theme--hidden"
                    }

                    >
                        <div className="close_theme_click_outside"
                            onClick={onClickOverlay}
                        >

                        </div>
                        <div className="control__theme">
                            <div className="control_theme__container">
                                <div className="theme__container--header">
                                    <div className="topic--header">
                                        Giao Diện
                                    </div>
                                    <button className="close--theme" data-tip="Close Theme" data-effect="float"
                                        data-type="error" data-offset="{'top' : 10}"
                                        onClick={onClickCloseTheme}

                                    >
                                        <ReactTooltip />
                                        <i className="fas fa-times"></i>
                                    </button>
                                </div>
                                <div className="theme__select__container">
                                    <div className="theme__selecte">
                                        <div className="theme__selecte--title">
                                            <span>Chủ Đề</span>
                                        </div>
                                        <div className="theme__selecte--options">
                                            <div className="item__option theme-option">
                                                <div className="item__option--image_rose theme-option-picture">

                                                    <figure>
                                                        <img src="https://zmp3-static.zadn.vn/skins/zmp3-v6.1/images/theme/rose.jpg"
                                                            alt="" />
                                                    </figure>
                                                    <div className="overlay__option theme-overlay-option">
                                                        <div className="option--accept--rose theme-accept"
                                                            id="RoseTheme"
                                                            onClick={() => onAcceptChangeTheme("RoseTheme")}
                                                        >
                                                            <div>
                                                                Áp Dụng
                                                            </div>

                                                        </div>
                                                        {/* <div className="option--demo--rose theme-demo">
                                            <div>
                                                Xem Trước
                                            </div>
                                        </div> */}
                                                    </div>


                                                </div>
                                                <div className="item__option--name theme-name">
                                                    Rosé
                                                </div>

                                            </div>

                                            <div className="item__option theme-option">
                                                <div className="ionClicktem__option--image_iu theme-option-picture">

                                                    <figure>
                                                        <img src="https://zmp3-static.zadn.vn/skins/zmp3-v6.1/images/theme/iu.jpg"
                                                            alt="" />
                                                    </figure>
                                                    <div className="overlay__option theme-overlay-option">
                                                        <div className="option--accept--iu theme-accept"
                                                            id="IUxTheme"
                                                            onClick={() => onAcceptChangeTheme("IUxTheme")}
                                                        >
                                                            <div>
                                                                Áp Dụng
                                                            </div>

                                                        </div>
                                                        {/* <div className="option--demo--iu theme-demo">
                                            <div>
                                                Xem Trước
                                            </div>
                                        </div> */}
                                                    </div>


                                                </div>
                                                <div className="item__option--name theme-name">
                                                    IU
                                                </div>

                                            </div>

                                            <div className="item__option theme-option">
                                                <div className="item__option--image_black theme-option-picture">

                                                    <figure>
                                                        <img src="https://image.winudf.com/v2/image1/ZC5hbmRyb2lkLndhbGxwYXBlci5zaW1wbGVibGFja19zY3JlZW5fMF8xNTY2OTk1ODU4XzAwOQ/screen-0.jpg?fakeurl=1&type=.jpg"
                                                            alt="" />
                                                    </figure>
                                                    <div className="overlay__option theme-overlay-option">
                                                        <div className="option--accept--black theme-accept"
                                                            id="blackTheme"
                                                            onClick={() => onAcceptChangeTheme("blackTheme")}
                                                        >
                                                            <div>
                                                                Áp Dụng
                                                            </div>

                                                        </div>
                                                        {/* <div className="option--demo--black theme-demo">
                                            <div>
                                                Xem Trước
                                            </div>
                                        </div> */}
                                                    </div>


                                                </div>
                                                <div className="item__option--name theme-name">
                                                    Black
                                                </div>

                                            </div>

                                            <div className="item__option theme-option">
                                                <div className="item__option--image_red theme-option-picture">

                                                    <figure>
                                                        <img src="https://ak.picdn.net/shutterstock/videos/3371402/thumb/1.jpg"
                                                            alt="" />
                                                    </figure>
                                                    <div className="overlay__option theme-overlay-option">
                                                        <div className="option--accept--red theme-accept"
                                                            id="redTheme"
                                                            onClick={() => onAcceptChangeTheme("redTheme")}
                                                        >
                                                            <div>
                                                                Áp Dụng
                                                            </div>

                                                        </div>
                                                        {/* <div className="option--demo--red theme-demo">
                                            <div>
                                                Xem Trước
                                            </div>
                                        </div> */}
                                                    </div>


                                                </div>
                                                <div className="item__option--name theme-name">
                                                    Red
                                                </div>

                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>


                    </div>

                </div >
            </Router>

        </>

    )

}
export default Navigation;