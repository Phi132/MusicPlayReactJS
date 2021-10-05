import React from 'react';

const Album = (props) => {

    return (
        <div className="artist-container" >
            <div className="artist-content" >
                <div className="artist-icon-text">
                    <div className="icon icon-album">

                    </div>
                    <div className="content-artist">
                        <div className="content-music-option">
                            Không có Album trong thư viện nhạc cá nhân
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Album;