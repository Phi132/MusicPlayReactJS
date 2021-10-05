import React, { } from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink,

} from "react-router-dom";
const MyMusicActive = (props) => {
    const item = props.mymusicItem
    // let match = useRouteMatch(item.path, { extact: true })
    return (
            <NavLink exact to={item.path} className="nav_item"
                activeClassName="nav_item-active"
            >

                <li className="pro_nav_menu_item">

                    <div className="nav_item-link">
                        {item.label}
                    </div>


                </li>
            </NavLink>

    )


}
export default MyMusicActive;