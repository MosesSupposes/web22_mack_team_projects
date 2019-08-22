import React from 'react';

const Friend = (props) => {
    const {id, name, currently_dating, quotes} = props.friend
    return (
        <div>
            <h2>{name}</h2>
            <p>Currently dating: {currently_dating}</p>
            <p>Quotes: {quotes.map(quote => <p>{quote}</p>)}</p>
        </div>
    )
}

export default Friend;