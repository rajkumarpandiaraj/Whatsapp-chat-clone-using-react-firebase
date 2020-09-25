import React from 'react';
import {CgProfile, CgMoreVerticalAlt, CgAttachment} from 'react-icons/cg';
import {RiMessage2Fill} from 'react-icons/ri';
import {BiCircle, BiSearch} from 'react-icons/bi';

function Sidebar() {
    return (
        <div className='sidebar-container'>
            <div className='sidebar-header'>
                <CgProfile/>
            <div className='header-icon'>
                <BiCircle/>
                <CgMoreVerticalAlt/>
                <RiMessage2Fill/>
            </div>
            </div>
            <div className='sidebar-search'>
                <BiSearch/>
            </div>
            <div className='sidebar-rooms'>
                <CgAttachment/>
            </div>
        </div>
    )
}

export default Sidebar
