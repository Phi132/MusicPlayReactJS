
const galleryItem = document.getElementsByClassName('gallery-item')
var itemFirst = -1;
var removeFirst = -2;

var itemPrevious = 0;
var removePrevious = -1;

var itemSelected = 1;
var removeSelected = 0;

var itemNext = 2;
var removeNext = 1;

var LastNum = 3;
var removeLast = 2;

var itemAdd = 4;
var removeAdd = 3;
setInterval(() => {
    //first
    if (itemFirst === 5) {
        itemFirst = 0
    }
    else {
        itemFirst += 1;
    }

    if (removeFirst === -2) {
        removeFirst = -1;
    }
    else if (removeFirst === 5) {
        removeFirst = 0;
    }
    else {
        removeFirst += 1;
    }

    //previous
    if (itemPrevious === 5) {
        itemPrevious = 0;
    }
    else {
        itemPrevious += 1;
    }
    if (removePrevious === 5) {
        removePrevious = 0;
    }
    else {
        removePrevious += 1;
    }
    //selected
    if (itemSelected === 5) {
        itemSelected = 0;
    }
    else {
        itemSelected += 1;
    }
    if (removeSelected === 5) {
        removeSelected = 0;
    }
    else {
        removeSelected += 1;
    }
    //Next 
    if (itemNext === 5) {
        itemNext = 0;
    }
    else {
        itemNext += 1;
    }
    if (removeNext === 5) {
        removeNext = 0
    }
    else {
        removeNext += 1;
    }
    //Last
    if (LastNum < 5 && LastNum > -1) {
        LastNum += 1;
    }
    else if (LastNum === 5) {
        LastNum = 0;
    }
    if (removeLast === 5) {
        removeLast = 0;
    }
    else {
        removeLast += 1;
    }

    //Add
    if (itemAdd === 5) {
        itemAdd = 0;
    }
    else {
        itemAdd += 1;
    }
    if (removeAdd === 5) {
        removeAdd = 0;
    }
    else {
        removeAdd += 1;
    }
    /*console.log('first,',itemFirst,removeFirst)
    console.log('prev,',itemPrevious, removePrevious)
    console.log('selected,',itemSelected, removeSelected)
    console.log('next,',itemNext, removeNext)
    console.log('add,',itemAdd, removeAdd)*/

    //first
    if (galleryItem[removeFirst] == undefined) {

    } else {
        galleryItem[removeFirst].classList.remove('gallery-item-first');
        galleryItem[itemFirst].classList.add('gallery-item-first');
        //previous
        galleryItem[removePrevious].classList.remove('gallery-item-previous');
        galleryItem[itemPrevious].classList.add('gallery-item-previous');
        //selected
        galleryItem[removeSelected].classList.remove('gallery-item-selected');
        galleryItem[itemSelected].classList.add('gallery-item-selected');
        //next
        galleryItem[removeNext].classList.remove('gallery-item-next');
        galleryItem[itemNext].classList.add('gallery-item-next');
        //last
        galleryItem[removeLast].classList.remove('gallery-item-last');
        galleryItem[LastNum].classList.add('gallery-item-last');
        //add
        galleryItem[removeAdd].classList.remove('gallery-item-add');
        galleryItem[itemAdd].classList.add('gallery-item-add');
    }



}, 3000)

//theme
var btnClose = $('.close--theme')
var overlayTheme = $('.overlay__theme')
var btnTheme = $('button.btn-theme');

btnClose.click(() => {
    overlayTheme.css("display", "none");
})

btnTheme.click(() => {
    overlayTheme.css("display", "block");


})
//change theme black
var toggleSwitchTheme = $('.option--accept');
var currentTheme = JSON.parse(localStorage.getItem('theme'));
var isBlack = false;

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'black') {
        isBlack = true;
        console.log(isBlack)
    }
}
////////////////////////////////////////////////
//owl carousel
// $(document).ready(function () {
//     $('.owl-carousel').owlCarousel({
//         loop: true,
//         margin: 10,
//         responsiveClass: true,
//         mouseDrag: false,
//         responsive: {
//             0: {
//                 items: 1,
//                 nav: true
//             },
//             600: {
//                 items: 3,
//                 nav: false
//             },
//             1000: {
//                 items: 5,
//                 nav: true,
//                 loop: false
//             }
//         }
//     })

// });
//////////////////////////////////////////////////////
//body home
// animation c???a gallery item

