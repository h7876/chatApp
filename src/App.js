import React from 'react';

import Home from './Components/Home';
import Chat from './Components/Chat';

import {
Router, 
Scene
} from 'react-native-router-flux';

 class App extends React.Component {
    render(){
        return(
            <Router>
                <Scene key='root'>
                    <Scene key='home' component={Home} title='Home'/>
                    <Scene key='chat' component={Chat} title='Chat'/>
                </Scene>
                </Router>
        )
    }
}

export default App;