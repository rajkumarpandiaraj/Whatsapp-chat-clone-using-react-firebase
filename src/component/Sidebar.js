import React, {useEffect, useState} from 'react';
import {CgProfile, CgMoreVerticalAlt} from 'react-icons/cg';
import {RiMessage2Fill} from 'react-icons/ri';
import {BiCircle, BiSearch} from 'react-icons/bi';
import {IconContext} from 'react-icons'
import '../assets/sidebar.css'
import Room from './Room';
import db from '../config'


function Sidebar() {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        const unSubscribe = db.collection('rooms').onSnapshot(snapshot =>{
            setRooms(snapshot.docs.map(doc => (
                {
                    id : doc.id,
                    name : doc.data().name
                }
            )))
        })
        return () => {
            unSubscribe();
        }
    }, [])
    return (
        <div className='sidebar-container'>
            <IconContext.Provider value={{size : '1.5rem', color : 'grey', className : 'global-icon'}}>
                <div className='sidebar-header'>
                    <CgProfile size = '2.2rem'/>
                <div className='header-icon'>
                    <IconContext.Provider value={{className : 'react-icon'}}>
                        <BiCircle/>
                        <RiMessage2Fill/>
                        <CgMoreVerticalAlt/>
                    </IconContext.Provider>
                </div>
                </div>
                <div className='sidebar-search'>
                    <div className='search-container'>
                        <BiSearch/>
                        <form className='search-form'>
                            <input type='text' placeholder='Search Room' className='search-input'/>
                        </form>
                    </div> 
                </div>
                <div className='sidebar-rooms'>
                    <h1>Add New Chat</h1>
                    {
                        rooms.map(room => <Room key={room.id} room={room} />)
                    }
                </div>
            </IconContext.Provider>
        </div>
    )
}

export default Sidebar
