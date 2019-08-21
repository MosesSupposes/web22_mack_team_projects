import React, {useState, useEffect} from 'react';
import {Route} from 'react-router-dom';
import axios from 'axios';

import './App.css';

import FriendList from './components/FriendList.js';
import FriendPage from './components/FriendPage.js';

export default function App() {
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
     <Route path='/friends/:id' render={(props) => <FriendPage {...props} friends={friends}/>}/>
    </div>
  );
}

