// import axios from 'axios';
import React, { } from 'react'
// import { useProviderContext } from '../../utils/StateProvider';

const StartMusic = (props) => {
    var isPlaying = props.isPlaying;
    // Xử lí khi click play button

    const onclickPlay = () => {
        props.ChangeStatusPlay()

    }

    // const [{ accessTokenProvider }, dispatch] = useProviderContext();

    // const clickPlaySpotify = async () => {
    //     try {
    //         let state = !isPlaying ? "play" : "pause";
    //         props.ChangeStatusPlay();
    //         if (accessTokenProvider) {
    //             console.log("co tokeb", accessTokenProvider);
    //             await axios.put(
    //                 `https://api.spotify.com/v1/me/player/play`,
    //                 {},
    //                 {
    //                     headers: {
    //                         Authorization: "Bearer " + accessTokenProvider,
    //                         "Content-Type": "application/json",
    //                         Accept: "application/json"
    //                     }
    //                 }
    //             )
    //         } else {
    //             console.log("k co token");
    //         }

    //     } catch (e) {
    //         console.log(e);
    //     }

    // }

    return (

        <div className={isPlaying ? "btn btn-toggle-play playing" : "btn btn-toggle-play"}
            onClick={onclickPlay}
            // onClick={clickPlaySpotify}
        >
            <i className="fas fa-pause icon-pause"></i>
            <i className="fas fa-play icon-play"></i>
        </div>

    )
}

export default StartMusic
