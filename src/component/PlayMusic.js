import React, { useState, useEffect, useRef } from 'react';

import StartMusic from './MusicControl/StartMusic';
import {
    BrowserRouter as Router,
    NavLink,

} from "react-router-dom";

import PrevSong from './MusicControl/PrevSong';
import NextSong from './MusicControl/NextSong';
import RanDomSong from './MusicControl/RanDomSong';
import LoopSong from './MusicControl/LoopSong';
import axios from 'axios';
import { useProviderContext } from '../utils/StateProvider';
import { reducerCases } from '../utils/Constains';
import noImgPlaylist from '../img/no_playList.PNG';
// import SpotifyPlayer from 'react-spotify-web-playback';


const PlayMusic = (props) => {
    //const audioRef = useRef(null);

    const [{ URL_WEBSITE,
        // accessTokenProvider,
        currentPlaying,
        URL_SERVER, myplaylist,
        playWhenChangePlaylist,
        currentPlaylistNoapi, IndexSong }, dispatch] = useProviderContext();

    const [audioRef, setAudioRef] = useState(useRef(new Audio()));
    const [timeSong, setTimeSong] = useState();
    const [timeDuration, setTimeDuration] = useState();
    const [isPlayingSong, setIsPlayingSong] = useState();
    const [pathCurrentSongPlaying, setPathCurrentSongPlaying] = useState("/");

    var songs = props.songs;
    var currentIndex = props.currentIndex;
    var setCurrentIndex = props.setCurrentIndex;


    var setisPlaying = props.setisPlaying;
    var isPlaying = props.isPlaying;
    const clickSong = props.clickSong;
    //random
    const isClickRandom = props.isClickRandom;
    const setisClickRandom = props.setisClickRandom;
    //loop
    const isClickLoop = props.isClickLoop;
    const setisClickLoop = props.setisClickLoop;



    // xử lí khi click vào next song
    // useEffect(() => {
    if ((JSON.parse(localStorage.getItem('IndexSongPlaying')) > JSON.parse(localStorage.getItem('PlaylistSong')).length - 1) && JSON.parse(localStorage.getItem('PlaylistSong')).length > 1) {
        setCurrentIndex(0);
        dispatch({ dataIndexSong: 0, type: reducerCases.SET_INDEX_SONG })

        localStorage.setItem('IndexSongPlaying', 0);

    }
    // }, [IndexSong, JSON.parse(localStorage.getItem('IndexSongPlaying'))]);


    // xử lí khi click vào previous song
    // useEffect(() => {
    if (JSON.parse(localStorage.getItem('IndexSongPlaying')) < 0) {
        setCurrentIndex(currentPlaylistNoapi.length - 1)
        dispatch({ dataIndexSong: currentPlaylistNoapi.length - 1, type: reducerCases.SET_INDEX_SONG })

        localStorage.setItem('IndexSongPlaying', currentPlaylistNoapi.length - 1);

    }
    // }, [IndexSong, JSON.parse(localStorage.getItem('IndexSongPlaying'))]);

    //audio
    useEffect(() => {
        audioRef.current.src = (
            JSON.parse(localStorage.getItem('PlaylistSong')) &&
                JSON.parse(localStorage.getItem('PlaylistSong')).length > 1 ?
                JSON.parse(localStorage.getItem('PlaylistSong'))[JSON.parse(localStorage.getItem('IndexSongPlaying'))].uri :
                'khong co'
        );

    }, [playWhenChangePlaylist]);


    useEffect(() => {
        audioRef.current.pause()

        if (JSON.parse(localStorage.getItem('PlaylistSong')) && JSON.parse(localStorage.getItem('PlaylistSong')).length > 1)
            audioRef.current = new Audio(JSON.parse(localStorage.getItem('PlaylistSong'))[JSON.parse(localStorage.getItem('IndexSongPlaying'))].uri)
    }, [playWhenChangePlaylist, JSON.parse(localStorage.getItem('IndexSongPlaying'))]);

    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play()
                .catch(err => { })
        }

        if (isPlayingSong) {
            audioRef.current.pause()
        }

        audioRef.current.pause()


        if (JSON.parse(localStorage.getItem('PlaylistSong')) && JSON.parse(localStorage.getItem('PlaylistSong')).length > 1)
            audioRef.current = new Audio(JSON.parse(localStorage.getItem('PlaylistSong'))[JSON.parse(localStorage.getItem('IndexSongPlaying'))].uri)

    }, [])

    let durationTimeSong;
    if (audioRef && audioRef.current && audioRef.current.duration) {
        durationTimeSong = (audioRef.current.duration);
    }



    var isPlayingSongg;
    if (audioRef && audioRef.current) {
        isPlayingSongg = audioRef.current.currentTime > 0
            && audioRef.current.paused
            && !audioRef.current.ended
            && audioRef.current.readyState > audioRef.current.HAVE_CURRENT_DATA;
    }


    useEffect(() => {
        setIsPlayingSong(isPlayingSongg);
    }, [isPlayingSongg])





    // get current track
    // useEffect(() => {
    //     try {
    //         const getCurrnentSong = async () => {
    //             if (accessTokenProvider) {
    //                 const responseDataPlaylistSecond = await axios.get(
    //                     "https://api.spotify.com/v1/me/player/currently-playing",
    //                     {
    //                         headers: {
    //                             Authorization: "Bearer " + accessTokenProvider,
    //                             "Content-Type": "application/json",
    //                         }
    //                     }
    //                 );

    //                 if (responseDataPlaylistSecond &&
    //                     responseDataPlaylistSecond.data &&
    //                     responseDataPlaylistSecond.data !== "") {
    //                     let getDataCurrentPlaying = {
    //                         id: responseDataPlaylistSecond.data.item.id,
    //                         name: responseDataPlaylistSecond.data.item.name,
    //                         artists: responseDataPlaylistSecond.data.item.artists[0],
    //                         image: responseDataPlaylistSecond.data.item.album.images[2].url,
    //                         progress_ms: responseDataPlaylistSecond.data.progress_ms,
    //                         timestamp: responseDataPlaylistSecond.data.timestamp,
    //                     };

    //                     dispatch({
    //                         dataCurrentPlaying: getDataCurrentPlaying,
    //                         type: reducerCases.SET_CURRENT_PLAYING_TRACK,
    //                     })
    //                 } else {
    //                     const resDataCurrentPlay = await axios.get(
    //                         "https://api.spotify.com/v1/me/player/recently-played",
    //                         {
    //                             headers: {
    //                                 Authorization: "Bearer " + accessTokenProvider,
    //                                 "Content-Type": "application/json",
    //                             }
    //                         }
    //                     );

    //                 }
    //             }
    //             else if (!accessTokenProvider) {

    //                 let refreshToken = sessionStorage.getItem('refreshToken') ? sessionStorage.getItem('refreshToken') : '';
    //                 await axios.post(URL_SERVER + '/refresh', {
    //                     refreshToken,
    //                 })
    //                     .then(async (res) => {
    //                         const responseDataPlaylistSecond = await axios.get(
    //                             "https://api.spotify.com/v1/me/player/currently-playing",
    //                             {
    //                                 headers: {
    //                                     Authorization: "Bearer " + res.data.accessToken,
    //                                     "Content-Type": "application/json",
    //                                 }
    //                             }
    //                         );
    //                         if (responseDataPlaylistSecond &&
    //                             responseDataPlaylistSecond.data &&
    //                             responseDataPlaylistSecond.data !== "") {
    //                             let getDataCurrentPlaying = {
    //                                 id: responseDataPlaylistSecond.data.item.id,
    //                                 name: responseDataPlaylistSecond.data.item.name,
    //                                 artists: responseDataPlaylistSecond.data.item.artists[0],
    //                                 image: responseDataPlaylistSecond.data.item.album.images[2].url,
    //                                 progress_ms: responseDataPlaylistSecond.data.progress_ms,
    //                                 timestamp: responseDataPlaylistSecond.data.timestamp,
    //                             };
    //                             dispatch({
    //                                 dataCurrentPlaying: getDataCurrentPlaying,
    //                                 type: reducerCases.SET_CURRENT_PLAYING_TRACK,
    //                             })

    //                         }

    //                     })
    //                     .catch((err) => {
    //                         console.log(err);
    //                         // window.location = "/";

    //                     })
    //             }


    //         };
    //         getCurrnentSong();
    //     } catch (e) {
    //         console.log(e);
    //     }

    // }, [accessTokenProvider, dispatch, currentPlaying]);

    // khai báo state cho Play Music

    //const [isAdjustTimeSong, setisAdjustTimeSong] = useState(false)
    const [onTua, setonTua] = useState(false)
    const [loadTua, setloadTua] = useState(false)
    const [trackProgress, setTrackProgress] = useState(Number(localStorage.getItem('currentTime')) || 0);
    const [isRunSong, setisRunSong] = useState(false);

    // thay doi trang thai cua nut play
    const ChangeStatusPlay = () => {
        setisPlaying(!isPlaying);
    }

    //xử lí khi click next song
    const NextCurrentIndex = () => {
        if (isClickRandom) {
            let rdIndex = Math.floor(Math.random() * currentPlaylistNoapi.length);

            setCurrentIndex(rdIndex);
            dispatch({ dataIndexSong: rdIndex, type: reducerCases.SET_INDEX_SONG });

            localStorage.setItem('IndexSongPlaying', rdIndex);
        }
        else {
            if (IndexSong > JSON.parse(localStorage.getItem('PlaylistSong')).length) {
                setCurrentIndex(0);
                dispatch({ dataIndexSong: 0, type: reducerCases.SET_INDEX_SONG });
                props.setClickSong(!props.clickSong)

                localStorage.setItem('IndexSongPlaying', 0);
            } else {
                setCurrentIndex(currentIndex + 1);
                dispatch({ dataIndexSong: IndexSong + 1, type: reducerCases.SET_INDEX_SONG });
                props.setClickSong(!props.clickSong)

                localStorage.setItem('IndexSongPlaying', IndexSong + 1);
            }


        }

    };
    // xử lí khi click vào previous song
    const PrevCurrentIndex = () => {
        if (isClickRandom) {
            let preRdIndex = Math.floor(Math.random() * currentPlaylistNoapi.length)
            setCurrentIndex();
            dispatch({ dataIndexSong: preRdIndex, type: reducerCases.SET_INDEX_SONG });

            localStorage.setItem('IndexSongPlaying', preRdIndex);


        }
        else {
            if (IndexSong < JSON.parse(localStorage.getItem('PlaylistSong')).length) {
                setCurrentIndex(JSON.parse(localStorage.getItem('PlaylistSong')).length - 1);
                dispatch({ dataIndexSong: JSON.parse(localStorage.getItem('PlaylistSong')).length - 1, type: reducerCases.SET_INDEX_SONG });

                props.setClickSong(!props.clickSong)

                localStorage.setItem('IndexSongPlaying', JSON.parse(localStorage.getItem('PlaylistSong')).length - 1);
            } else {
                setCurrentIndex(currentIndex - 1);
                dispatch({ dataIndexSong: IndexSong - 1, type: reducerCases.SET_INDEX_SONG });

                props.setClickSong(!props.clickSong)

                localStorage.setItem('IndexSongPlaying', IndexSong - 1);
            }


        }
    };



    // style
    var trackProgressRotate = trackProgress * 20;
    const avtStyle = {
        // backgroundImage: `url("${currentPlaying && currentPlaying.image ? currentPlaying.image : noImgPlaylist}")`,
        // transform: `rotate(${trackProgressRotate}deg)`,
        // transition: 'all .4s linear',
        backgroundImage: `url("${JSON.parse(localStorage.getItem('PlaylistSong'))[JSON.parse(localStorage.getItem('IndexSongPlaying'))] &&
            JSON.parse(localStorage.getItem('PlaylistSong'))[JSON.parse(localStorage.getItem('IndexSongPlaying'))].image &&
            JSON.parse(localStorage.getItem('PlaylistSong'))[JSON.parse(localStorage.getItem('IndexSongPlaying'))].image.url ?
            JSON.parse(localStorage.getItem('PlaylistSong'))[JSON.parse(localStorage.getItem('IndexSongPlaying'))].image.url :
            noImgPlaylist}")`,
        transform: `rotate(${trackProgressRotate}deg)`,
        transition: 'all .4s linear',
    }
    const avtStyleActive = {
        // backgroundImage: `url("${currentPlaying && currentPlaying.image ? currentPlaying.image : noImgPlaylist}")`,
        // transform: `rotate(${trackProgressRotate}deg)`,
        // transition: 'all 1s linear',
        backgroundImage: `url("${JSON.parse(localStorage.getItem('PlaylistSong'))[JSON.parse(localStorage.getItem('IndexSongPlaying'))] &&
            JSON.parse(localStorage.getItem('PlaylistSong'))[JSON.parse(localStorage.getItem('IndexSongPlaying'))].image &&
            JSON.parse(localStorage.getItem('PlaylistSong'))[JSON.parse(localStorage.getItem('IndexSongPlaying'))].image.url ?
            JSON.parse(localStorage.getItem('PlaylistSong'))[JSON.parse(localStorage.getItem('IndexSongPlaying'))].image.url :
            noImgPlaylist}")`,
        transform: `rotate(${trackProgressRotate}deg)`,
        transition: 'all 1s linear',
    }


    //

    //console.log(audioRef.current.duration)
    const intervalRef = useRef();
    const isReady = useRef(false);
    //format time
    const formatTime = (sec_num) => {
        let hours = Math.floor(sec_num / 3600);
        let minutes = Math.floor((sec_num - hours * 3600) / 60);
        let seconds = Math.floor(sec_num - hours * 3600 - minutes * 60);

        hours = hours < 10 ? (hours > 0 ? '0' + hours : 0) : hours;

        if (minutes < 10) {
            minutes = '0' + minutes;
        }
        if (seconds < 10) {
            seconds = '0' + seconds;
        }
        return (hours !== 0 ? hours + ':' : '') + minutes + ':' + seconds;
    }

    useEffect(() => {
        // var timeSong = formatTime(trackProgress);
        setTimeSong(formatTime(trackProgress))
        // var timeDuration = formatTime(audioRef.current.duration)
        setTimeDuration(formatTime(audioRef.current.duration));
    }, [trackProgress])



    //set width progress song
    var widthProgress = trackProgress /
        (audioRef && audioRef.current && audioRef.current.duration ? audioRef.current.duration : 1) * 100;
    const setWidthProgress = {
        width: `${widthProgress}%`
    }
    // xử lí khi tua bài hát

    const onAdjustTime = (value) => {

        if (isNaN(value)) {

        } else {
            if (!isNaN(audioRef && audioRef.current && audioRef.current.duration) && !loadTua) {
                audioRef.current.currentTime = Number(value) / 100 * audioRef.current.duration;
                setTrackProgress(Number(value) / 100 * audioRef.current.duration);
                setloadTua(true);
                setonTua(!onTua);
            }
            else if (!isNaN(audioRef && audioRef.current && audioRef.current.duration)) {
                audioRef.current.currentTime = Number(value);
                setTrackProgress(Number(value));
                setonTua(!onTua)
            }
        }
    }
    const startTimer = () => {
        // Clear any timers already running
        clearInterval(intervalRef.current);

        intervalRef.current = setInterval(() => {
            //khi hết bài chuyển qua bài mới
            if (audioRef.current.ended) {

                if (isClickLoop) {
                    audioRef.current.play()
                        .catch(err => { })
                } else {
                    NextCurrentIndex();
                }

            } else {
                setTrackProgress(audioRef.current.currentTime);
            }
        }, [1000]);
    }
    //set play and pause 
    useEffect(() => {

        if (isPlaying) {
            audioRef.current.play()
                .catch(err => { })
        }

        if (isPlayingSong) {
            audioRef.current.pause()
        }

        audioRef.current.pause()

    }, [isPlaying])
    //phát bài hát được index chuyển tới là ngưng bài ban đầu


    useEffect(() => {
        setisPlaying(true);
        if (!isPlayingSong) {
            audioRef.current.play()
                .catch(err => { })
        }

    }, [onTua])

    //play song
    useEffect(() => {
        //nhan space để phát hoặc ngừng bài hát
        function onKeyup(e) {
            e.preventDefault();
            if (e.keyCode === 32) {
                ChangeStatusPlay();
            }
        }
        window.addEventListener('keyup', onKeyup);
        // kiểm tra trạng thai bài hát
        if (isPlaying) {

            if (!isPlayingSong) {
                audioRef.current.play()
                    .catch(err => { })
            }

            startTimer()
        }
        else if (isPlaying === false) {

            if (isPlayingSong) {
                audioRef.current.pause()
            }

        };

        return () => window.removeEventListener('keyup', onKeyup);
    }, [isPlaying])
    // effect loop song and next when time out song
    // nếu isRunSong false thì btn play ngưng

    // xử lí khi vừa load lại web
    useEffect(() => {
        if (isRunSong === false) {
            audioRef.current.pause();
            setisPlaying(false);
        }
        return () => {
        }
    }, []);
    useEffect(() => {

        startTimer();
        localStorage.setItem('currentTime', trackProgress);
        //set lại isRunSong true
        setisRunSong(true);
    }, [trackProgress])

    //set time cho bai hat
    useEffect(() => {
        audioRef.current.currentTime = (trackProgress)
    }, [])

    useEffect(() => {
        // Pause and clean up on unmount
        return () => {
            if (isPlayingSong) {
                audioRef.current.pause()
            }

            clearInterval(intervalRef.current);
        }
    }, []);
    //play song when click song

    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play()
                .catch(err => { })
        }

    }, [clickSong]);
    if (isPlaying) {
        audioRef.current.play()
            .catch(err => { })
    }
    //set volume song
    const volumeSong = props.volumeSong;

    useEffect(() => {
        audioRef.current.volume = volumeSong;
    }, [volumeSong])
    useEffect(() => {
        audioRef.current.volume = volumeSong;
    }, [IndexSong])
    // xử lí khi click vào bài hát ở thanh control music
    useEffect(() => {
        let idSong = JSON.parse(localStorage.getItem('PlaylistSong'))[JSON.parse(localStorage.getItem('IndexSongPlaying'))].id

        setPathCurrentSongPlaying(idSong.split("_")[0])
    }, [JSON.parse(localStorage.getItem('IndexSongPlaying')), JSON.parse(localStorage.getItem('PlaylistSong'))])
    return (
        // < SpotifyPlayer
        //     token={props.accessToken}
        //     showSaveIcon
        //     play={true}
        //     uris={props.trackUri ? [props.trackUri] : []}
        // />
        <div className="play__music">
            <div className="col-md-3 player-left">
                <div className="player-controll-left">
                    <NavLink to={pathCurrentSongPlaying} className="player-controll-left--link">
                        <div className="avt-song"
                            style={isPlaying ? avtStyleActive : avtStyle}
                        ></div>


                        <div className="name-singer-song">
                            <div className="name-song">
                                <marquee width="100%" behavior="scroll">
                                    {/* {currentPlaying && currentPlaying.name ? currentPlaying.name : "Đang tải..."} */}
                                    {JSON.parse(localStorage.getItem('PlaylistSong'))[JSON.parse(localStorage.getItem('IndexSongPlaying'))] && JSON.parse(localStorage.getItem('PlaylistSong'))[JSON.parse(localStorage.getItem('IndexSongPlaying'))].name ? JSON.parse(localStorage.getItem('PlaylistSong'))[JSON.parse(localStorage.getItem('IndexSongPlaying'))].name : "Đang Tải.."}
                                </marquee>
                            </div>
                            <div className="list-songs--info--artist">
                                {currentPlaylistNoapi && JSON.parse(localStorage.getItem('PlaylistSong'))[JSON.parse(localStorage.getItem('IndexSongPlaying'))] && JSON.parse(localStorage.getItem('PlaylistSong'))[JSON.parse(localStorage.getItem('IndexSongPlaying'))].artists ?
                                    JSON.parse(localStorage.getItem('PlaylistSong'))[JSON.parse(localStorage.getItem('IndexSongPlaying'))].artists.map((value, index) => {
                                        return (
                                            <span key={index}>
                                                <span className="list-songs--info--name-artist" >
                                                    {value}
                                                </span>
                                                <span className='comma-playlist'>,</span>
                                            </span>
                                        )

                                    })
                                    : (
                                        <span className="list-songs--info--name-artist" >
                                            Không có nghệ sĩ nào
                                        </span>
                                    )}

                            </div>

                        </div>
                    </NavLink>

                    <div className="like-list">
                        <div className="icon-heart">
                            <a href="#" className="link-heart-list">
                                <i className="fas fa-heart"></i>
                            </a>
                        </div>
                    </div>
                    <div className="more-song-left">

                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="player-controll-bar">
                    <div className="control">
                        <LoopSong
                            isClickLoop={isClickLoop}
                            setisClickLoop={setisClickLoop}
                        />
                        < PrevSong
                            PrevCurrentIndex={PrevCurrentIndex}
                            setisPlaying={setisPlaying}
                        //scroll to view

                        />

                        < StartMusic

                            ChangeStatusPlay={ChangeStatusPlay}
                            isPlaying={isPlaying}

                        />

                        <NextSong
                            NextCurrentIndex={NextCurrentIndex}
                            setisPlaying={setisPlaying}

                        />
                        <RanDomSong
                            isClickRandom={isClickRandom}
                            setisClickRandom={setisClickRandom}

                        />
                    </div>

                    <div className="music-progress">
                        <div className="time-left-song">
                            <span>
                                {audioRef && audioRef.current && audioRef.current.currentTime ? timeSong : "00:00"}
                            </span>
                        </div>
                        <div className="item-progress">
                            <input id="progress" className="progress-input" type="range" defaultValue="0" step="1"
                                min="0" max={

                                    // isNaN(audioRef && audioRef.current && audioRef.current.duration) ? audioRef.current.duration : durationTimeSong
                                    durationTimeSong && Number(durationTimeSong) ? durationTimeSong : ''
                                }

                                onChange={(e) => {
                                    onAdjustTime(e.target.value)
                                }

                                }

                            />
                            <div id="progress-bs4" className="progress">
                                <div className="progress-bar progress-bar1" id="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0"
                                    aria-valuemax="100"
                                    style={setWidthProgress}
                                >
                                    <i className="fas fa-circle" id="circle-progress"></i>
                                </div>
                            </div>
                        </div>
                        <div className="time-right-song">
                            <span>
                                {
                                    audioRef &&
                                        audioRef.current &&
                                        audioRef.current.duration &&
                                        isNaN(audioRef.current.duration)
                                        ? timeDuration : JSON.parse(localStorage.getItem('PlaylistSong'))[JSON.parse(localStorage.getItem('IndexSongPlaying'))].duration}
                            </span>
                        </div>
                    </div>

                    {/* <audio ref={testAudioRef} id="audio" src="api.mp3.zing.vn/api/streaming/audio/ZW80F7BU/320"></audio> */}



                </div>


            </div>
        </div>
    )






}
export default PlayMusic;