import React, { useState } from "react";
import ReactTooltip from 'react-tooltip';


const VolumeSong = (props) => {
    const volumeSong = props.volumeSong;
    const setvolumeSong = props.setvolumeSong;

    const [isMute, setisMute] = useState(false);
    const [volume, setVolume] = useState(0.5);
    const changeVolume = (value) => {
        var volumeLevel = Number(value) / 100;
        setvolumeSong(volumeLevel);
        setVolume(volumeLevel)
        if (volumeSong > 0) {
            setisMute(true)
        }
    }
    const onClickMute = () => {
        setisMute(!isMute);
        if (isMute) {
            setvolumeSong(0);
        }
        else {
            setvolumeSong(volume);
        }
    }
    // set width volume
    var widthv = volumeSong * 100;
    const widthVolumeProgress = {
        width: `${widthv}%`
    }
    const setIconVolumee = () => {
        if (volumeSong === 0) {
            return (
                "fas fa-volume-mute volumeIcon"
            )
        }
        else if (volumeSong > 0 && volumeSong <= 0.6) {
            return "fas fa-volume-down volumeIcon"
        }
        else {
            return "fas fa-volume-up volumeIcon"
        }
    }
    const setIconVolume = setIconVolumee();

    return (
        <div className="">
            <div className="player-controll-right">
                <div className="mv-right tooltip--color" data-tip="MV" data-effect="solid"  data-offset="{'top' : 2}">
                    <ReactTooltip />
                    <i className="fas fa-tv"></i>
                </div>
                <div className="lyric-right tooltip--color" data-tip="Lyrics" data-effect="solid"  data-offset="{'top' : 2}">
                    <ReactTooltip />
                    <i className="fas fa-microphone"></i>
                </div>
                {/* volume */}
                <div className="volume-right">
                    <div className="volume-icon"
                        onClick={onClickMute}

                    >
                        <i className={setIconVolume}></i>

                    </div>
                    <div className="volume-progress">
                        <div className="music-progress">
                            {/* progress volume */}
                            <div className="item-progress">
                                <input id="progress_volume" className="progress-input_volume" type="range"
                                    defaultValue="0" step="1" min="0" max="100"
                                    onInput={(e) => {
                                        changeVolume(e.target.value)
                                    }}
                                />
                                <div id="progress-bs4_volume" className="progress_volume">
                                    <div className="progress-bar_volume" id="progress-bar_volume"
                                        role="progressbar" aria-valuenow="25" aria-valuemin="0"
                                        aria-valuemax="100"
                                        style={widthVolumeProgress}

                                    >
                                        <i className="fas fa-circle" id="circle-progress_volume"></i>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                {/*  */}
                <div className="devide-nav">
                    <span className="devide"></span>
                </div>
                <div className="playlist-right-song tooltip--color" data-tip="Playlist" data-effect="solid"  data-offset="{'top' : 0}">
                    <ReactTooltip />
                    <i className="fas fa-list-ul"></i>
                </div>
            </div>

        </div>

    )
}


export default VolumeSong;
