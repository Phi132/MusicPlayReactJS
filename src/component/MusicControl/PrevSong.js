import React, { useRef } from 'react'

const PrevSong = (props) => {

    //Xử lí khi click Prev Song
    const onClickPrevSong = () => {
        props.PrevCurrentIndex();
        props.setisPlaying(true)

    }
    // scroll into view 

    return (
        <div className="btn btn-prev"
            onClick={onClickPrevSong}
        >
            <div className="btn-prev-song">
                <i className="fas fa-step-backward"></i>

            </div>
        </div>
    )
}

export default PrevSong