///////////////////////////////////////////////////////////
//my music
var imgAnimate = document.getElementsByClassName('song-img-item');
var indexFirst = 0;
var prevFirst = -1;
var user = document.querySelector('.music_user');

document.querySelector('.song-img-item.first');
document.querySelectorAll('.pro_nav_menu_item').forEach((item, index) => {
    item.onclick = () => {
        document.querySelector('.pro_nav_menu_item.active').classList.remove('active')
        item.classList.add('active')
    }

})
// cho img ch???y t??? first ?????n third
setInterval(function () {


    if (indexFirst >= 0 && indexFirst < imgAnimate.length - 1) {
        indexFirst += 1;
    }
    else if (indexFirst < 0 || indexFirst >= imgAnimate.length - 1) {
        indexFirst = 0
    }

    if (prevFirst >= -1 && prevFirst < imgAnimate.length - 1) {
        prevFirst += 1;
    }
    else if (prevFirst < -1 || prevFirst >= imgAnimate.length - 1) {
        prevFirst = 0;
    }
    else if (indexFirst == 0) {
        prevFirst = imgAnimate.length - 1;
    }
    if (imgAnimate[prevFirst] === undefined) {

    } else {
        imgAnimate[prevFirst].classList.remove('first')
        imgAnimate[indexFirst].classList.remove('second')
        imgAnimate[indexFirst].classList.add('first')

        if (indexFirst + 1 == imgAnimate.length) {
            imgAnimate[0].classList.add('second')

        } else {
            imgAnimate[indexFirst + 1].classList.add('second')
        }
    }



}, 2000)


//////////////////////////////////////////////////////////////
//libary song
// const getItemNavMenu = document.getElementsByClassName('pro_nav_menu_item');

// getItemNavMenu.forEach((item, index) => {

//     item.onclick = (e) => {

//         document.querySelector('.pro_nav_menu_item.active').classList.remove('active')
//         item.classList.add('active')
//     }

// })
    // thay ?????i giao di???n
const changeTheme  =  () => {

    //blue
    optionAcceptBlue.onclick = () => {

        document.querySelector('.overlay__theme').style.display = 'none'
        // ch??a l??u v?? local storage
        document.documentElement.dataset.theme = 'blue'
        document.querySelector('.item__option--image_blue').classList.add('active')
        document.querySelector('.mucsicWeb').style.backgroundImage = 'url(\'https://zmp3-static.zadn.vn/skins/zmp3-v6.1/images/theme-background/rose.jpg\')'

    }
    demoThemeBlue.onclick = () => {
        document.documentElement.dataset.theme = 'blue'
        isClickCloseTheme = true;
        document.querySelector('.close--theme').onclick = () => {
            if (isClickCloseTheme)
                document.documentElement.dataset.theme = ''

        }
    }

    //black
    optionAcceptBlack.onclick = () => {

        document.querySelector('.overlay__theme').style.display = 'none'
        // ch??a l??u v?? local storage
        document.documentElement.dataset.theme = 'black'
        document.querySelector('.item__option--image_black').classList.add('active')
        document.querySelector('.mucsicWeb').removeAttribute("style")

    }
    demoThemeBlack.onclick = () => {
        document.documentElement.dataset.theme = 'black'
        isClickCloseTheme = true;
        document.querySelector('.close--theme').onclick = () => {
            if (isClickCloseTheme)
                document.documentElement.dataset.theme = ''

        }
    }
    //red
    optionAcceptRed.onclick = () => {

        document.querySelector('.overlay__theme').style.display = 'none'
        // ch??a l??u v?? local storage
        document.documentElement.dataset.theme = 'red'
        document.querySelector('.item__option--image_red').classList.add('active')
        document.querySelector('.mucsicWeb').removeAttribute("style")

    }
    demoThemeRed.onclick = () => {
        document.documentElement.dataset.theme = 'red'
        isClickCloseTheme = true;
        document.querySelector('.close--theme').onclick = () => {
            if (isClickCloseTheme)
                document.documentElement.dataset.theme = ''

        }
    }

}
changeTheme();
////////////////////////////////////////////////////////
// //music player
const CONFIG_STORAGE = 'MUSIC_PLAYER';
const arrowRetreat = document.querySelector('.arrow-retreat');
const arrowAdvance = document.querySelector('.arrow-advance');
const playlist = document.querySelector('.playlist');
const playBtn = document.querySelector('.btn-toggle-play');
const progress = document.querySelector('#progress');
const progressVolume = document.querySelector('#progress_volume');

