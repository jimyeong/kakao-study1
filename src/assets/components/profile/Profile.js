import React from 'react';
import './profile.scss';
import Avartar from '../../img/avatar.jpg';


class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }

    render(){
        return(
            <main className="main">
                <div className="profile">
                    <header className="profile-header">
                        <div className="profile__container-header">
                            <img src={Avartar} alt="avartar"/>
                            <span className="profile__name">
                            jjjj
                        </span>
                        </div>
                    </header>
                    <div className="profile__container">
                        <div className="profile__title">
                            <input className="profile__input" type="text" placeholder="bassman92@naver.com"/>
                            <div className="profile__btns">
                                <div className="profile__btn">
                                <span className="profile__circle">
                                    <svg aria-hidden="true" data-prefix="fas" data-icon="comment" className="svg-inline--fa fa-comment fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32z"></path></svg>
                                </span>
                                    <span className="profile__txt1">
                                    my chatroom
                                </span>
                                </div>
                                <div className="profile__btn">

                                 <span className="profile__circle">
                                      <svg aria-hidden="true" data-prefix="fas" data-icon="pencil-alt" className="svg-inline--fa fa-pencil-alt fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z"></path></svg>
                                 </span>
                                    <span className="profile__txt1">
                                         edit profile
                                </span>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </main>
        )
    }
}


export default Profile;