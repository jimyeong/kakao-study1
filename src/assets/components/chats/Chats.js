import React from 'react';
import './chats.scss';
import {NavLink} from 'react-router-dom';
import SearchBar from '../search-bar/SearchBar';
import Avatar from '../../img/avatar.jpg';

class Chats extends React.Component{
    constructor(props){
        super(props);

        this.state = {

        }
    }
    render(){
        return(
            <div className="chats">
                <SearchBar/>
                <div className="chats__section chats__my-section">
                    <ul className="chats__list">
                        <li className="chats__item">
                            <NavLink className ="chats__inner" to="/chats/profile">
                                <img src={Avatar} alt="avatar"/>
                                <span className="chats__state">
                                    <span className="chats__name">
                                        jjjj
                                    </span>
                                    hello this is a last-message
                                </span>
                            </NavLink>
                            <span className="chats__date">
                                18.03.21
                            </span>
                        </li>
                        <li className="chats__item">
                            <NavLink className ="chats__inner" to="/chats/profile">
                                <img src={Avatar} alt="avatar"/>
                                <span className="chats__state">
                                    <span className="chats__name">
                                        nicolas
                                    </span>
                                    hello this is a last-message
                                </span>
                            </NavLink>
                            <span className="chats__date">
                                18.03.21
                            </span>
                        </li>
                    </ul>
                </div>
                <div className="chats__section chats__your-section">
                    <ul className="chats__list">
                        <li className="chats__item">
                            <NavLink className ="chats__inner" to="/chats/profile">
                                <img src={Avatar} alt="avatar"/>
                                <span className="chats__state">
                                    <span className="chats__name">
                                        lynn
                                    </span>
                                    hello this is a last-message
                                </span>
                            </NavLink>
                            <span className="chats__date">
                                18.03.21
                            </span>
                        </li>
                        <li className="chats__item">
                            <NavLink className ="chats__inner" to="/chats/profile">
                                <img src={Avatar} alt="avatar"/>
                                <span className="chats__state">
                                    <span className="chats__name">
                                        jjj
                                    </span>
                                    hello this is a last-message
                                </span>
                            </NavLink>
                            <span className="chats__date">
                                18.03.21
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}


export default Chats;