const progressBar = document.querySelector('#progress-bar');
const progressBarVolume = document.querySelector('#progress-bar_volume');
const avt_song = document.querySelector('.avt-song');
const nameSong = document.querySelector('.name-song marquee');
const nameSinger = document.querySelector('.name-singer span');
const audio = document.querySelector('#audio');
const timeLeft = document.querySelector('.time-left-song');
const timeRight = document.querySelector('.time-right-song');
const btnPrevSong = document.querySelector('.btn-prev-song');
const btnNextSong = document.querySelector('.btn-next-song');
const btnRandomSong = document.querySelector('.btn-random');
const btnLoopSong = document.querySelector('.btn-repeat');
const optionAcceptBlue = document.querySelector('.option--accept--blue');
const demoThemeBlue = document.querySelector('.option--demo--blue');
const optionAcceptBlack = document.querySelector('.option--accept--black');
const demoThemeBlack = document.querySelector('.option--demo--black');
const optionAcceptRed = document.querySelector('.option--accept--red');
const demoThemeRed = document.querySelector('.option--demo--red');


const app = {
    currentIndex: 0,
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    isClickBack: false,
    isClickNext: true,
    isMute: false,
    theVolume: 0.5,

    config: JSON.parse(localStorage.getItem(CONFIG_STORAGE)) || {},


    songs: [

        {
            name: "S??ng",
            singer: "Dz??ng Ho??ng x Th??y Anh x B???o Nguy??n",
            path: "/assets/song/song1.mp3",
            image: "/assets/img/song1_img.jpg",
            timeSong: "05:05"
        },
        {
            name: "???? T???ng",
            singer: "B??i Anh Tu???n x D????ng Ho??ng Y???n",
            path: "/assets/song/song2.mp3",
            image:
                "/assets/img/song2_img.jpg",
            timeSong: "04:56"
        },
        {
            name: "Su??t N???a Th??",
            singer: "Andiez",
            path:
                "/assets/song/song3.mp3",
            image: "/assets/img/song3_img.jpg",
            timeSong: "04:43"
        },
        {
            name: "Ng??y Mai Em ??i (Touliver Mix)",
            singer: "Touliver,L?? Hi???u,SooBin",
            path:
                "/assets/song/song4.mp3",
            image: "/assets/img/song4_img.jpg",
            timeSong: "03:38"
        },
        {
            name: "Gi??? V??? Nh??ng Em Y??u Anh",
            singer: "Miu L??",
            path:
                "/assets/song/song5.mp3",
            image: "/assets/img/song5_img.jpg",
            timeSong: "03:55"
        },
        {
            name: "Mu???n R???i M?? Sao C??n",
            singer: "S??n T??ng M-TP",
            path:
                "/assets/song/song6.mp3",
            image: "/assets/img/song6_img.jpg",
            timeSong: "04:35"
        },
    ],
    setConfig: function (key, value) {
        this.config[key] = value;
        localStorage.setItem(CONFIG_STORAGE, JSON.stringify(this.config))
    },
    render: function () {
        const htmls = this.songs.map((song, index) => {
            return `
                        <div class="song ${index === this.currentIndex ? "active" : ""
                }" data-index="${index}">
                            <div class="thumb"
                                style="background-image: url('${song.image}')">
                            </div>
                            <div class="body">
                                <div class="name">
                                    <div class="title">${song.name}</div>
                                    <div class="author">${song.singer}</div>
                                </div>
                                <div class="timeSong">${song.timeSong}</div>
                            </div>
                            <div class="option">
                                <i class="fas fa-ellipsis-h"></i>
                            </div>
                        </div>
                    `;
        });

        playlist.innerHTML = htmls.join("");

    },
    formatTime: function (sec_num) {
        let hours = Math.floor(sec_num / 3600);
        let minutes = Math.floor((sec_num - hours * 3600) / 60);
        let seconds = Math.floor(sec_num - hours * 3600 - minutes * 60);

        hours = hours < 10 ? (hours > 0 ? '0' + hours : 0) : hours;

        if (minutes < 10) {
            minutes = '0' + minutes;
        }
        if (seconds < 10) {
            seconds = '0' + seconds;
        }
        return (hours !== 0 ? hours + ':' : '') + minutes + ':' + seconds;
    },
    getDuration: function (audio, app) {
        return new Promise(function (resolve) {
            audio.onloadedmetadata = function () {
                resolve(app.formatTime(audio.duration));
            }

        });
    },
    //h??m n??y ????? ?????nh ngh??a 1 property.. 
    //nh?? l?? song t???i CurrentIndex s??? ???????c g???i l?? CurrentSong
    defineProperties: function () {
        Object.defineProperty(this, 'currentSong', {
            //getter : th?? ph???i l?? h??m function(){}
            get: function () {
                return this.songs[this.currentIndex]
            }
        })
    },
    scrollToView: function () {
        document.querySelector(".song.active").scrollIntoView({
            behavior: "smooth",
            block: "nearest"
        })
    },
    //???? x??a c???n s???a

    loadCurrentSong: function () {

        avt_song.style.backgroundImage = `url('${this.currentSong.image}')`
        nameSong.textContent = this.currentSong.name;
        nameSinger.textContent = this.currentSong.singer;
        audio.src = this.currentSong.path;
        //console.log(audio.duration);
        this.setConfig('indexStore', this.currentIndex);
    },
    nextSong: function () {
        this.currentIndex++;
        if (this.currentIndex >= this.songs.length) {
            this.currentIndex = 0;
        }
        this.loadCurrentSong();
        this.render();
        this.scrollToView();
    },
    previousSong: function () {
        this.currentIndex--;

        if (this.currentIndex < 0) {
            this.currentIndex = this.songs.length - 1;

            this.loadCurrentSong();
        }
        this.loadCurrentSong();
        this.render();
        this.scrollToView();
    },
    randomSong: function () {
        var indexRandom;
        do {
            indexRandom = Math.floor(Math.random() * this.songs.length)

        }
        while (indexRandom === this.currentIndex)
        this.currentIndex = indexRandom;
        this.loadCurrentSong();
        this.render();
        this.scrollToView();
    },
    handleEvents: function () {
        const _this = this;
        // bug l?? n???u nh???n v??o ??ang active th?? n?? v???n ?????i true th??nh false
        // n??n n?? s??? ?????i m??u ng?????c l???i
        // arrowRetreat.onclick = (e) => {
        //     //e.preventDefault();
        //     _this.isClickBack = !_this.isClickBack
        //     _this.isClickNext = !_this.isClickNext

        //     arrowRetreat.classList.toggle('active-trans-page', _this.isClickBack)
        //     arrowAdvance.classList.toggle('active-trans-page', _this.isClickNext)
        //     _this.setConfig('isClickBack', _this.isClickBack);
        //     _this.setConfig('isClickNext', _this.isClickNext);




        // }
        arrowAdvance.onclick = (e) => {
            //e.preventDefault();
            _this.isClickBack = !_this.isClickBack
            _this.isClickNext = !_this.isClickNext

            // arrowRetreat.classList.toggle('active-trans-page', _this.isClickBack)
            //arrowAdvance.classList.toggle('active-trans-page', _this.isClickNext)
            _this.setConfig('isClickBack', _this.isClickBack);
            _this.setConfig('isClickNext', _this.isClickNext);
        }

        //x??? l?? quay avatar
        const turnAroundAvt = avt_song.animate([
            {
                transform: 'rotate(360deg)'
            }
        ], {
            duration: 10000,
            iterations: Infinity
        })
        turnAroundAvt.pause();
        //X??? l?? random hi???n m??u btn random
        btnRandomSong.onclick = () => {
            app.isRandom = !app.isRandom;
            _this.setConfig('isRandom', _this.isRandom);
            btnRandomSong.classList.toggle('active', app.isRandom);

        }
        // X??? L?? khi ???n v??o Loop hi???n m??u
        btnLoopSong.onclick = () => {
            app.isRepeat = !app.isRepeat;
            _this.setConfig('isRepeat', _this.isRepeat);
            btnLoopSong.classList.toggle('active', app.isRepeat);

        }

        //x??? l?? next song 
        btnNextSong.onclick = () => {
            if (app.isRandom) {
                app.randomSong()
            } else {
                app.nextSong();
            }

            audio.play();
            turnAroundAvt.play();
        };
        btnPrevSong.onclick = () => {
            if (app.isRandom) {
                app.randomSong()
            } else {
                app.previousSong();
            }

            audio.play();
            turnAroundAvt.play();
        }
        // X??? l?? khi click play
        // Handle when click play
        // Xong Click play
        playBtn.onclick = function () {
            if (_this.isPlaying) {
                audio.pause();
                turnAroundAvt.pause();

            } else {
                audio.play();
                turnAroundAvt.play();


            }
        };
        // x??? l?? khi play
        audio.onplay = () => {
            _this.isPlaying = true;
            playBtn.classList.add('playing');

        };
        // khi pause
        audio.onpause = () => {
            _this.isPlaying = false;
            playBtn.classList.remove('playing');

        };
        //Xong ??? tr??n Click play
        var onTua = false;
        // tua b??i h??t
        audio.ontimeupdate = () => {
            if (audio.duration) {
                if (!onTua) {
                    var percentSong = (audio.currentTime / audio.duration * 100);
                    //progress.value = percentSong;
                    progressBar.style.width = `${percentSong}%`
                    //console.log(audio.currentTime)


                }
            }

            timeLeft.innerHTML = `<span>${this.formatTime(audio.currentTime)}</span>`

            this.getDuration(audio, this).then(function (time) {
                timeRight.innerHTML = `<span>${time}</span>`
            })
            // x??? l?? khi click random v?? loop
            var timeRun = audio.currentTime;
            _this.setConfig('currentTime', timeRun);
            var endTime = audio.duration;
            if (timeRun === endTime) {
                if (app.isRandom && !app.isRepeat) {
                    app.randomSong();
                    audio.play();
                }
                else if (!app.isRandom && !app.isRepeat) {
                    app.nextSong();
                    audio.play();
                }
                else if (app.isRepeat && !app.isRandom) {
                    audio.play();
                }
                else {

                    audio.play();
                }


            }

        };
        // x??? l?? khi click v??o b??i h??t
        playlist.onclick = (e) => {


            if (!e.target.closest('.song.active') || e.target.closest('.option')) {
                if (!e.target.closest('.song.active')) {
                    app.currentIndex = Number(e.target.closest('.song').dataset.index);
                    console.log(app.currentIndex)
                    app.render();
                    app.loadCurrentSong();
                    turnAroundAvt.play();
                    audio.play();


                }
            }
        }

        progress.onchange = (e) => {
            onTua = false;
            audio.currentTime = (audio.duration * e.target.value / 100);
            //console.log(audio.currentTime)
        };
        progress.oninput = (e) => {
            onTua = true;
            let percentSong = e.target.value;
            progressBar.style.width = `${percentSong}%`



        };
        //???? x??a c???n s???a
        // volume ban ?????u
        //audio.volume = app.theVolume
        progressBarVolume.style.width = `50%`
        // volume sau khi click v??o thay ?????i
        progressVolume.oninput = (e) => {

            let percentVolume = e.target.value;

            progressBarVolume.style.width = `${percentVolume}%`
            audio.volume = percentVolume / 100
            _this.setConfig('theVolume', percentVolume / 100);
            if (progressBarVolume.style.width === '0%') {
                document.querySelector('.volumeIcon').classList.remove('fa-volume-down')
                document.querySelector('.volumeIcon').classList.add('fa-volume-mute')
            }
            else {
                document.querySelector('.volumeIcon').classList.add('fa-volume-down')
                document.querySelector('.volumeIcon').classList.remove('fa-volume-mute')
            }

        };
        // click v??o mute volume
        document.querySelector('.volume-icon').onclick = (e) => {
            app.isMute = !app.isMute;

            if (app.isMute) {
                audio.volume = 0;
                progressBarVolume.style.width = `0%`
                document.querySelector('.volumeIcon').classList.remove('fa-volume-down')
                document.querySelector('.volumeIcon').classList.add('fa-volume-mute')

            }
            else {
                audio.volume = this.config.theVolume;
                progressBarVolume.style.width = `${this.config.theVolume * 100}%`
                document.querySelector('.volumeIcon').classList.add('fa-volume-down')
                document.querySelector('.volumeIcon').classList.remove('fa-volume-mute')

            }
        }
        //ph??t t???t c???
        $('.option-play-all').click(function () {
            audio.play();
        })

    },
    //thay ?????i giao di???n
    // changeTheme: function () {
    //     var isClickCloseTheme = false;
    //     //blue
    //     optionAcceptBlue.onclick = () => {

    //         document.querySelector('.overlay__theme').style.display = 'none'
    //         // ch??a l??u v?? local storage
    //         document.documentElement.dataset.theme = 'blue'
    //         document.querySelector('.item__option--image_blue').classList.add('active')
    //         document.querySelector('.mucsicWeb').style.backgroundImage = 'url(\'https://zmp3-static.zadn.vn/skins/zmp3-v6.1/images/theme-background/rose.jpg\')'

    //     }
    //     demoThemeBlue.onclick = () => {
    //         document.documentElement.dataset.theme = 'blue'
    //         isClickCloseTheme = true;
    //         document.querySelector('.close--theme').onclick = () => {
    //             if (isClickCloseTheme)
    //                 document.documentElement.dataset.theme = ''

    //         }
    //     }

    //     //black
    //     optionAcceptBlack.onclick = () => {

    //         document.querySelector('.overlay__theme').style.display = 'none'
    //         // ch??a l??u v?? local storage
    //         document.documentElement.dataset.theme = 'black'
    //         document.querySelector('.item__option--image_black').classList.add('active')
    //         document.querySelector('.mucsicWeb').removeAttribute("style")

    //     }
    //     demoThemeBlack.onclick = () => {
    //         document.documentElement.dataset.theme = 'black'
    //         isClickCloseTheme = true;
    //         document.querySelector('.close--theme').onclick = () => {
    //             if (isClickCloseTheme)
    //                 document.documentElement.dataset.theme = ''

    //         }
    //     }
    //     //red
    //     optionAcceptRed.onclick = () => {

    //         document.querySelector('.overlay__theme').style.display = 'none'
    //         // ch??a l??u v?? local storage
    //         document.documentElement.dataset.theme = 'red'
    //         document.querySelector('.item__option--image_red').classList.add('active')
    //         document.querySelector('.mucsicWeb').removeAttribute("style")

    //     }
    //     demoThemeRed.onclick = () => {
    //         document.documentElement.dataset.theme = 'red'
    //         isClickCloseTheme = true;
    //         document.querySelector('.close--theme').onclick = () => {
    //             if (isClickCloseTheme)
    //                 document.documentElement.dataset.theme = ''

    //         }
    //     }

    // },
    loadConfig: function () {
        this.isClickBack = this.config.isClickBack;
        this.isClickNext = this.config.isClickNext;
        this.isRandom = this.config.isRandom;
        this.isRepeat = this.config.isRepeat;
        this.currentIndex = this.config.indexStore;
        //???? x??a c???n s???a
        //audio.currentTime = this.config.currentTime;
        this.theVolume = this.config.theVolume;
    },
    start: function () {

        if (app.config.indexStore) {
            // t???i l???i nh???ng c??i ???? l??u trong local Storage
            this.loadConfig();

            // thay ?????i giao di???n
            this.changeTheme();
            //?????nh ngh??a c??c thu???c t??nh
            this.defineProperties();
            //x??? l?? x??? ki???n cho music
            this.handleEvents();
            //
            this.loadCurrentSong();
            // time play
            //this.timePlay();
            //render l???i danh s??ch b??i h??t
            this.render();
            btnRandomSong.classList.toggle('active', app.isRandom);
            btnLoopSong.classList.toggle('active', app.isRepeat);
            //arrowRetreat.classList.toggle('active-trans-page', app.isClickBack);
            //arrowAdvance.classList.toggle('active-trans-page', app.isClickNext);

            //volume
            progressBarVolume.style.width = `${app.theVolume * 100}%`
        }
        else {
            app.setConfig('indexStore', 0);
            app.setConfig('currentTime', 0);
            app.setConfig('isPlaying', false);
            app.setConfig('isRandom', false);
            app.setConfig('isRepeat', false);
            app.setConfig('theVolume', 0.5);

            //this.loadConfig();
            // thay ?????i giao di???n
            //this.changeTheme();
            //?????nh ngh??a c??c thu???c t??nh
            this.defineProperties();
            //x??? l?? x??? ki???n cho music
            this.handleEvents();
            //
            this.loadCurrentSong();
            // time play
            //this.timePlay();
            //render l???i danh s??ch b??i h??t
            this.render();
            btnRandomSong.classList.toggle('active', app.isRandom);
            btnLoopSong.classList.toggle('active', app.isRepeat);
            //arrowRetreat.classList.toggle('active-trans-page', app.isClickBack);
            //arrowAdvance.classList.toggle('active-trans-page', app.isClickNext);

            //volume
            progressBarVolume.style.width = `${app.theVolume * 100}%`
        }

    }
}
app.start();