import React, {useState} from 'react';

const FriendForm = (props) => {
    const [newFriend, setNewFriend] = useState({name: "", currently_dating: "", quotes: []})

    const handleChange = (event) => {
        setNewFriend({...newFriend, [event.target.name]:event.target.value})
    }

    return (
        <div>
            <form>
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