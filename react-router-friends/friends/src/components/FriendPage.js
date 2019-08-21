import React from 'react'

import Friend from './Friend'

export default function FriendPage(props) {
    const friend = props.friends.find(friend => friend.id === parseInt(props.match.params.id))
    
    if (friend) { 
        return <Friend friend={friend}/> 
    } else {
        return <p>Loading friend data...</p>
    }
}