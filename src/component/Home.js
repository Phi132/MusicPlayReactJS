import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useProviderContext } from '../utils/StateProvider';
import noImgPlaylist from '../img/no_playList.PNG';
import { NavLink } from 'react-router-dom';
import { reducerCases } from '../utils/Constains';

const Home = () => {
    const [motionGalleryIndex, setMotionGalleryIndex] = useState(1);
    const [{ arrayPlaylist }] = useProviderContext();

    const index = Number(motionGalleryIndex);
    useEffect(() => {
        if (index > 6) {
            setMotionGalleryIndex(1)
        }
        const increaseIndex = setInterval(() => {
            setMotionGalleryIndex(index + 1);
        }, 3000)

        //console.log(motionGalleryIndex)
        return () => clearInterval(increaseIndex)

    }, [motionGalleryIndex]);
    // hình 1 
    const motion1 = () => {
        if (motionGalleryIndex === 1) {
            return "gallery-item gallery-item-first"
        }
        else if (motionGalleryIndex === 2) {
            return "gallery-item gallery-item-add"
        }
        else if (motionGalleryIndex === 3) {
            return "gallery-item gallery-item-last"
        }
        else if (motionGalleryIndex === 4) {
            return "gallery-item gallery-item-next"
        }
        else if (motionGalleryIndex === 5) {
            return "gallery-item gallery-item-selected"
        }
        else if (motionGalleryIndex === 6) {
            return "gallery-item gallery-item-previous"
        }
    }
    const motiona1 = motion1();
    //hình 2
    const motion2 = () => {
        if (motionGalleryIndex === 1) {
            return "gallery-item gallery-item-previous"
        }
        else if (motionGalleryIndex === 2) {
            return "gallery-item gallery-item-first"
        }
        else if (motionGalleryIndex === 3) {
            return "gallery-item gallery-item-add"
        }
        else if (motionGalleryIndex === 4) {
            return "gallery-item gallery-item-last"
        }
        else if (motionGalleryIndex === 5) {
            return "gallery-item gallery-item-next"
        }
        else if (motionGalleryIndex === 6) {
            return "gallery-item gallery-item-selected"
        }
    }
    const motiona2 = motion2();
    //hình 3
    const motion3 = () => {
        if (motionGalleryIndex === 1) {
            return "gallery-item gallery-item-selected"
        }
        else if (motionGalleryIndex === 2) {
            return "gallery-item gallery-item-previous"
        }
        else if (motionGalleryIndex === 3) {
            return "gallery-item gallery-item-first"
        }
        else if (motionGalleryIndex === 4) {
            return "gallery-item gallery-item-add"
        }
        else if (motionGalleryIndex === 5) {
            return "gallery-item gallery-item-last"
        }
        else if (motionGalleryIndex === 6) {
            return "gallery-item gallery-item-next"
        }
    }
    const motiona3 = motion3();
    //hình 4
    const motion4 = () => {
        if (motionGalleryIndex === 1) {
            return "gallery-item gallery-item-next"
        }
        else if (motionGalleryIndex === 2) {
            return "gallery-item gallery-item-selected"
        }
        else if (motionGalleryIndex === 3) {
            return "gallery-item gallery-item-previous"
        }
        else if (motionGalleryIndex === 4) {
            return "gallery-item gallery-item-first"
        }
        else if (motionGalleryIndex === 5) {
            return "gallery-item gallery-item-add"
        }
        else if (motionGalleryIndex === 6) {
            return "gallery-item gallery-item-last"
        }
    }
    const motiona4 = motion4();
    // hình 5 
    const motion5 = () => {
        if (motionGalleryIndex === 1) {
            return "gallery-item gallery-item-last"
        }
        else if (motionGalleryIndex === 2) {
            return "gallery-item gallery-item-next"
        }
        else if (motionGalleryIndex === 3) {
            return "gallery-item gallery-item-selected"
        }
        else if (motionGalleryIndex === 4) {
            return "gallery-item gallery-item-previous"
        }
        else if (motionGalleryIndex === 5) {
            return "gallery-item gallery-item-first"
        }
        else if (motionGalleryIndex === 6) {
            return "gallery-item gallery-item-add"
        }
    }
    const motiona5 = motion5();
    // hình 6
    const motion6 = () => {
        if (motionGalleryIndex === 1) {
            return "gallery-item gallery-item-add"
        }
        else if (motionGalleryIndex === 2) {
            return "gallery-item gallery-item-last"
        }
        else if (motionGalleryIndex === 3) {
            return "gallery-item gallery-item-next"
        }
        else if (motionGalleryIndex === 4) {
            return "gallery-item gallery-item-selected"
        }
        else if (motionGalleryIndex === 5) {
            return "gallery-item gallery-item-previous"
        }
        else if (motionGalleryIndex === 6) {
            return "gallery-item gallery-item-first"
        }
    }
    const motiona6 = motion6();
    // click previous button
    const onClickPre = () => {
        if (motionGalleryIndex < 2) {
            setMotionGalleryIndex(6);
        }
        else {
            setMotionGalleryIndex(index - 1);
        }

    }
    // click next button
    const onClickNext = () => {
        if (index > 5) {
            setMotionGalleryIndex(1);
        }
        else {
            setMotionGalleryIndex(index + 1);
        }

    }
    // slick carousel
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        draggable: false
    };


    return (
        <>
            <div className="home-container">
                <div className="home-intro-container">
                    <div className="gallery">
                        <div className="gallery-container">
                            <div className="gallery-previous"
                                onClick={onClickPre}
                            >
                                <i className="fas fa-chevron-left"></i>
                            </div>

                            <div className={motiona1}>
                                <div className="music-card">
                                    <div className="music-card-image">
                                        <figure>
                                            <img src="https://photo-zmp3.zadn.vn/banner/0/d/1/1/0d11bf9bb3af26ea5c2bd46860354867.jpg"
                                                alt="" />
                                        </figure>
                                    </div>
                                </div>
                            </div>
                            <div className={motiona2}>
                                <div className="music-card">
                                    <div className="music-card-image">
                                        <figure>
                                            <img src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/3/4/rose-2-1614827659727271147948.jpeg"
                                                alt="" />
                                        </figure>
                                    </div>
                                </div>
                            </div>
                            <div className={motiona3}>
                                <div className="music-card">
                                    <div className="music-card-image">
                                        <figure>
                                            <img src="https://photo-zmp3.zadn.vn/banner/2/1/e/8/21e83922f2a4181dca49b813c89ba1e7.jpg"
                                                alt="" />
                                        </figure>
                                    </div>
                                </div>
                            </div>
                            <div className={motiona4}>
                                <div className="music-card">
                                    <div className="music-card-image">
                                        <figure>
                                            <img src="https://photo-zmp3.zadn.vn/banner/4/8/c/4/48c42169239756dff9b9a2e11db81738.jpg"
                                                alt="" />
                                        </figure>
                                    </div>
                                </div>
                            </div>
                            <div className={motiona5}>
                                <div className="music-card">
                                    <div className="music-card-image">
                                        <figure>
                                            <img src="https://photo-zmp3.zadn.vn/banner/d/6/3/d/d63d99357549edecb8d6a6e0eb1b91d5.jpg"
                                                alt="" />
                                        </figure>
                                    </div>
                                </div>
                            </div>
                            <div className={motiona6}>
                                <div className="music-card">
                                    <div className="music-card-image">
                                        <figure>
                                            <img src="https://photo-zmp3.zadn.vn/banner/a/3/e/3/a3e3829f5f6ac642f6970445a81e58ea.jpg"
                                                alt="" />
                                        </figure>
                                    </div>
                                </div>
                            </div>


                            <div className="gallery-next"
                                onClick={onClickNext}
                            >
                                <i className="fas fa-chevron-right"></i>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="playlist-section-container">
                    <div className="playlist-section-intro-container">
                        <div className="playlist--flex">
                            <div className="playlist-section_title">
                                <div className="title-section">
                                    Có Thể Bạn Muốn Nghe
                                </div>
                                <div className="icon-section">
                                    <i className="fas fa-chevron-right"></i>
                                </div>
                            </div>
                        </div>

                        <div className="playlist-section_carousel">
                            <div className="owl-carousel">
                                <Slider {...settings}>
                                    {
                                        arrayPlaylist && arrayPlaylist.length > 0 &&
                                        arrayPlaylist.map((item, index) => {
                                            // console.log(item);
                                            return (
                                                <NavLink to={`/playlistpage/${item.id}`} key={index}>
                                                    <div className="item">
                                                        <div className="image_music">
                                                            <figure>
                                                                <img className="listened" src={item && item.image && item.image.url ? item.image.url : noImgPlaylist}
                                                                    alt={item.name} />
                                                            </figure>
                                                            <div className="overlay_image_music">
                                                                <div className="overlay__heart">
                                                                    <i className="far fa-heart"></i>
                                                                </div>
                                                                <div className="overlay__play">

                                                                    <i className="fas fa-play icon-play"></i>

                                                                </div>
                                                                <div className="overlay__more">
                                                                    <i className="fas fa-ellipsis-h"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="title_music">
                                                            <div>
                                                                {item.name}
                                                            </div>
                                                        </div>
                                                        <div className="name_singer_music">
                                                            <div className='info-name-singer' >
                                                                {item.tracks && item.tracks && item.tracks.length > 0 ?
                                                                    item.tracks.map((value, index) => {
                                                                        return (
                                                                            value.artists.map((artist, index2) => {
                                                                                return (
                                                                                    <span className="name-singer-content" key={index2}>
                                                                                        {artist},
                                                                                    </span>
                                                                                )
                                                                            })

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
                                                </NavLink>

                                            );
                                        })
                                    }



                                </Slider>


                            </div>
                        </div>

                    </div>



                </div>
            </div>

        </>
    )

}
export default Home;