import React, {useState, useEffect} from 'react';
import './App.css';
import FriendList from './components/FriendList.js';
import Friend from './components/Friend.js';
import {Route} from 'react-router-dom';
import axios from 'axios';

function App() {
  const [friends, setFriends] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/api/friends/')
    .then(response => {
      setFriends(response.data);
    })
  }, [])
  return (
    <div className="App">
     <Route exact path="/" render={(props) => <FriendList {...props} friends={friends}/>}/>
     <Route path='/friends/:id' render={(props) => <Friend {...props} friends={friends}/>}/>
    </div>
  );
}

export default App;
