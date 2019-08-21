import React from 'react';
import Friend from './Friend.js';

const FriendList = (props) => {
    return (
        <div>
        {props.friends.map(friend => <Friend {...props} friend={friend}/>)}
        </div>
    )
}

export default FriendList;

