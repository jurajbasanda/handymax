import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import './pages.css';
//Background image Fixed URL
import backimg from './imgC/imgback.jpg';
//First project images URL
import img1 from './imgC/carpentry01.jpeg'
import img2 from './imgC/carpentry02.jpeg'
import img3 from './imgC/carpentry03.jpeg'
import img4 from './imgC/carpentry04.jpeg'
//Second project images URL
import img11 from './imgC/carpentry21.jpeg'
import img12 from './imgC/carpentry22.jpeg'
import img13 from './imgC/carpentry23.jpeg'
import img14 from './imgC/carpentry24.jpeg'



const HandymanP=()=> {
//Scoll up after clicked on service
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
      // Headline text of page
      const h1Text = 'Need a carpenter in London?'; 
      // Headline paragraph 
      const paragraph = "If you need a carpentry-related job done in London, you’ve come to the right place. Maybe you need a door hung or some shelves put up, but you have no time in your hands to do the task –  don’t worry, our team of expert London carpenters will be right at your door, ready to give you a hand. At the Handy Squad, many of our handymen are skilled carpenters, who can take on any job, from fitting wooden flooring to repairing sash windows, and many other carpentry services."
      // Fisrt gallery text
      const firstP = 'If you need a carpentry-related job done in London, you’ve come to the right place. Maybe you need a door hung or some shelves put up, but you have no time in your hands to do the task –  don’t worry, our team of expert London carpenters will be right at your door, ready to give you a hand. At the Handy Squad, many of our handymen are skilled carpenters, who can take on any job, from fitting wooden flooring to repairing sash windows, and many other carpentry services.';
     // Second gallery text
      const secondP = ' If you need a carpentry-related job done in London, you’ve come to the right place. Maybe you need a door hung or some shelves put up, but you have no time in your hands to do the task –  don’t worry, our team of expert London carpenters will be right at your door, ready to give you a hand. At the Handy Squad, many of our handymen are skilled carpenters, who can take on any job, from fitting wooden flooring to repairing sash windows, and many other carpentry services.';
     // Alt of all images
      const altImg = 'handymax handyman carpentry';

    const img = {backgroundImage: `url(${backimg})`}

    const [selected1,setSelected1] = useState(img4)
    const [selected,setSelected] = useState(img14)
    

    return (
        
        <section className='page'>
            <div className='back' style={img}></div>
            <Link to='./services'>Back to services</Link>
            <h1>{h1Text}</h1>
            <p>{paragraph}</p>
            
            <div className="container">
    <p>{firstP}</p>
            <div className='gallery'>
                <div className='main-img'>
                <img src={selected1} alt={altImg} key={selected1} id='current'/>
                </div>
                <div className='imgs'>
                    <img src={img1} alt={altImg} key={img1} onClick={() => setSelected1(img1)}/>
                    <img src={img2} alt={altImg} key={img2} onClick={() => setSelected1(img2)}/>
                    <img src={img3} alt={altImg} key={img3} onClick={() => setSelected1(img3)}/>
                    <img src={img4} alt={altImg} key={img4} onClick={() => setSelected1(img4)}/>
                </div>
            </div>
            <p>{secondP} </p>
            <div className='gallerySecond'>
                <div className='main-img'>
               
                <img src={selected} alt={altImg} key={selected} id='current'/>
                </div>
                <div className='imgs'>
                    <img src={img11} alt={altImg} key={img11} onClick={() => setSelected(img11)}/>
                    <img src={img12} alt={altImg} key={img12} onClick={() => setSelected(img12)}/>
                    <img src={img13} alt={altImg} key={img13} onClick={() => setSelected(img13)}/>
                    <img src={img14} alt={altImg} key={img14} onClick={() => setSelected(img14)}/>
                </div>
            </div>
            </div>

        </section>
    )
}

export default HandymanP;
