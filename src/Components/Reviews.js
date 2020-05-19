import React, { Component } from 'react';
import './home.css';

export class Reviews extends Component {
    
    render() {
const fb1 = "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fdaisy.russell.758%2Fposts%2F10157794311401206&width=500";
const fb2 ='https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fkireshatayneah.lindo%2Fposts%2F10220879810844659&width=500';
const fb3 ='https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Flewis.espeut.9%2Fposts%2F376595476289678&width=500';
const fb4 ='https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fjana.matejova.908%2Fposts%2F10158335565024073&width=500';
        return (
            <section className='fb'>

<h1>What Our Customers Say About Us</h1>

            <div className='reviewsList'>  
          <iframe src={fb1} title="review" width="500" height="220"  scrolling="no" frameBorder="0"  allow="encrypted-media"></iframe>
          <iframe src={fb2} title="review" width="500" height="220"  scrolling="no" frameBorder="0"  allow="encrypted-media"></iframe>
          <iframe src={fb3} title="review" width="500" height="220" scrolling="no" frameBorder="0"  allow="encrypted-media"></iframe>
          <iframe src={fb4} title="review" width="500" height="220"  scrolling="no" frameBorder="0"  allow="encrypted-media"></iframe>
          </div>
          </section>
        )
    }
}

export default Reviews
