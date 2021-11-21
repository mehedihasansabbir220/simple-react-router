import React from 'react';
import './Friend.css'

const Friend = (props) => {
    const { name, email, address } = props.friend;
    return (
        <div className='friend-container'>
            <h3>i am ; {name}</h3>
            <h5>conatc my {email}</h5>
            <p>My Address: {address.street}</p>

        </div>
    );
};

export default Friend;