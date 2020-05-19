import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './servicesP.css';

import Locksmith from './img/locktmithFoto.jpeg';
import Bathrooms from './img/bathrooms1.jpg'
import Plumber from './img/plumber.jpeg';
import Handyman from './img/handyman.jpeg';
import Painting from './img/painting.jpeg';
import Electric from './img/electric.jpeg';
import Carpentry from './img/carpentry.jpeg';



 
  
  export default class ServicesPage extends Component {
    componentDidMount() {
      window.scrollTo(0, 0);
    }
    
  render() {
    const altImg = 'handymax handyman london services';

return(
  <section className='servicesFront'>
    <h1>Services</h1>
    <p>If it’s handyman services in London you are looking for, you have come to the right place.
       We take on a vast array of different jobs from changing a lightbulb to hanging your flat screen TV or putting up your new bookshelves.
       If you think your request is too unusual, give us a call anyway – we may well surprise you…</p>
    <div>
    <Link to='/locksmith'><ul>
      <li><img src={Locksmith} alt={altImg} key={Locksmith} title={Locksmith}/></li>
      <li><h1>Locksmith</h1></li>
      <li><p>
        Text about locksmith la la alaaaaa etc...
        
        </p></li>
    </ul></Link>
    <Link to='/bathrooms'><ul>
      <li><img src={Bathrooms} alt={altImg} key={Bathrooms} title={Bathrooms}/></li>
      <li><h1>Bathrooms</h1></li>
      <li><p>
        Text about locksmith la la alaaaaa etc...
       
        </p></li>
    </ul></Link>
    <Link to='/plumber'><ul>
      <li><img src={Plumber} alt={altImg} key={Plumber} title={Plumber}/></li>
      <li><h1>Plumber</h1></li>
      <li><p>
        Text about locksmith la la alaaaaa etc...
       
        </p></li>
    </ul></Link>
    
    
    <Link to='/handyman'><ul>
      <li><img src={Handyman} alt={altImg} key={Handyman} title={Handyman}/></li>
      <li><h1>Handyman</h1></li>
      <li><p>
        Text about locksmith la la alaaaaa etc...
       
        </p></li>
    </ul></Link>
    <Link to='/painting'><ul>
      <li><img src={Painting} alt={altImg} key={Painting} title={Painting}/></li>
      <li><h1>Painting</h1></li>
      <li><p>
        Text about locksmith la la alaaaaa etc...
       
        </p></li>
    </ul></Link>
    <Link to='/electric'><ul>
      <li><img src={Electric} alt={altImg} key={Electric} title={Electric}/></li>
      <li><h1>Electric</h1></li>
      <li><p>
        Text about locksmith la la alaaaaa etc...
     
        </p></li>
    </ul></Link>
    
   

    <Link to='/carpentry'><ul>
      <li><img src={Carpentry} alt={altImg} key={Carpentry} title={Carpentry}/></li>
      <li><h1>Carpentry</h1></li>
      <li><p>
        Text about locksmith la la alaaaaa etc...
     
        </p></li>
    </ul></Link>
    </div>
  </section>
  )
}
}


