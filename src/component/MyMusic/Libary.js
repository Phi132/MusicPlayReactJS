import React from 'react';
import { useProviderContext } from '../../utils/StateProvider';
import noImgPlaylist from '../../img/no_playList.PNG';


const Libary = (props) => {

    const [{ myplaylist }] = useProviderContext();

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

                                            <div className={
                                                (index === JSON.parse(localStorage.getItem('IndexSongPlaying')))
                                                    && (song.id === JSON.parse(localStorage.getItem('PlaylistSong'))[JSON.parse(localStorage.getItem('IndexSongPlaying'))].id)
                                                    ? "song active" : "song"
                                            }
                                                data-index={index}
                                                key={index}
                                                onClick={() => onClickSong(index)}
                                            //ref={scrollIntoViewRef}

                                            >
                                                <div className="thumb" style={{
                                                    backgroundImage: `url(${song && song.image
                                                        && song.image.url ? song.image.url : noImgPlaylist
                                                        })`
                                                }}>
                                                </div>
                                                <div className="body">
                                                    <div className="name">
                                                        <div className="title">
                                                            {song && song.name ? song.name : ''}
                                                        </div>
                                                        <div className="list-songs--info--artist">
                                                            {song && song && song.artists ?
                                                                song.artists.map((song, index) => {
                                                                    return (
                                                                        <span key={index}>
                                                                            <span className="list-songs--info--name-artist" >
                                                                                {song}
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
                                                    <div className="timeSong">{song && song.duration ? song.duration : ''}</div>
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
