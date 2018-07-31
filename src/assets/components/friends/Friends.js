import React from 'react';
import './friends.scss';
import {NavLink} from 'react-router-dom';
import SearchBar from '../search-bar/SearchBar';
import Avatar from '../../img/avatar.jpg';

class Friends extends React.Component{
    constructor(props){
        super(props);

        this.state = {

        }
    }

    render(){
        return(
            <main className="main">
                <div className="friends">
                    <SearchBar/>
                    <div className="friends__section friends__my-section">
                        <header className="friends__section-header">
                            my profile
                        </header>
                        <ul className="friends__list">
                            <li className="friends__item">
                                <NavLink className ="friends__inner" to="/kakao-study1/friends/profile">
                                    <img src={Avatar} alt="avatar"/>
                                    nicolas
                                </NavLink>
                            </li>
                            <li className="friends__item">
                                <NavLink className ="friends__inner" to="/kakao-study1/friends/profile">
                                    <img src={Avatar} alt="avatar"/>
                                    friends name display
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="friends__section friends__your-section">
                        <header className="friends__section-header">
                            friends
                        </header>
                        <ul className="friends__list">
                            <li className="friends__item">
                                <NavLink className ="friends__inner" to="/kakao-study1/friends/profile">
                                    <img src={Avatar} alt="avatar"/>
                                    friends name display
                                </NavLink>
                            </li>
                            <li className="friends__item">
                                <NavLink className ="friends__inner" to="/kakao-study1/friends/profile">
                                    <img src={Avatar} alt="avatar"/>
                                    friends name display
                                </NavLink>
                            </li>
                        </ul>
                    </div>






                </div>
            </main>
        )
    }
}


export default Friends;