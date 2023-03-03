import React, { useState } from 'react';
import '../css/navbar.css';
import { Navigate, useNavigate } from "react-router-dom";

const Navbar = () => {

    const [showMeetup, setShowMeetup] = useState(false);

    const handleMeetupClick = () => {
      setShowMeetup(true);
    
      Navigate("/comet");
    };

    return (
        <nav className={"parentDiv"}>
            <ul className="navbar">
                <li className="nav-item">
                    <a className="nav-link" href="#">Extia-group</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#" onClick={handleMeetupClick} >Meet-up</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Avis entreprise</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Missions</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Events</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;