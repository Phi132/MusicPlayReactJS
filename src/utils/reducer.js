import React from 'react'
import { reducerCases } from './Constains';

export const initalState = {
    URL_SERVER: "https://musicplayerbe1.herokuapp.com",
    URL_WEBSITE: "http://localhost:3000/",
    accessTokenProvider: null,
    playLists: [],
    owner: null,
    selectedPlaylistId: '',
    infoPlaylist: null,
    currentPlaying: null,
    // no api
    selectedPlaylistIdNOAPI: '',
    arrayPlaylist: [
        {
            id: "ctbmn1",
            image: { url: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/0/e/0/d/0e0d716e78d3c41be8e661cd7ef3d485.jpg' },
            name: "Lofi Một Chút Thôi",
            tracks: [
                {
                    id: "/playlistpage/ctbmn1_song1",
                    image: { url: "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_webp/cover/b/b/4/f/bb4fc8bc51afc82eb63cabc68b6e42da.jpg" },
                    name: "Phượng Buồn",
                    artists: [
                        "Quốc Lượng",
                        "H2K",
                    ],
                    duration: "02:41",
                    uri: "/assets/song/ctbmn1/song1.mp3",
                },
                {
                    id: "/playlistpage/ctbmn1_song2",
                    image: { url: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/f/8/d/7/f8d715152be52e11c7397aca0029de3f.jpg" },
                    name: "em bỏ hút thuốc chưa? (liu riu version)",
                    artists: [
                        "Bích Phương",
                    ],
                    duration: "03:51",
                    uri: "/assets/song/ctbmn1/song2.mp3",
                },
                {
                    id: "/playlistpage/ctbmn1_song3",
                    image: { url: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/c/d/c/9/cdc97c56de2db4b273513653b83113b9.jpg" },
                    name: "Cô Ấy Nói (Lofi Version)",
                    artists: [
                        "Ngô Anh Đạt",
                        "Freak D",
                    ],
                    duration: "05:33",
                    uri: "/assets/song/ctbmn1/song3.mp3",
                }
            ]
        },
        {
            id: "ctbmn2",
            image: { url: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/d/a/c/6/dac69cd1300a635c193c0f03e8d6d617.jpg' },
            name: "Playlist Này Chill Phết",
            tracks: [
                {
                    id: "/playlistpage/ctbmn2_song1",
                    image: { url: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/2/b/6/c/2b6c98314c36538ce556ff99c6a5e33f.jpg" },
                    name: "Em Là Hoàng Hôn",
                    artists: [
                        "Vang",
                        "Cloud 5",
                    ],
                    duration: "03:43",
                    uri: "/assets/song/ctbmn2/song1.mp3",
                },
                {
                    id: "/playlistpage/ctbmn2_song2",
                    image: { url: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/9/4/e/e/94ee19e2a027ec737edfc167598f5a65.jpg" },
                    name: "Cứ Nói Yêu Lần Này",
                    artists: [
                        "Lil Z",
                    ],
                    duration: "03:09",
                    uri: "/assets/song/ctbmn2/song2.mp3",
                },
                {
                    id: "/playlistpage/ctbmn2_song3",
                    image: { url: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/8/b/8/0/8b80337d881796195732edd7154fdcdc.jpg" },
                    name: "GPS",
                    artists: [
                        "Pixel Neko",
                        "Mỹ Anh",
                        "Lost Owl",
                        "Nam Ngô",
                    ],
                    duration: "03:59",
                    uri: "/assets/song/ctbmn2/song3.mp3",
                }
            ]
        },
        {
            id: "ctbmn3",
            image: { url: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/7/2/6/d/726d82b807aef1539e373b3cae29dafb.jpg' },
            name: "Chàng Trai Indie Việt",
            tracks: [
                {
                    id: "/playlistpage/ctbmn3_song1",
                    image: { url: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/0/8/5/0/0850b7d79b732fd99e3383909f807d58.jpg" },
                    name: "Dù Cho Mai Về Sau",
                    artists: [
                        "buitruonglinh",
                    ],
                    duration: "03:54",
                    uri: "/assets/song/ctbmn3/song1.mp3",
                },
                {
                    id: "/playlistpage/ctbmn3_song2",
                    image: { url: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/b/e/3/c/be3c44f7bb2d76e510905b218499d408.jpg" },
                    name: "Có Em",
                    artists: [
                        "Madihu",
                        "Low G",
                    ],
                    duration: "03:39",
                    uri: "/assets/song/ctbmn3/song2.mp3",
                },
                {
                    id: "/playlistpage/ctbmn3_song3",
                    image: { url: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/7/1/7/8/7178cafc2f44b59b8c535d9d73c8d502.jpg" },
                    name: "Kẻ Cô Đơn Trong Thành Phố",
                    artists: [
                        "Khải",
                    ],
                    duration: "03:29",
                    uri: "/assets/song/ctbmn3/song3.mp3",
                },
                {
                    id: "/playlistpage/ctbmn3_song4",
                    image: { url: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/e/2/5/b/e25b4db6440e1b062562836b9d687418.jpg" },
                    name: "Ánh Sao Và Bầu Trời",
                    artists: [
                        "T.R.I",
                    ],
                    duration: "04:21",
                    uri: "/assets/song/ctbmn3/song4.mp3",
                },
                {
                    id: "/playlistpage/ctbmn3_song5",
                    image: { url: "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_webp/cover/5/d/7/6/5d76f8f71c270b8e2adb413ae524037c.jpg" },
                    name: "Về Bên Anh",
                    artists: [
                        "Jack",
                    ],
                    duration: "04:10",
                    uri: "/assets/song/ctbmn3/song5.mp3",
                },
                {
                    id: "/playlistpage/ctbmn3_song6",
                    image: { url: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/b/e/4/1/be41a10a794e7b1be1662e0128a816be.jpg" },
                    name: "tiny love",
                    artists: [
                        "Thịnh Suy",
                    ],
                    duration: "02:38",
                    uri: "/assets/song/ctbmn3/song6.mp3",
                },
                {
                    id: "/playlistpage/ctbmn3_song7",
                    image: { url: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_png/covers/a/a/aadb09102b0a091ea39d6e6f670d4426_1513155952.png" },
                    name: "Một Điều Mà Anh Rất Ngại Nói Ra",
                    artists: [
                        "Hải Sâm",
                    ],
                    duration: "03:23",
                    uri: "/assets/song/ctbmn3/song7.mp3",
                },
                {
                    id: "/playlistpage/ctbmn3_song8",
                    image: { url: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/9/6/6/9/9669f2d1309d75c957e75935d18fab0d.jpg" },
                    name: "Blue Tequila",
                    artists: [
                        "Táo",
                    ],
                    duration: "03:23",
                    uri: "/assets/song/ctbmn3/song8.mp3",
                },
            ]
        },
        {
            id: "ctbmn4",
            image: { url: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/5/0/0/9/50094605dd9408b52d040c7ae2413e1d.jpg' },
            name: "Rap Việt Cực Chất",
            tracks: [
                {
                    id: "/playlistpage/ctbmn4_song1",
                    image: { url: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/3/0/7/4/30746500c0291bb258cdea468f4beb2f.jpg" },
                    name: "Upside Down",
                    artists: [
                        "Dế Choắt",
                    ],
                    duration: "04:17",
                    uri: "/assets/song/ctbmn4/song1.mp3",
                },
                {
                    id: "/playlistpage/ctbmn4_song2",
                    image: { url: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/3/0/7/4/30746500c0291bb258cdea468f4beb2f.jpg" },
                    name: "Upside Down",
                    artists: [
                        "Dế Choắt",
                    ],
                    duration: "04:17",
                    uri: "/assets/song/ctbmn4/song1.mp3",
                },
                {
                    id: "/playlistpage/ctbmn4_song3",
                    image: { url: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/3/0/7/4/30746500c0291bb258cdea468f4beb2f.jpg" },
                    name: "Upside Down",
                    artists: [
                        "Dế Choắt",
                    ],
                    duration: "04:17",
                    uri: "/assets/song/ctbmn4/song1.mp3",
                },
                {
                    id: "/playlistpage/ctbmn4_song4",
                    image: { url: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/3/0/7/4/30746500c0291bb258cdea468f4beb2f.jpg" },
                    name: "Upside Down",
                    artists: [
                        "Dế Choắt",
                    ],
                    duration: "04:17",
                    uri: "/assets/song/ctbmn4/song1.mp3",
                },
                {
                    id: "/playlistpage/ctbmn4_song5",
                    image: { url: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/3/0/7/4/30746500c0291bb258cdea468f4beb2f.jpg" },
                    name: "Upside Down",
                    artists: [
                        "Dế Choắt",
                    ],
                    duration: "04:17",
                    uri: "/assets/song/ctbmn4/song1.mp3",
                },
                {
                    id: "/playlistpage/ctbmn4_song6",
                    image: { url: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/3/0/7/4/30746500c0291bb258cdea468f4beb2f.jpg" },
                    name: "Upside Down",
                    artists: [
                        "Dế Choắt",
                    ],
                    duration: "04:17",
                    uri: "/assets/song/ctbmn4/song1.mp3",
                },
            ]
        },
        {
            id: "ctbmn5",
            image: { url: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/5/6/2/8/5628b8359ece56c5443ce8b9da6e1e62.jpg' },
            name: "Hip-Hop Now",
            tracks: [
                {
                    id: "/playlistpage/ctbmn5_song1",
                    image: { url: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/e/7/b/5/e7b5b51e9ce0d4327ffd811c9815770c.jpg" },
                    name: "True Love",
                    artists: [
                        "Kanye West",
                        "Xxxtentacion"
                    ],
                    duration: "02:29",
                    uri: "/assets/song/ctbmn5/song1.mp3",
                },
                {
                    id: "/playlistpage/ctbmn5_song2",
                    image: { url: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/e/7/b/5/e7b5b51e9ce0d4327ffd811c9815770c.jpg" },
                    name: "True Love",
                    artists: [
                        "Kanye West",
                        "Xxxtentacion"
                    ],
                    duration: "02:29",
                    uri: "/assets/song/ctbmn5/song1.mp3",
                },
                {
                    id: "/playlistpage/ctbmn5_song3",
                    image: { url: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/e/7/b/5/e7b5b51e9ce0d4327ffd811c9815770c.jpg" },
                    name: "True Love",
                    artists: [
                        "Kanye West",
                        "Xxxtentacion"
                    ],
                    duration: "02:29",
                    uri: "/assets/song/ctbmn5/song1.mp3",
                },
                {
                    id: "/playlistpage/ctbmn5_song4",
                    image: { url: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/e/7/b/5/e7b5b51e9ce0d4327ffd811c9815770c.jpg" },
                    name: "True Love",
                    artists: [
                        "Kanye West",
                        "Xxxtentacion"
                    ],
                    duration: "02:29",
                    uri: "/assets/song/ctbmn5/song1.mp3",
                },
                {
                    id: "/playlistpage/ctbmn5_song5",
                    image: { url: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/e/7/b/5/e7b5b51e9ce0d4327ffd811c9815770c.jpg" },
                    name: "True Love",
                    artists: [
                        "Kanye West",
                        "Xxxtentacion"
                    ],
                    duration: "02:29",
                    uri: "/assets/song/ctbmn5/song1.mp3",
                },
                {
                    id: "/playlistpage/ctbmn5_song6",
                    image: { url: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/e/7/b/5/e7b5b51e9ce0d4327ffd811c9815770c.jpg" },
                    name: "True Love",
                    artists: [
                        "Kanye West",
                        "Xxxtentacion"
                    ],
                    duration: "02:29",
                    uri: "/assets/song/ctbmn5/song1.mp3",
                },
                {
                    id: "/playlistpage/ctbmn5_song7",
                    image: { url: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/e/7/b/5/e7b5b51e9ce0d4327ffd811c9815770c.jpg" },
                    name: "True Love",
                    artists: [
                        "Kanye West",
                        "Xxxtentacion"
                    ],
                    duration: "02:29",
                    uri: "/assets/song/ctbmn5/song1.mp3",
                },
                {
                    id: "/playlistpage/ctbmn5_song8",
                    image: { url: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/e/7/b/5/e7b5b51e9ce0d4327ffd811c9815770c.jpg" },
                    name: "True Love",
                    artists: [
                        "Kanye West",
                        "Xxxtentacion"
                    ],
                    duration: "02:29",
                    uri: "/assets/song/ctbmn5/song1.mp3",
                },
            ]
        },
        {
            id: "ctbmn6",
            image: { url: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/f/8/9/4/f894cfeac46ee340ff4d92fa06e50c92.jpg' },
            name: "K-Pop Hot Summer",
            tracks: [
                {
                    id: "/playlistpage/ctbmn6_song1",
                    image: { url: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/b/6/4/b/b64b9bc077f35f2ed79c6e5b019e81ea.jpg" },
                    name: "AS IF IT'S YOUR LAST",
                    artists: [
                        "BLACKPINK"
                    ],
                    duration: "03:33",
                    uri: "/assets/song/ctbmn6/song1.mp3",
                },
                {
                    id: "/playlistpage/ctbmn6_song2",
                    image: { url: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/b/6/4/b/b64b9bc077f35f2ed79c6e5b019e81ea.jpg" },
                    name: "AS IF IT'S YOUR LAST",
                    artists: [
                        "BLACKPINK"
                    ],
                    duration: "03:33",
                    uri: "/assets/song/ctbmn6/song1.mp3",
                },
                {
                    id: "/playlistpage/ctbmn6_song3",
                    image: { url: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/b/6/4/b/b64b9bc077f35f2ed79c6e5b019e81ea.jpg" },
                    name: "AS IF IT'S YOUR LAST",
                    artists: [
                        "BLACKPINK"
                    ],
                    duration: "03:33",
                    uri: "/assets/song/ctbmn6/song1.mp3",
                },
                {
                    id: "/playlistpage/ctbmn6_song4",
                    image: { url: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/b/6/4/b/b64b9bc077f35f2ed79c6e5b019e81ea.jpg" },
                    name: "AS IF IT'S YOUR LAST",
                    artists: [
                        "BLACKPINK"
                    ],
                    duration: "03:33",
                    uri: "/assets/song/ctbmn6/song1.mp3",
                },
                {
                    id: "/playlistpage/ctbmn6_song5",
                    image: { url: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/b/6/4/b/b64b9bc077f35f2ed79c6e5b019e81ea.jpg" },
                    name: "AS IF IT'S YOUR LAST",
                    artists: [
                        "BLACKPINK"
                    ],
                    duration: "03:33",
                    uri: "/assets/song/ctbmn6/song1.mp3",
                },
                {
                    id: "/playlistpage/ctbmn6_song6",
                    image: { url: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/b/6/4/b/b64b9bc077f35f2ed79c6e5b019e81ea.jpg" },
                    name: "AS IF IT'S YOUR LAST",
                    artists: [
                        "BLACKPINK"
                    ],
                    duration: "03:33",
                    uri: "/assets/song/ctbmn6/song1.mp3",
                },
                {
                    id: "/playlistpage/ctbmn6_song7",
                    image: { url: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/b/6/4/b/b64b9bc077f35f2ed79c6e5b019e81ea.jpg" },
                    name: "AS IF IT'S YOUR LAST",
                    artists: [
                        "BLACKPINK"
                    ],
                    duration: "03:33",
                    uri: "/assets/song/ctbmn6/song1.mp3",
                },

            ]
        },
    ],
    myplaylist: [
        {
            id: "/mymusic_01",
            name: "Sóng",
            artists: ["Dzàng Hoàng", "Thúy Anh ", " Bảo Nguyên"],
            uri: "/assets/song/mymusic/song1.mp3",
            image: { url: "/assets/img/song1_img.jpg" },
            duration: "05:05"
        },
        {
            id: "/mymusic_02",
            name: "Đã Từng",
            artists: [
                "Bùi Anh Tuấn ",
                "Dương Hoàng Yến"],
            uri: "/assets/song/mymusic/song2.mp3",
            image:
                { url: "/assets/img/song2_img.jpg" },
            duration: "04:56"
        },
        {
            id: "/mymusic_03",
            name: "Suýt Nữa Thì",
            artists: ["Andiez",],
            uri: "/assets/song/mymusic/song3.mp3",
            image:
                { url: "/assets/img/song3_img.jpg" },
            duration: "04:43"
        },
        {
            id: "/mymusic_04",
            name: "Ngày Mai Em Đi (Touliver Mix)",
            artists: ["Touliver", "Lê Hiếu", "SooBin"],
            uri: "/assets/song/mymusic/song4.mp3",
            image:
                { url: "/assets/img/song4_img.jpg" },
            duration: "03:38"
        },
        {
            id: "/mymusic_05",
            name: "Giả Vờ Nhưng Em Yêu Anh",
            artists: ["Miu Lê"],
            uri: "/assets/song/mymusic/song5.mp3",
            image:
                { url: "/assets/img/song5_img.jpg" },
            duration: "03:54"
        },
        {
            id: "/mymusic_06",
            name: "Muộn Rồi Mà Sao Còn",
            artists: ["Sơn Tùng M-TP"],
            uri: "/assets/song/mymusic/song6.mp3",
            image:
                { url: "/assets/img/song6_img.jpg" },
            duration: "04:35"
        },
        {
            id: "/mymusic_07",
            name: "STAY",
            artists: ["Justin Bieber"],
            uri: "/assets/song/mymusic/song7.mp3",
            image:
                { url: "/assets/img/song7_img.jpg" },
            duration: "02:21"
        },
        {
            id: "/mymusic_08",
            name: "Heartbreak Anniversary",
            artists: ["Giveon"],
            uri:
                "/assets/song/mymusic/song8.mp3",
            image: { url: "/assets/img/song8_img.jpg" },
            duration: "03:16"
        },
        {
            id: "/mymusic_09",
            image: { url: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/3/1/e/3/31e3c0cca618fa62edb760f908d6f3c5.jpg" },
            name: "Phải Chăng Em Đã Yêu?",
            artists: [
                "Juky San",
                "RedT",
            ],
            duration: "03:10",
            uri: "/assets/song/mymusic/song9.mp3",

        },
    ],

    currentPlaylistNoapi: [
        {
            id: "loading01",
            name: "Đang tải...",
            artists: ["Đang tải...."],
            uri: "loading",
            image: { url: "Đang tải" },
            duration: "00:00"
        }
    ], // array bài nhạc để phát nhạc
    currentNamePlaylist: {}, // tên playlist để thể hiện
    IndexSong: 0,
    playWhenChangePlaylist: {},// để phát nhạc khi click vào playlist
};

const reducer = (state = initalState, action) => {
    switch (action.type) {
        case reducerCases.SET_TOKEN:
            let subState = { ...state };
            subState.accessTokenProvider = action.accessTokenProvider;
            return {
                ...subState,
            };

        case reducerCases.SET_OWNER:
            let subStateOwner = { ...state };
            subStateOwner.owner = action.owner;
            return {
                ...subStateOwner,
            };

        case reducerCases.SET_PLAYLIST:
            let subStatePlayLists = { ...state };
            subStatePlayLists.playLists = action.playLists;

            return {
                ...subStatePlayLists,
            };
        case reducerCases.SET_SELECTEDPLAYLISTID:
            let subStatePlaylistId = { ...state };
            subStatePlaylistId.selectedPlaylistId = action.dataSelectedPlaylistId;
            return {
                ...subStatePlaylistId,
            };

        case reducerCases.SET_INFOPLAYLIST:
            let subStatePlaylistInfo = { ...state };
            subStatePlaylistInfo.infoPlaylist = action.dataInfoPlaylist;
            // console.log(subStatePlaylistInfo.infoPlaylist);
            return {
                ...subStatePlaylistInfo,
            };

        case reducerCases.SET_CURRENT_PLAYING_TRACK:
            let subStateCurrentPlaying = { ...state };
            subStateCurrentPlaying.currentPlaying = action.dataCurrentPlaying;
            // console.log("chạy ",subStateCurrentPlaying.currentPlaying);
            return {
                ...subStateCurrentPlaying,
            };
        // NO API
        case reducerCases.SET_ID_PLAYLIST_NO_API:
            let idNoapi = { ...state };
            idNoapi.selectedPlaylistIdNOAPI = action.dataIdNoapi;

            return {
                ...idNoapi,
            };

        case reducerCases.SET_CURRENT_PLAYING_NO_API:
            let playlistNoapi = { ...state };
            playlistNoapi.currentPlaylistNoapi = action.dataPlaylistNoapi;
            // console.log("chạy playlistNoapi ", playlistNoapi);
            return {
                ...playlistNoapi,
            };

        case reducerCases.SET_INFO_NAME_PLAYLIST:
            let namePLaylist = { ...state };
            namePLaylist.currentNamePlaylist = action.dataCurrentNamePlaylist;
            return {
                ...namePLaylist,
            };

        case reducerCases.SET_INDEX_SONG:
            let indexsongg = { ...state };
            indexsongg.IndexSong = action.dataIndexSong;
            return {
                ...indexsongg,
            };

        case reducerCases.SET_CHANGE_PLAYLIST_PLAYING:
            let tmpPlaylist = { ...state };
            tmpPlaylist.playWhenChangePlaylist = action.playWhenChangePlaylist;
            return {
                ...tmpPlaylist,
            };

        default:
            return state;
    };
};
export default reducer;