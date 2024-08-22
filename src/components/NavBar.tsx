import React, {useState} from 'react';
import companyLogo from '../assets/img/companylogo.svg'
import search from '../assets/img/search.svg'
import {NavLink, Router} from "react-router-dom";
import '../assets/styles/navbar.css'

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isSearching, setIsSearched] = useState(true);

    const handleSearching = () => {
        setIsSearched(!isSearching)
    }
    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="nav-bar">
            <img src={companyLogo} alt='company-logo'/>
            <div className={`nav-list ${isOpen ? 'open' : ''}`}>
                <ul>
                    <li>About Us</li>
                    <li>Services</li>
                    <li>AppStore</li>
                    <li>GameStore</li>
                    <li>Pricing</li>
                </ul>
            </div>
            <div className="nav-last-area nav-list">
                <button> Contact Us</button>
                {
                    isSearching ? (
                        <img onClick={handleSearching} className="search-icon" src={search} alt="Search"/>
                    ):(
                        <input type="search" name="search" onChange={handleSearching} />
                    )
                }

                <select>
                    <option style={{color:"#282c34"}}>EN</option>
                    <option style={{color:"#282c34"}}>TR</option>
                </select>
                <div className="burger-icon" onClick={handleClick}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>
        </div>
    );
}

export default NavBar;