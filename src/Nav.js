import React, { Component } from 'react';
import './nav.css';




const Nav = () =>{

        return (

            
            <nav>
            <div className='logo'>HandyMan service</div>
            
            <ul className="nav_links">
                <li><a href="#">Services</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <ul className="" id="nav_links950"  >
                <li><a href="#">Services</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="tel:+"></a><i className="fas fa-phone"></i> 077 593 00907</li>
                <li><button>BOOK NOW</button></li>
            </ul>
            
            <ul className='nav_contact'>
                <li><a href="tel:+"></a><i className="fas fa-phone"></i> 077 593 00907</li>
                <li><button>BOOK NOW</button></li>
            </ul>
            <div className="burger" id='burger'><i className="fas fa-bars"p></i></div>
            </nav>
        )
    }


export default Nav
