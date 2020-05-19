import React from 'react'
import {Link} from 'react-router-dom'


import Locksmith from './img/locktmithFoto.jpeg';
import Bathrooms from './img/bathrooms1.jpg'
import Plumber from './img/plumber.jpeg';
import Handyman from './img/handyman.jpeg';
import Painting from './img/painting.jpeg';
import Electric from './img/electric.jpeg';
import Carpentry from './img/carpentry.jpeg';

export default function ServicesBar() {
    return (
        
        
        <section className='services'>
          <Link to='/services'><h1>Services</h1></Link>
                    <div className='servicesBar'>
                      <Link to='/locksmith'><img src={Locksmith} alt="" /><span>Locksmith</span></Link>
                      <Link to='/bathroom'><img src={Bathrooms} alt="" /><span>Bathrooms</span></Link>
                      <Link to='/plumber'><img src={Plumber} alt="" /><span>Plumber</span></Link>
                      <Link to='/handyman'><img src={Handyman} alt="" /><span>Handyman</span></Link>
                      <Link to='/painting'><img src={Painting} alt="" /><span>Painting</span></Link>
                      <Link to='/electric'><img src={Electric} alt="" /><span>Electric</span></Link>
                     <Link to='/carpentry'><img src={Carpentry} alt="" /><span>Carpentry</span></Link>
                    </div>
                    </section>               
       
       
                  
    )
}
