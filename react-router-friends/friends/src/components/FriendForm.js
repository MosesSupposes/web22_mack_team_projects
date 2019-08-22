import React, {useState} from 'react';

const FriendForm = (props) => {
    const [newFriend, setNewFriend] = useState({name: "", currently_dating: "", quotes: []})

    const handleChange = (event) => {
        if (event.target.name === "quotes") {
        setNewFriend({...newFriend, quotes: [event.target.value]})
        } else {
        setNewFriend({...newFriend, [event.target.name]:event.target.value})    
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const submitNewFriend = {...newFriend, id:Date.now()}
        props.addNewFriend(submitNewFriend)
        setNewFriend({name: "", currently_dating: "", quotes: []})
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name"> Name
                    <input type="text" placeholder="name" value={newFriend.name} name="name" onChange={handleChange} />
                </label>
                
                <label htmlFor="currently_dating"> Currently Dating
                    <input type="text" placeholder="currently dating" value={newFriend.currently_dating} name="currently_dating" onChange={handleChange} />
                </label>
                
                <label htmlFor="quotes"> Quotes
                    <input type="text" placeholder="quotes" value={newFriend.quotes} name="quotes" onChange={handleChange} />
                </label>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default FriendForm;