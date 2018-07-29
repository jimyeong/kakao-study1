import React from 'react';
import './chat.scss';
import Avatar from '../../img/avatar.jpg';

class Chat extends React.Component{
    constructor(props){
        super(props);

        this.state = {

        }
    }

    render(){
        return(
            <main className="main type-chat">
                <div className="chat">
                    <header className="chat__date-line">
                        Wednesday, august 2, 2017
                    </header>
                    <ul className="chat__list clearfix">
                        <li className="chat__row chat--me">
                            <div className="chat__item">
                                <span className="chat__message-time">17:55</span>
                                <p className="chat__message">Hello! this is a test message</p>
                            </div>
                        </li>
                        <li className="chat__row chat--you">
                            <div className="chat__item">
                                <img src={Avatar} alt="avatar"/>
                                <div className="chat__inner">
                                    <span className="chat__name">lynn</span>
                                    <p className="chat__message">Hello! this is a test message</p>
                                </div>
                                <span className="chat__message-time">17:55</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </main>
        )
    }
}


export default Chat;