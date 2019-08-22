import React from 'react';
import Friend from './Friend.js';

const FriendPage = (props) => {
    const friend = props.friends.find(friend => friend.id === parseInt(props.match.params.id))

    if (!friend) {
        return (
            <div>Page is loading!</div>
        )
    } else {
    return (
        <Friend friend={friend} />
    )
    }
};

export default FriendPage;