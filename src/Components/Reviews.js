import React from 'react';
import './reviews.scss';
import userImg from '../svg/user-regular.svg';

const Reviews=()=>  {
const reviews = [
                {name:'Lucie Regan',
                disc:"I would highly recommend Handymax. Premek fitted a new garden fence for us and went above and beyond to get it finished in a day.  He has also moved lightswitches, an aerial socket and plugs and did a very clean and tidy job.  He's very polite and professional.",
                link:'https://www.facebook.com/lucie.regan.9/posts/1767472763393116',
                },
                {name:'Marek Vancisin',
                date:'21/08/2020',
                link:'https://www.facebook.com/marek.vancisin/posts/10218761478412202',
                disc:'Highly recommend. Job was done properly. All the way 5 star.'
                  },
                {disc:'Highly recommend ! Reliable and Excellent service!Wallpaper, tiles on floor and walls, plumbing amazing all rounder would defiantly use again!',
                  name:'Krystle Purdy Krystalized',
                  link:'https://www.facebook.com/krystle.day/posts/10157634532462060',
                },
                {
                  disc:"Fantastic job on flooring, painting, doors - great service, lovely people, reliable and made you feel like they could cope with anything. Finishing is perfect, looks expensive but done for a great price. Thank you.",
                  name:'Aryan Sharahi',
                  link:'https://www.facebook.com/sharahi/posts/10163540543010445'
                }]
return (
            <section className='fb'>
            <h1>What Our Customers Say About Us</h1>
            <div className='reviewsList'>  
          {/*<iframe src={fb4} title="review" width="500" height="220"  scrolling="no" frameBorder="0"  allow="encrypted-media"></iframe>*/}
          {reviews.map(review =>(
                      <div className='review-item'>
                      <a href={review.link} target='_blank' rel="noopener noreferrer">
                      <img src={userImg} alt="User" srcSet=""/>                     
                      <h3>{review.name}</h3>
                    <p>{review.disc}</p>
                      </a>
                      </div>
          ))}
          </div>
          </section>
        )
    }


export default Reviews
