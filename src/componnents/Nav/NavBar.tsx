import React from 'react';
import '../../css/navbar.css';

const Navbar = () => {
    return (
           <nav className={"parentDiv"}>
                <ul className="navbar">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Extia-group</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Meet-up</a>
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