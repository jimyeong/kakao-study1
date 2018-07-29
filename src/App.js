import React from 'react';
import Header from './assets/layout/header/Header';
import Nav from './assets/layout/nav/Nav';
import {Route} from 'react-router-dom';
import Friends from "./assets/components/friends/Friends";
import Chats from "./assets/components/chats/Chats";
import Find from "./assets/components/find/Find";
import More from "./assets/components/more/More";
import Profile from "./assets/components/profile/Profile";
import Chat from "./assets/components/chat/Chat";

class App extends React.Component{
    constructor(props){
        super(props);

        this.state = {

        }
    }


    render(){
        return(
            <div className="wrapper">
                <Header/>

                <div className="wrapper">
                    <Route exact path='/' component={Friends}/>
                    <Route exact path='/chats' component={Chats}/>
                    <Route path='/find' component={Find}/>
                    <Route path="/more" component={More}/>
                    <Route path="/friends/profile" component={Profile}/>
                    <Route path="/chats/chat" component={Chat}/>
                </div>
                <div className="nav-route">
                    <Route path="/" component={Nav}/>
                </div>

            </div>
        )
    }
}


export default App;