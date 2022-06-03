import React, { useState, useEffect } from 'react';
import { useProviderContext } from '../../utils/StateProvider';
import noImgPlaylist from '../../img/no_playList.PNG';
import { reducerCases } from '../../utils/Constains';

const OverviewMM = (props) => {

    const [{ myplaylist, currentPlaylistNoapi, IndexSong }, dispatch] = useProviderContext();

    const songs = props.songs
    var CurrentIndex = props.CurrentIndex;
    const onClickSong = (index) => {
        props.setCurrentIndex(index);
        
        dispatch({ dataIndexSong: index, type: reducerCases.SET_INDEX_SONG });
        dispatch({ playWhenChangePlaylist: currentPlaylistNoapi, type: reducerCases.SET_CHANGE_PLAYLIST_PLAYING });

        props.setisPlaying(true);
        props.setClickSong(!props.clickSong);
        // set local storage 
        localStorage.setItem('IndexSongPlaying', index);
        localStorage.setItem('PlaylistSong', JSON.stringify(currentPlaylistNoapi));

    }

    const [motionImgFirst, setMotionImgFirst] = useState(1);
    // hoạt ảnh của các hình trong my music
    // hình 1
    const motionIndexFirst = Number(motionImgFirst)

    useEffect(() => {
        if (motionImgFirst > 6) {
            setMotionImgFirst(1);
        }
        const index = setInterval(() => {
            setMotionImgFirst(motionIndexFirst + 1);
        }, 2000);
        return () => clearInterval(index);
    }, [motionImgFirst])
    const motionImg1 = () => {
        if (motionImgFirst === 1) {
            return "song-img-item first"
        }
        else if (motionImgFirst === 6) {
            return "song-img-item second"
        }
        else {
            return "song-img-item third"
        }
    }
    const motionImga1 = motionImg1();
    //hình 2
    const motionImg2 = () => {
        if (motionImgFirst === 1) {
            return "song-img-item second"
        }
        else if (motionImgFirst === 2) {
            return "song-img-item first"
        }
        else {
            return "song-img-item third"
        }
    }
    const motionImga2 = motionImg2();
    // hình 3
    const motionImg3 = () => {
        if (motionImgFirst === 2) {
            return "song-img-item second"
        }
        else if (motionImgFirst === 3) {
            return "song-img-item first"
        }
        else {
            return "song-img-item third"
        }
    }
    const motionImga3 = motionImg3();
    // hình 4
    const motionImg4 = () => {
        if (motionImgFirst === 3) {
            return "song-img-item second"
        }
        else if (motionImgFirst === 4) {
            return "song-img-item first"
        }
        else {
            return "song-img-item third"
        }
    }
    const motionImga4 = motionImg4();
    // hình 5
    const motionImg5 = () => {
        if (motionImgFirst === 4) {
            return "song-img-item second"
        }
        else if (motionImgFirst === 5) {
            return "song-img-item first"
        }
        else {
            return "song-img-item third"
        }
    }
    const motionImga5 = motionImg5();
    // hình 6
    const motionImg6 = () => {
        if (motionImgFirst === 5) {
            return "song-img-item second"
        }
        else if (motionImgFirst === 6) {
            return "song-img-item first"
        }
        else {
            return "song-img-item third"
        }
    }
    const motionImga6 = motionImg6();
    return (
        <div className="song-animate-section">
            <ul className="song-img-animate">
                <li className={motionImga1}>
                    <figure className="img-figure">
                        <img src="https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/5/6/a/6/56a6a853bfc5603520c3298623461467.jpg" alt="" />
                    </figure>
                </li>
                <li className={motionImga2}>
                    <figure className="img-figure">
                        <img src="/assets/img/song2_img.jpg" alt="" />
                    </figure>
                </li>
                <li className={motionImga3}>
                    <figure className="img-figure">
                        <img src="/assets/img/song3_img.jpg" alt="" />
                    </figure>
                </li>
                <li className={motionImga4}>
                    <figure className="img-figure">
                        <img src="/assets/img/song4_img.jpg" alt="" />
                    </figure>
                </li>
                <li className={motionImga5}>
                    <figure className="img-figure">
                        <img src="/assets/img/song5_img.jpg" alt="" />
                    </figure>
                </li>
                <li className={motionImga6}>
                    <figure className="img-figure">
                        <img src="https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/d/b/c/2/dbc2256e873048550e1410a7f65b51d2.jpg"
                            alt="" />
                    </figure>
                </li>

            </ul>

            <div className="song-playlist">
                <div className="song-playlist--css-1" >
                    <div className="song-playlist--css-2">
                        <div className="list-border">
                            <div className="playlist-song">


                                <div className="playlist">
                                    {
                                        currentPlaylistNoapi.map((song, index) => {

                                            return (

                                                <div className={index === IndexSong ? "song active" : "song"}
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
        </div>

    )
}


export default OverviewMM

