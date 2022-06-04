import axios from 'axios';
import React, { useEffect } from 'react';
import { Helmet } from "react-helmet";
import { MusicalNotes, Play, MusicalNote } from 'react-ionicons';
import { useHistory, useLocation } from 'react-router-dom';
import { reducerCases } from '../../utils/Constains';
import { useProviderContext } from '../../utils/StateProvider';
import noImgPlaylist from '../../img/no_playList.PNG';


function PlaylistPage(props) {

  const location = useLocation();
  // const { go, goBack, goForward } = useHistory();
  // const [{ selectedPlaylistId, infoPlaylist, accessTokenProvider, URL_SERVER }, dispatch] = useProviderContext();

  const [{ currentNamePlaylist,
    currentPlaylistNoapi, arrayPlaylist,
    IndexSong }, dispatch] = useProviderContext();

  let pathname = location.pathname;
  let selectedPlaylistIdUrl = pathname.split("/")[2];

  const onClickSong = (index) => {
    dispatch({ dataIndexSong: index, type: reducerCases.SET_INDEX_SONG });
    dispatch({ playWhenChangePlaylist: currentPlaylistNoapi, type: reducerCases.SET_CHANGE_PLAYLIST_PLAYING });

    props.setisPlaying(true);
    props.setClickSong(!props.clickSong);
    // set local storage 
    localStorage.setItem('IndexSongPlaying', index);
    localStorage.setItem('PlaylistSong', JSON.stringify(currentPlaylistNoapi));
  }

  useEffect(() => {
    if (selectedPlaylistIdUrl) {
      dispatch({
        dataIdNoapi: selectedPlaylistIdUrl,
        type: reducerCases.SET_ID_PLAYLIST_NO_API
      });
    }
  }, [props.clickSong])


  // no api
  useEffect(() => {
    arrayPlaylist.map((item, index) => {
      if (item.id === selectedPlaylistIdUrl) {
        let dataPlaylistNoapi = item;

        dispatch({
          dataCurrentNamePlaylist: dataPlaylistNoapi, type: reducerCases.SET_INFO_NAME_PLAYLIST
        });

        dispatch({ dataPlaylistNoapi: dataPlaylistNoapi.tracks, type: reducerCases.SET_CURRENT_PLAYING_NO_API });
      }
    })

  }, [props.clickSong, selectedPlaylistIdUrl]);

  
  //set current index khi load lại


  // useEffect(() => {
  //   localStorage.setItem('PlaylistSong', JSON.stringify(currentPlaylistNoapi));
  //   localStorage.setItem('IndexSongPlaying', IndexSong);

  //   console.log("trong playlist", IndexSong);
  // }, [currentPlaylistNoapi, IndexSong])

  // ///////////////////////////////////////////////////////////////////////////
  // useEffect(() => {
  //   if (selectedPlaylistIdUrl) {
  //     dispatch({ dataSelectedPlaylistId: selectedPlaylistIdUrl, type: reducerCases.SET_SELECTEDPLAYLISTID });
  //   }
  // }, [selectedPlaylistId, selectedPlaylistIdUrl]);

  // useEffect(() => {
  //   try {
  //     const getInfoPlaylist = async () => {

  //       if (selectedPlaylistId && selectedPlaylistId != '' && accessTokenProvider) {
  //         const responseDataPlaylist = await axios.get(
  //           `https://api.spotify.com/v1/playlists/${selectedPlaylistId}`,
  //           {
  //             headers: {
  //               Authorization: "Bearer " + accessTokenProvider,
  //               "Content-Type": "application/json",
  //             }
  //           }
  //         );
  //         if (responseDataPlaylist && responseDataPlaylist.data) {
  //           let setInfoPlaylist = {
  //             id: responseDataPlaylist.data.id,
  //             name: responseDataPlaylist.data.name,
  //             images: responseDataPlaylist.data.images,
  //             description: responseDataPlaylist.data.description,
  //             tracks: responseDataPlaylist.data.tracks,
  //             uri: responseDataPlaylist.data.uri,

  //           }
  //           dispatch({
  //             dataInfoPlaylist: setInfoPlaylist,
  //             type: reducerCases.SET_INFOPLAYLIST,
  //           });
  //         }

  //       }

  //       else if (!accessTokenProvider) {

  //         let refreshToken = sessionStorage.getItem('refreshToken') ? sessionStorage.getItem('refreshToken') : '';
  //         await axios.post(URL_SERVER + '/refresh', {
  //           refreshToken,
  //         })
  //           .then(async (res) => {
  //             const responseDataPlaylistSecond = await axios.get(
  //               `https://api.spotify.com/v1/playlists/${selectedPlaylistId}`,
  //               {
  //                 headers: {
  //                   Authorization: "Bearer " + res.data.accessToken,
  //                   "Content-Type": "application/json",
  //                 }
  //               }
  //             );

  //             if (responseDataPlaylistSecond && responseDataPlaylistSecond.data) {
  //               let setInfoPlaylist = {
  //                 id: responseDataPlaylistSecond.data.id,
  //                 name: responseDataPlaylistSecond.data.name,
  //                 images: responseDataPlaylistSecond.data.images,
  //                 description: responseDataPlaylistSecond.data.description,
  //                 tracks: responseDataPlaylistSecond.data.tracks,
  //                 uri: responseDataPlaylistSecond.data.uri,

  //               }
  //               dispatch({
  //                 dataInfoPlaylist: setInfoPlaylist,
  //                 type: reducerCases.SET_INFOPLAYLIST,
  //               });
  //             }


  //           })
  //           .catch((err) => {
  //             console.log(err);
  //             // window.location = "/";

  //           })
  //       }


  //     };
  //     getInfoPlaylist();
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }, [selectedPlaylistId]);

  const handleTimeDuration = (ms) => {
    // let minutes = Math.floor(ms / 60000);
    let minutes = ((ms / 60000)).toFixed(0);
    let seconds = ((ms % 60000) / 1000).toFixed(0);
    // return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
    return (minutes < 10 ? "0" : "") + minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  }

  // const history = useHistory();
  // console.log("history ", history.location.pathname);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Web Player | Playlist</title>

      </Helmet>
      <div className='home-container' style={{
        color: "white",
        marginTop: "74px"
      }}>
        {/* <button onClick={() => go(-2)}>Go 2 pages back</button>
        <button onClick={goBack}>Go back</button>
        <button onClick={goForward}>Go forward</button>
        <button onClick={() => go(2)}>Go 2 pages forward</button> */}
        <div className="container container-playlist">
          <div className="media-container playlist-header">
            <div className="media-left-img">
              <figure className='img-media'>
                <img src={currentNamePlaylist && currentNamePlaylist.image
                  && currentNamePlaylist.image.url
                  ? currentNamePlaylist.image.url : noImgPlaylist} alt="img-playlist" />
              </figure>

            </div>
            <div className="media-content">
              <div className="media-content-title">
                {currentNamePlaylist && currentNamePlaylist.name ? currentNamePlaylist.name : "Đang tải"}
              </div>
              <div className="media-content-update">
                Cập nhật ngày: 28/05/2022
              </div>
              <div className="media-content-artist">
                {
                  currentNamePlaylist && currentNamePlaylist.tracks && currentNamePlaylist.tracks.length > 0 ?
                    currentNamePlaylist.tracks.map((value, index) => {
                      return (
                        value.artists.map((artist, index2) => {
                          return (
                            <span className="name-singer-content" key={index2}>
                              {artist},
                            </span>
                          )
                        })


                      )
                    }) : (
                      <span className="media-content-artist-name" >
                        Không có nghệ sĩ nào
                      </span>
                    )
                }
              </div>
              <div className="media-content-continue-play">
                <div className='icon-media-continue-play'>
                  <Play
                    color={'#ffffff'}
                    height="16px"
                    width="16px"
                  />
                </div>
                <div className='title-media-continue-play'>
                  Tiếp tục phát
                </div>

              </div>
            </div>
          </div>
          <div className="playlist-right">
            <div className="playlist-title">
              <span>Lời tựa</span>
              Va vào những giai điệu chill khó cưỡng của V-Pop
            </div>
            <div className="list-music">
              <div className="list-music-header select-header">
                <div className="list-music-header--songs">
                  <div className="icon-list-songs">
                    <MusicalNote
                      color={'#ffffff80'}
                      height="16px"
                      width="16px"
                    />
                  </div>
                  <div className="title-list-songs">
                    Bài hát
                  </div>
                </div>
                <div className="list-music-header--albums">
                  album
                </div>
                <div className="list-music-header--duration">
                  thời gian
                </div>
              </div>
              {
                currentPlaylistNoapi && currentPlaylistNoapi.length > 1 ?
                  currentPlaylistNoapi.map((value, index) => {

                    return (
                      <div className={
                        (index === JSON.parse(localStorage.getItem('IndexSongPlaying')))
                          && (value.id === JSON.parse(localStorage.getItem('PlaylistSong'))[JSON.parse(localStorage.getItem('IndexSongPlaying'))].id)
                          ? "list-music-content select-header song active"
                          : "list-music-content select-header song"}

                        key={index}
                        onClick={() => onClickSong(index)}>
                        <div className="list-music-content--songs">
                          <div className="list-music-content--songs--icon">
                            <MusicalNotes
                              color={'#ffffff80'}
                              height="16px"
                              width="16px"
                            />
                          </div>
                          <div className="list-music-content--songs--image">
                            <figure>
                              <img src={value && value.image
                                && value.image.url ? value.image.url : ''} alt="" />

                            </figure>
                          </div>
                          <div className="list-music-content--songs--info">
                            <div className="list-songs--info--name title">
                              <div>
                                {value && value.name ? value.name : ''}
                              </div>
                            </div>
                            <div className="list-songs--info--artist">
                              {value && value && value.artists ?
                                value.artists.map((value, index) => {
                                  return (
                                    <span key={index}>
                                      <span className="list-songs--info--name-artist" >
                                        {value}
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
                        </div>
                        <div className="list-music-content--albums">
                          <div className="album-info">
                            <span>
                              Đang cập nhật....
                              {/* {value.track && value.track.album
                                && value.track.album.name ? value.track.album.name : ''} */}
                            </span>
                          </div>
                        </div>
                        <div className="list-music-content--duration">
                          <div className="level-item-duration">
                            {/* {
                              handleTimeDuration(value.track.duration_ms ? value.track.duration_ms : 0)
                            } */}
                            {value.duration}
                          </div>
                        </div>
                      </div>
                    )
                  }) : ''
              }


              {/* <div className="list-music-content select-header">
                <div className="list-music-content--songs">
                  <div className="list-music-content--songs--icon">
                    <MusicalNotes
                      color={'#ffffff80'}
                      height="16px"
                      width="16px"
                    />
                  </div>
                  <div className="list-music-content--songs--image">
                    <figure>
                      <img src="https://64.media.tumblr.com/4df1966030da5654464d2c3fdfdb30a6/tumblr_pib8ppVAbU1tw3waso1_1280.jpg" alt="" />

                    </figure>
                  </div>
                  <div className="list-music-content--songs--info">
                    <div className="list-songs--info--name">
                      <div>
                        Tình yêu ngủ quên (Chill version)
                      </div>
                    </div>
                    <div className="list-songs--info--artist">
                      <span className='list-songs--info--name-artist'>
                        Hoàng Tôn
                      </span>
                      <span className='commas-songs right-list-songs'>
                        ,
                      </span>
                      <span className='list-songs--info--name-artist'>
                        LyHan
                      </span>
                    </div>
                  </div>
                </div>
                <div className="list-music-content--albums">
                  <div className="album-info">
                    <span>Tình Yêu Ngủ Quên (Chill Version) (Single)</span>
                  </div>
                </div>
                <div className="list-music-content--duration">
                  <div className="level-item-duration">04:29</div>
                </div>
              </div> */}


            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default PlaylistPage