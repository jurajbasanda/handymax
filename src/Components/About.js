import React,{useEffect} from 'react';
import './about.css';


import Work from './img/guarantee.png';
import Check from './img/form-label.png';
import Reviews from './Reviews';

const About = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <section>
    <article className='aboutFirst'>
      
      <section className='listAbout'>
                <ul>
                  <li>
                  <img src={Work} alt="" /> 
        <p><strong>100% Guaranteed Work</strong></p></li>
            <li><img src={Check} alt="" /> 
        <p><strong> Fully Insured Up To £ 5 Mil</strong><br/></p></li>
        </ul>
        </section>
            
    </article>
      <article className='about'>
      <h1>What is Handymax</h1>
      <p>Handymax Handyman service was created in april 2018 to provide a general handyman service for both the general public and landlords/letting 
        agents that seemed unable to get "the little jobs "done before this 
        I mainly worked as tiler and bathroom fitter. I know its hard to find a contractor you can trust that is willing to be versatile and transparent. 
        I am honest, straight forward, hardworking and love to see a project completed from start to finish.
         My desire is to see your project dreams and ideas come to life and your to-do list items finally done.</p>
         <br></br>
         <p><strong>I can not wait to jump on another job and hear from you soon !</strong></p>
         {/*<h1>Who am I ?</h1>
      <p>My name is Premek, I am handyman and tiller. Over 6 years I have been providing my best service in London.
        I have been building up my reputation as a trustworthy builder here in London with many great reviews you check out below. 
        I am highly experienced with a quick refresh job or full renovation project as well as fully insured up to £ 5 mil.
        Do not hesitate to have a look at my past work experiences in various categories on this website. 
        I can not wait to jump on another job and hear from you soon !
         </p>*/}
      </article>
      <div className='bg'></div>

     
     
      <Reviews></Reviews>
    
    </section>
  )
}

export default About
