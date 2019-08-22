import React, {useState, useEffect} from 'react';
import './App.css';
import FriendList from './components/FriendList.js';
import FriendPage from './components/FriendPage.js';
import {Route} from 'react-router-dom';
import axios from 'axios';
import FriendForm from './components/FriendForm.js';

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
     <FriendForm />
     <Route exact path="/" render={(props) => <FriendList {...props} friends={friends}/>}/>
     <Route path='/friends/:id' render={(props) => <FriendPage {...props} friends={friends}/>}/>
    </div>
  );
}

export default App;
