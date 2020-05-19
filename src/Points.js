import React, { Component } from 'react';
import './services.css';

import Clock from './img/time.svg';
import Price from './img/price.png';
import Coverage from './img/coverage.png';
import Quality from './img/quality.png';
import Check from './img/check-circle-regular.svg';

import Locksmith from './img/locktmithFoto.jpeg';
import Painting from './img/painting.jpeg';
import Plumber from './img/plumber.jpeg';
import Handyman from './img/handyman.jpeg';
import Carpentry from './img/carpentry.jpeg';
import Electric from './img/electric.jpeg';


export class Points extends Component {
    render() {

const fb1 = "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fdaisy.russell.758%2Fposts%2F10157794311401206&width=500";
const fb2 ='https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fkireshatayneah.lindo%2Fposts%2F10220879810844659&width=500';
const fb3 ='https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Flewis.espeut.9%2Fposts%2F376595476289678&width=500';
const fb4 ='https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fjana.matejova.908%2Fposts%2F10158335565024073&width=500';

        return (
        <div>
            <div className="firstBlog">
      <div className='blog'><p>Where everyone else gives up, we take over</p>
          <button>BOOK OUR SERVICE</button></div>
    </div>
            <div className='points'>
            <div className='list'>
                      <ul>
                        <li><h1>The Benefits We Offer to Our Customers</h1></li>
                  <li><img src={Check} alt="" className='imgList'/> 
              <p><strong> Fully Insured &#38; Equipped Handymen</strong><br/>The handymen carry public liability insurance and have all the
              right tools to tackle any home repair task without any hassle!</p></li>
              <li><img src={Coverage} alt="" className='imgList'/>
              <p><strong>Coverage</strong><br/> All our home maintenance services are available everywhere within the M25 zone in London.
              </p> </li>
              <li><img src={Quality} alt="" className='imgList'/>
              <p><strong>100% Guaranteed Work</strong><br/> You can be sure that when you book a handyman London,
              he'd be fully committed to help you as best as he can.
              </p></li>
              <li><img src={Price} alt="" className='imgList'/> 
              <p><strong>Rates</strong><br/>Our rates are £35 for the first hour of work. Keep in mind the first half an hour is charged £20. </p>
              </li>
              <li><img src={Clock} alt="" className='imgList'/>
              <p> <strong> Working Hours</strong><br/>You can get our service every day of the week, even during official holidays. Services provided on Sundays and during after hours are available at different rates.
              </p></li></ul>
              </div>
              <div className='imgBack'></div>
                  </div>
                  <div className='services'><h1>Services</h1>
                  <div className='servicesBar'>
                    <img src={Locksmith} alt="" srcset=""/><span>Locksmith</span>
                    <img src={Handyman} alt="" srcset=""/><span>Handyman</span>
                    <img src={Painting} alt="" srcset=""/><span>Painting</span>
                    <img src={Electric} alt="" srcset=""/><span>Electric</span>
                    <img src={Carpentry} alt="" srcset=""/><span>Carpentry</span>
                    <img src={Plumber} alt="" srcset=""/><span>Plumber</span>
                  </div>
                </div>
                <div className='My'>
                <h1>What Our Customers Say About Us</h1>
          <div className='myR'>
              
          <div className='review1'>
            <i class="far fa-user"></i>
          <p>Kiresha Tayneah Lindo</p>
          <blockquote cite="https://www.facebook.com/kireshatayneah.lindo/posts/10220879810844659">
          <span>"</span>The service provided was great...had a few jobs done which included drilling through my concrete walls. He made it look so easy and done a fantastic job. I would highly recommend Premek and I will be using his services again.
          <span>"</span>
          </blockquote>
          </div>
          <div className='review1'>
            <i class="far fa-user"></i>
          <p>Kiresha Tayneah Lindo</p>
          <blockquote cite="https://www.facebook.com/kireshatayneah.lindo/posts/10220879810844659">
          <span>"</span>The service provided was great...had a few jobs done which included drilling through my concrete walls. He made it look so easy and done a fantastic job. I would highly recommend Premek and I will be using his services again.
          <span>"</span>
          </blockquote>
          </div>
          </div>
            </div>
            </div>
        )
    }
}

export default Points
