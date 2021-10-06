import React, { useState, useEffect, useRef } from 'react';

import StartMusic from './MusicControl/StartMusic';

import PrevSong from './MusicControl/PrevSong';
import NextSong from './MusicControl/NextSong';
import RanDomSong from './MusicControl/RanDomSong';
import LoopSong from './MusicControl/LoopSong';


const PlayMusic = (props) => {
    //const audioRef = useRef(null);

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
    //audio
    const audioRef = useRef(new Audio(songs[currentIndex].path));

    const { duration } = audioRef.current;

    var isPlayingSong = audioRef.current.currentTime > 0
        && !audioRef.current.paused
        && !audioRef.current.ended
        && audioRef.current.readyState > audioRef.current.HAVE_CURRENT_DATA;


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
            setCurrentIndex(Math.floor(Math.random() * songs.length));
        }
        else {
            setCurrentIndex(currentIndex + 1);
            props.setClickSong(!props.clickSong)
        }

    }
    // xử lí khi click vào previous song
    const PrevCurrentIndex = () => {
        if (isClickRandom) {
            setCurrentIndex(Math.floor(Math.random() * songs.length));
        }
        else {
            setCurrentIndex(currentIndex - 1);
            props.setClickSong(!props.clickSong)
        }
    }

    // style
    var trackProgressRotate = trackProgress * 20;
    const avtStyle = {
        backgroundImage: `url("${songs[currentIndex].image}")`,
        transform: `rotate(${trackProgressRotate}deg)`,
        transition: 'all .4s linear',
    }
    const avtStyleActive = {
        backgroundImage: `url("${songs[currentIndex].image}")`,
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
    var timeSong = formatTime(trackProgress)
    var timeDuration = formatTime(audioRef.current.duration)
    //set width progress song
    var widthProgress = trackProgress / audioRef.current.duration * 100
    const setWidthProgress = {
        width: `${widthProgress}%`
    }
    // xử lí khi tua bài hát

    const onAdjustTime = (value) => {

        if (isNaN(value)) {

        } else {
            if (!isNaN(audioRef.current.duration) && !loadTua) {
                audioRef.current.currentTime = Number(value) / 100 * audioRef.current.duration;
                setTrackProgress(Number(value) / 100 * audioRef.current.duration);
                setloadTua(true);
                setonTua(!onTua)
            }
            else if (!isNaN(audioRef.current.duration) ) {
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
    //phát bài hát được index chuyển tới là ngưng bài ban đầu
    useEffect(() => {

        if (isPlaying) {
            audioRef.current.play()
                .catch(err => { })
        }

        if (isPlayingSong) {
            audioRef.current.pause()
        }

        audioRef.current.pause()


        audioRef.current = new Audio(songs[currentIndex].path);

    }, [currentIndex])

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

            setisPlaying(false);
        }
        return () => {
            audioRef.current.pause();

            console.log("run will ", isRunSong)

        }
    });
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
    }, [currentIndex])

    return (
        <div className="play__music">
            <div className="col-md-3 player-left">
                <div className="player-controll-left">
                    <div className="avt-song"
                        style={isPlaying ? avtStyleActive : avtStyle}
                    >

                    </div>

                    <div className="name-singer-song">
                        <div className="name-song">
                            <marquee width="100%" behavior="scroll">
                                {songs[currentIndex].name}
                            </marquee>
                        </div>
                        <div className="name-singer">
                            <span>
                                {songs[currentIndex].singer}
                            </span>
                        </div>
                    </div>
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
                                {audioRef.current.currentTime ? timeSong : "00:00"}
                            </span>
                        </div>
                        <div className="item-progress">
                            <input id="progress" className="progress-input" type="range" defaultValue="0" step="1"
                                min="0" max={duration ? duration : `${duration}`}

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
                                {audioRef.current.duration ? timeDuration : songs[currentIndex].timeSong}
                            </span>
                        </div>
                    </div>

                    {/* <audio ref={audioRef} id="audio" src={songs[currentIndex].path}></audio> */}



                </div>


            </div>
        </div>
    )






}
export default PlayMusic;