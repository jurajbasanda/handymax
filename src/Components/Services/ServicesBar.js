import React from 'react'
import {Link} from 'react-router-dom'


import Locksmith from './img/locktmithFoto.jpeg';
import Bathrooms from './img/bathrooms1.jpg'
import Plumber from './img/plumber.jpeg';
import Handyman from './img/handyman.jpeg';
import Painting from './img/painting.jpeg';
import Electric from './img/electric.jpeg';
import Carpentry from './img/carpentry.jpeg';

const serviceObject = [{name:'Locksmith',
                    img:Locksmith},
                  {name:"Bathrooms",
                    img:Bathrooms},
                  {name:'Plumber',
                  img:Plumber},
                {name:'Handyman',
                img:Handyman},
                {name:'Painting',
                  img:Painting},
                {name:'Electric',
                img:Electric},
              {name:'Carpentry',
                img:Carpentry},
              ]

export default function ServicesBar() {
  const content = serviceObject.map((service) => 
  <Link to={service.name}><img src={service.img} alt="" /><span>{service.name}</span></Link>

    )

  
    return (
      <section className='services'>
          <Link to='/services'><h1>Services</h1></Link>
                    <div className='servicesBar'>
        {content}
        </div>
            </section>
       
       
                  
    )
}
