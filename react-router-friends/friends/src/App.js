import React, {useState, useEffect} from 'react';
import './App.css';
import FriendList from './components/FriendList.js';
import FriendPage from './components/FriendPage.js';
import {Route} from 'react-router-dom';
import axios from 'axios';
import FriendForm from './components/FriendForm.js';

import './App.css';

export default function App() {
  const [friends, setFriends] = useState([])

  const addNewFriend = (newFriend) => {
    // setFriends(friends.concat(newFriend))
    setFriends([...friends, newFriend])
  }

  useEffect(() => {
    axios.get('http://localhost:5000/api/friends/')
    .then(response => {
      setFriends(response.data);
    })
  }, [])
  return (
    <div className="App">
     <FriendForm addNewFriend={addNewFriend}/>
     <Route exact path="/" render={(props) => <FriendList {...props} friends={friends}/>}/>
     <Route path='/friends/:id' render={(props) => <FriendPage {...props} friends={friends}/>}/>
    </div>
  );
}

