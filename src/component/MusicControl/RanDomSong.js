import React from 'react'

const RanDomSong = (props) => {
    const isClickRandom = props.isClickRandom
    const onClickRandom = () => {
        props.setisClickRandom(!isClickRandom)

    }
    return (
        <div className={isClickRandom ? "btn btn-random active" : "btn btn-random"}
            onClick={onClickRandom}
        >
            <div className="btn-random-song">
                <i className="fas fa-random"></i>
            </div>
        </div>
    )
}

export default RanDomSong
