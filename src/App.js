import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Home from './Home'
import PostRoomOne from './PostRoomOne'
import PostRoomTwo from './PostRoomTwo'
import PostRoomThree from './PostRoomThree'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path = "/" component = {Home} />
          <Route exact path = "/details/1" component = {PostRoomOne} />
          <Route exact path = "/details/2" component = {PostRoomTwo} />
          <Route exact path = "/details/3" component = {PostRoomThree} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
