import React from 'react'

const NextSong = (props) => {


    //Xử lí khi click Next Song
    const onClickNextSong = () => {
        props.NextCurrentIndex();
        props.setisPlaying(true);
    }
    
    return (
        <div className="btn btn-next"
            onClick={onClickNextSong}
        >
            <div className="btn-next-song">
                <i className="fas fa-step-forward"></i>

            </div>
        </div>
    )
}

export default NextSong
