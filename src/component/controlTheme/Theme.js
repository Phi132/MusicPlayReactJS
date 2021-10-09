import { createGlobalStyle } from 'styled-components';
export const blackTheme = {
    primaryBg: '#413d3d',
    textPrimary: '#fff',
    layoutbBg: '#1e1e1e',
    sidebarBg: "hsla(0, 0%, 100%, 0.05)",
    sidebarAct: '#dbb',
    purplePrimary: '#e099ff',
    seatchText: '#282828',
    playerText: '#fff',
    alphaBg: 'hsla(0,0%,100%,0.1)',
    linkTextHover: '#c662ef',
    borderPlayer: "hsla(0, 0%, 100%, 0.1)",
    playerBg: '#181818',

}
export const RoseTheme = {
    primaryBg: '#192f60',
    textPrimary: '#dadada',
    layoutbBg: '#101f3f',
    sidebarBg: "hsla(0, 0%, 100%, 0.05)",
    sidebarAct: '#fff',
    seatchText: '#282828',
    playerText: '#fff',
    alphaBg: 'hsla(0,0%,100%,0.1)',
    purplePrimary: '#3460f5',
    linkTextHover: '#6e8ffb',
    borderPlayer: "hsla(0, 0%, 100%, 0.1)",
    playerBg: '#051740',
    bgImg: 'url("https://zmp3-static.zadn.vn/skins/zmp3-v6.1/images/theme-background/rose.jpg")',

};

export const IUxTheme = {
    primaryBg: '#fffffe',
    textPrimary: '#32323d',
    layoutbBg: '#e7dfdd',
    sidebarBg: "rgba(0,0,0,0.05)",
    sidebarAct: '#409abc',
    purplePrimary: '#409abc',
    linkTextHover: '#409abc',
    seatchText: '#282828',
    playerText: '#32323d',
    alphaBg: 'rgba(0,0,0,0.05)',
    borderPlayer: "rgba(0,0,0,0.05)",
    playerBg: '#d0ccc5',
    bgImg: 'url("https://zmp3-static.zadn.vn/skins/zmp3-v6.1/images/theme-background/iu.jpg")',

}

export const redTheme = {
    primaryBg: '#883236',
    textPrimary: '#fff',
    layoutbBg: '#731717',
    sidebarBg: '#7a2922',
    sidebarAct: '#dbb',
    seatchText: '#282828',
    playerText: '#fff',
    alphaBg: 'hsla(0,0%,100%,0.1)',
    purplePrimary: '#e97c7c',
    linkTextHover: '#f36565',
    borderPlayer: "hsla(0, 0%, 100%, 0.1)",
    playerBg: '#5c1212'
};

// config css theme
export const GlobalStyles = createGlobalStyle`
    .musicWeb {
        background-color: ${(props) => props.theme.layoutbBg} ;
        transition: all 1s;
        background-image: ${(props) => props.theme.bgImg};
    }
    .header-search {
        background-color: ${(props) => props.theme.alphaBg};
    }
    .header {
        background-color: ${(props) => props.theme.layoutbBg};
        
        box-shadow: 0 3px 5px #95959557;
    }
    .input-search-header {
        background-color: transparent;
        color: ${(props) => props.theme.textPrimary};
    }
    .header-search i, .input-search-header::placeholder, .slick-prev:before, .slick-next:before,
    .title_music, .name_singer_music span {
        color: ${(props) => props.theme.textPrimary};
    }
    .search-more-click {
        background-color: ${(props) => props.theme.primaryBg};
    }
    .btn-theme, .btn-theme-link {
        background-color: ${(props) => props.theme.alphaBg};
        color: ${(props) => props.theme.textPrimary};
    }
    .btn-option-link, .navbar_menu, .song.active {
        background-color: ${(props) => props.theme.alphaBg};
    }
    .btn-option-link i, .play-all, .list-title,
    .arrow-retreat i, .arrow-advance i, .theme-name {
        color: ${(props) => props.theme.textPrimary};
    }
    .control__theme {
        background-color: ${(props) => props.theme.primaryBg};
    }
    .theme-accept {
        border: 1px solid ${(props) => props.theme.primaryBg};
        background-color: ${(props) => props.theme.layoutbBg};

    }
    .sidebar-btn {
        color: ${(props) => props.theme.textPrimary}
    }
    #id {
        background-color: ${(props) => props.theme.layoutbBg};
    }
    .footer {
        background-color: ${(props) => props.theme.playerBg};
        border-top: 1px solid ${(props) => props.theme.borderPlayer}
    }
    .sidebar {
        background-color: ${(props) => props.theme.sidebarBg};
    }
    .play-all {
        background-color: ${(props) => props.theme.purplePrimary};
    }
    .link-main {
        color: ${(props) => props.theme.textPrimary};
    }
    .sidebar-libary,.sidebar-libary-personal {
        color: ${(props) => props.theme.textPrimary}
    }
    
    .receive-vip, .log-out, .profile_cnt_name, .nav_item-link,
    .song-list-header, .name .title, .timeSong {
        color: ${(props) => props.theme.textPrimary};
    }
    .sidebar-active {
        border-left: 3px solid ${(props) => props.theme.purplePrimary} !important;
        color: ${(props) => props.theme.sidebarAct};
    }
    .song.active .title, .song.active .author, .song.active .option {
        color: ${(props) => props.theme.purplePrimary};
    }
    .type-main a:hover, .nav_item-link:hover {
        color: ${(props) => props.theme.linkTextHover} !important;
    }
    .playlist-section_title:hover .title-section, .playlist-section_title:hover .icon-section i {
        color:${(props) => props.theme.linkTextHover};
    }
    .name_carousel_music:hover, .control .btn:hover .btn-prev-song,
    .control .btn:hover .btn-next-song {
        color:${(props) => props.theme.linkTextHover};
    }
    .list-title:hover, .list-title:hover i, .close--theme i {
        color:${(props) => props.theme.linkTextHover};
    }
    .progress-bar {
        background-color:${(props) => props.theme.linkTextHover};
    }
    .progress-bar_volume {
        background-color:${(props) => props.theme.linkTextHover};
    }
    .play__music {
        border-top: 1px solid ${(props) => props.theme.borderPlayer};
    }
    .link-libary-item span:hover {
        color: ${(props) => props.theme.linkTextHover};
    }
    .sidebar-btn:hover {
        color: ${(props) => props.theme.linkTextHover};
    }
    .name-song, .name-singer {
        color: ${(props) => props.theme.playerText};
    }
    .time-left-song, .time-right-song {
        color: ${(props) => props.theme.playerText};
    }
    .control .btn, .volume-icon {
        color: ${(props) => props.theme.playerText};
    }
    .control .btn-toggle-play {
        border: 2px solid ${(props) => props.theme.playerText};
    }
    .title-section, .icon-section i, .content-music-option {
        color: ${(props) => props.theme.textPrimary}
    }
`;




