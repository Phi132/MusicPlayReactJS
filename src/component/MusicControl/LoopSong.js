import React from 'react'

const LoopSong = (props) => {
    const onClickLoopBtn = () => {
        props.setisClickLoop(!props.isClickLoop);
    }
    return (
        <div className={props.isClickLoop ? "btn btn-repeat active" : "btn btn-repeat"}
            onClick={onClickLoopBtn}
        >
            <i className="fas fa-redo"></i>
        </div>
    )
}

export default LoopSong
