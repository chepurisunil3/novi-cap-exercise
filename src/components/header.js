import React from 'react';
import image from '../data/logo.jpeg';
import '../css/header.css';

function Header() {
    return (
    <div className="header-div">
        <img src={image} className="logo" />
        <h2 className="website-name">Novicap Stores</h2>
    </div>
    );
}

export default Header;
