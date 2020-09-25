import React,{useEffect, useState} from 'react';
import {CgProfile, CgAttachment, CgMoreVerticalAlt} from 'react-icons/cg';
import {BiSearch} from 'react-icons/bi';
import {IconContext} from 'react-icons';
import {BsFillMicFill} from 'react-icons/bs';
import {HiOutlineEmojiHappy} from 'react-icons/hi'
import '../assets/chatbody.css'
import Chat from './Chat';
import db from '../config'

function Chatbody() {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        const unSubscribe = db.collection('rooms').onSnapshot(snapshot =>{
            setRooms(snapshot.docs.map(doc => doc.data()))
        })
        return () => {
            unSubscribe();
        }
    }, [rooms])
    return (
        <div className='chat-body'>
            <div className='chat-header'>
                <CgProfile size = '2.2rem' color='grey'/>
                <div className='chat-header-info'>
                    <h3>Room Name</h3>
                    <p>Last Seen 5min ago...</p>
                </div>
                <div className='chat-icon'>
                    <IconContext.Provider value={{className : 'chat-fa-icon'}}>
                        <BiSearch/>
                        <CgAttachment/>
                        <CgMoreVerticalAlt/>
                    </IconContext.Provider>
                </div>
            </div>
            <div className='chat-showcase'>
                <Chat/>
                {/* <div className='chat sender'>
                    <p>Hey Guys</p>
                    <span className='messager-name'>Rk</span>
                    <span className='time-stamp'>22:00</span>
                </div> */}
            </div>
            <div className='message-sender'>
                <div className='message-sender-container'>
                    <IconContext.Provider value={{className : 'sender-icon'}}>
                        <HiOutlineEmojiHappy/>
                        <form className='message-sender-form'>
                            <input type='text' placeholder='Type Message & Press Enter to Send'/>
                        </form>
                        <BsFillMicFill/>
                    </IconContext.Provider>
                </div>
            </div>
        </div>
    )
}

export default Chatbody
