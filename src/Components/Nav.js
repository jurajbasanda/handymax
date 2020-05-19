import React,{useState} from 'react';
import './nav.css';
import {Link} from 'react-router-dom'

const Nav = () =>{
    
    const [Nav,setNav] = useState('');
    const openNav = () =>{ (Nav === '') ? setNav(' open') :  setNav('')}

        return (

            
            
            <nav>
            
            <Link to='/'> <div className='logo'>HandyMAX</div></Link>
            
            <ul className="nav_links">
            <Link to='/services'><li>Services</li></Link>
            <Link to='/about'><li>About</li></Link>
            <Link to='/contact'><li>Contact</li></Link>
            </ul>

            <ul className={'nav_links950'+ Nav}>
            <Link to='/'> <div className='logo'>HandyMAX</div></Link>
            <Link to='/services' onClick={openNav}><li>Services</li></Link>
            <Link to='/about' onClick={openNav}><li>About</li></Link>
            <Link to='/contact' onClick={openNav}><li>Contact</li></Link>
                <li><div className='tel'onClick={openNav}><a href="tel:+"><i className="fas fa-phone"></i> 077 593 00907</a></div></li>
                <Link to='/contact'><li><button onClick={openNav}>BOOK NOW</button></li></Link>
            </ul>
            
            <ul className='nav_contact'>
                <li><div className='tel'><a href="tel:+" ><i className="fas fa-phone"></i> 077 593 00907</a></div></li>
                <Link to='/contact'><li><button>BOOK NOW</button></li></Link>
            </ul>
            <div className="burger"  onClick={openNav}><i className="fas fa-bars"></i></div>
            </nav>
        )
    }

export default Nav
