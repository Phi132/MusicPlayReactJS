import React, { } from 'react'

const StartMusic = (props) => {
    var isPlaying = props.isPlaying;
    // Xử lí khi click play button

    const onclickPlay = () => {
        props.ChangeStatusPlay()

    }
    
    return (

        <div className={isPlaying ? "btn btn-toggle-play playing" : "btn btn-toggle-play"}
            onClick={onclickPlay}
        >
            <i className="fas fa-pause icon-pause"></i>
            <i className="fas fa-play icon-play"></i>
        </div>

    )
}

export default StartMusic
