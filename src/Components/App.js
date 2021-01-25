import React, { Component } from 'react'
import './App.css'
import './home.css'
import Nav from './Nav'
import Footer from './Footer'
import About from './About'
import Contact from './Contact'
import Reviews from './Reviews'
import ServicesBar from './Services/ServicesBar'
import ServicesP from './Services/ServicesP'
import PlumberP from './Services/PlumberP'
import LocksmithP from './Services/LocksmithP'
import HandymanP from './Services/HandymanP'
import PaintingP from './Services/PaintingP'
import ElectricP from './Services/ElectrickP'
import BathroomsP from './Services/BathroomsP'

import NotFoundPage from './NotFoundPage'

import {
	BrowserRouter as BRouter,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom'
import { Link } from 'react-router-dom'

import Clock from './img/time.svg'
import Price from './img/price.png'
import Coverage from './img/coverage.png'
import Quality from './img/quality.png'
import Check from './img/check-circle-regular.svg'
import CarpentryP from './Services/CarpentryP'

export default class App extends Component {
	render() {
		return (
			<BRouter>
				<Nav></Nav>
				<Switch>
					<Route path='/' exact component={Home} />
					<Route path='/services' component={ServicesP} />
					<Route path='/about' component={About}>
						<About />
					</Route>
					<Route path='/contact' component={Contact}>
						<Contact />
					</Route>

					<Route path='/locksmith'>
						<LocksmithP />
					</Route>
					<Route path='/plumber'>
						<PlumberP />
					</Route>
					<Route path='/carpentry'>
						<CarpentryP />
					</Route>
					<Route path='/handyman'>
						<HandymanP />
					</Route>
					<Route path='/electric'>
						<ElectricP />
					</Route>
					<Route path='/painting'>
						<PaintingP />
					</Route>
					<Route path='/bathrooms'>
						<BathroomsP />
					</Route>

					<Route path='*'>
						<NotFoundPage />
					</Route>

					<Route path='/404'>
						<NotFoundPage />
					</Route>
					<Redirect to='/404' />
				</Switch>
				<Footer></Footer>
			</BRouter>
		)
	}
}

class Home extends Component {
	componentDidMount() {
		window.scrollTo(0, 0)
	}
	render() {
		return (
			<main>
				<section className='firstBlog'>
					<ul className='blog'>
						<li>Where everyone else gives up, we take over</li>
						<Link to='/contact'>
							<li>
								<button>BOOK OUR SERVICE</button>
							</li>
						</Link>
					</ul>
				</section>
				<section className='points'>
					<div className='list'>
						<ul>
							<li>
								<h1>The Benefits We Offer to Our Customers</h1>
							</li>
							<li>
								<img src={Check} alt='' className='imgList' />
								<p>
									<strong> Fully Insured &#38; Equipped Handyman</strong>
									<br />
									The handyman carry public liability insurance and have all the
									right tools to tackle any home repair task without any hassle!
								</p>
							</li>
							<li>
								<img src={Coverage} alt='' className='imgList' />
								<p>
									<strong>Coverage</strong>
									<br /> All our home maintenance services are available
									everywhere within the M25 zone in London.
								</p>{' '}
							</li>
							<li>
								<img src={Quality} alt='' className='imgList' />
								<p>
									<strong>100% Guaranteed Work</strong>
									<br /> You can be sure that when you book a handyman London,
									he'd be fully committed to help you as best as he can.
								</p>
							</li>
							<li>
								<img src={Price} alt='' className='imgList' />
								<p>
									<strong>Rates</strong>
									<br />
									Our rates are £35 for the first hour of work. Keep in mind the
									first half an hour is charged £20.{' '}
								</p>
							</li>
							<li>
								<img src={Clock} alt='' className='imgList' />
								<p>
									{' '}
									<strong> Working Hours</strong>
									<br />
									You can get our service every day of the week, even during
									official holidays. Services provided on Sundays and during
									after hours are available at different rates.
								</p>
							</li>
						</ul>
					</div>
					<div className='imgBack'></div>
				</section>

				<ServicesBar></ServicesBar>
				<Reviews />
				{/*}
                  <section className='My'>
                  <h1>What Our Customers Say About Us</h1>
            <div className='myR'>
                
            <div className='review1'>
              <i className="far fa-user"></i>
            <p>Kiresha Tayneah Lindo</p>
            <blockquote cite="https://www.facebook.com/kireshatayneah.lindo/posts/10220879810844659">
            <span>"</span>The service provided was great...had a few jobs done which included drilling through my concrete walls. He made it look so easy and done a fantastic job. I would highly recommend Premek and I will be using his services again.
            <span>"</span>
            </blockquote>
            </div>
            <div className='review1'>
              <i className="far fa-user"></i>
            <p>Kiresha Tayneah Lindo</p>
            <blockquote cite="https://www.facebook.com/kireshatayneah.lindo/posts/10220879810844659">
            <span>"</span>The service provided was great...had a few jobs done which included drilling through my concrete walls. He made it look so easy and done a fantastic job. I would highly recommend Premek and I will be using his services again.
            <span>"</span>
            </blockquote>
            </div>
            </div>
              </section>
          {*/}
			</main>
		)
	}
}
