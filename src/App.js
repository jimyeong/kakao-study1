import React from 'react';
import Header from './assets/layout/header/Header';
import Nav from './assets/layout/nav/Nav';
import {Route} from 'react-router-dom';
import Friends from "./assets/components/friends/Friends";
import Chats from "./assets/components/chats/Chats";
import Find from "./assets/components/find/Find";
import More from "./assets/components/more/More";

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

                <main className="main">
                    <Route exact path='/' component={Friends}/>
                    <Route path='/chats' component={Chats}/>
                    <Route path='/find' component={Find}/>
                    <Route path="/more" component={More}/>


                </main>
                <Nav/>

            </div>
        )
    }
}


export default App;