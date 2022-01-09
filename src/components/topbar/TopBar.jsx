import React from 'react'
import "./topbar.css"

export default function TopBar() {
    const user = true;
    return (
        <div className='top'>
            <div className='topLeft'>
                <i className="topIcon fab fa-facebook-square"></i>
                <i className="topIcon fab fa-twitter-square"></i>
                <i className="topIcon fab fa-pinterest-square"></i>
                <i className="topIcon fab fa-instagram-square"></i>
            </div>
            <div className='topCenter'>
                <ul className='topList'>
                    <a className='link' href="/"><li className='topListItem'>HOME</li></a>
                    <a className='link' href="/"><li className='topListItem'>ABOUT</li></a>
                    <a className='link' href="/"><li className='topListItem'>CONTACT</li></a>
                    <a className='link' href="/write"><li className='topListItem'>WRITE</li></a>
                    <li className='topListItem'>{user && "LOGOUT"}</li>
                </ul>
            </div>
            <div className='topRight'>
                <img className='topImg' src='https://images.pexels.com/photos/4348798/pexels-photo-4348798.jpeg?cs=srgb&dl=pexels-maksim-goncharenok-4348798.jpg&fm=jpg' alt=''/>
                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    );
}