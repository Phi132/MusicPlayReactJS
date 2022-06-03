import React from 'react';
import { useProviderContext } from '../../utils/StateProvider';


const Libary = (props) => {

    const [{ myplaylist }, dispatch] = useProviderContext();

    const songs = props.songs;
    var CurrentIndex = props.currentIndex;
    const onClickSong = (index) => {
        props.setCurrentIndex(index)
        props.setisPlaying(true)
        props.setClickSong(!props.clickSong)
    }
    return (


        <div className="song-playlist libarySongList" >
            <div className="song-playlist--css-1" >
                <div className="song-playlist--css-2">
                    <div className="list-border">
                        <div className="playlist-song">

                            <div className="playlist">
                                {
                                    myplaylist.map((song, index) => {

                                        return (

                                            <div className={index === CurrentIndex ? "song active" : "song"}
                                                data-index={index}
                                                key={index}
                                                onClick={() => onClickSong(index)}
                                            //ref={scrollIntoViewRef}

                                            >
                                                <div className="thumb" style={{ backgroundImage: `url(${song.image})` }}>
                                                </div>
                                                <div className="body">
                                                    <div className="name">
                                                        <div className="title">{song.name}</div>
                                                        <div className="author">{song.singer}</div>
                                                    </div>
                                                    <div className="timeSong">{song.timeSong}</div>
                                                </div>
                                                <div className="option">
                                                    <i className="fas fa-ellipsis-h"></i>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>



                        </div>
                    </div>
                </div>
            </div>
        </div>


    )

}

export default Libary
