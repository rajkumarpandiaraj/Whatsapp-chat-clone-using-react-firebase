import React from 'react';
import {CgProfile} from 'react-icons/cg'

function Room({room}) {
    console.log(room);
    return (
        <>
            <div className='room'>
                <CgProfile  size = '2.2rem'/>
                <div className='room-info'>
    <h3>{room.name}</h3>
                    <p>Messages...</p>
                </div>
            </div>
        </>
    )
}

export default Room
