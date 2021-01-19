import React, { useEffect } from 'react'
import './contact.css'

const Contact = () => {
	//Scoll up after clicked on service
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	return (
		<section>
			<div className='backImage'></div>
			<article className='contact'>
				<h1>Contact us today!</h1>
				<p>
					Our friendly office staff are here and ready to take your call. If you
					need a multi-skilled handyman, or a qualified plumber or electrician,
					contact us today. We’re always polite, always friendly, and most
					importantly – we’re always Handy!
				</p>
				<strong>
					<a href='tel:+'>
						{' '}
						<i className='fas fa-phone'></i> Call 077 593 00007
					</a>
					<ul>
						<li>We’ll get back to you as soon as possible</li>
						<li>
							We’ll provide you with an estimated cost of the work requested
						</li>
						<li>We’ll agree an appointment time that suits you</li>
					</ul>
					<ul>
						<li>Office Hours:</li>
						<li>
							Monday to Friday: 9am to 6pm A reception and messaging service
							operates at all other times.
						</li>
						<li>Note:</li>
						<li>
							call-outs / jobs can be scheduled for times outside office hours
						</li>
						<li>this includes evenings and weekends, by appointment</li>
					</ul>
				</strong>
				<br />

				{/* Contact Form */}
				<h2>BOOK ONLINE HERE</h2>

				<form id='contact-form' action='Form.php' method='POST'>
					<div className='form-group'>
						<label htmlFor='name' for='name'>
							Name
						</label>
						<input type='text' name='visitor_email' className='form-control' />
					</div>
					<div className='form-group'>
						<label htmlFor='exampleInputEmail' for='email'>
							Email address
						</label>
						<input
							type='email'
							name='visitor_email'
							className='form-control'
							aria-describedby='emailHelp'
						/>
					</div>
					<div className='form-group'>
						<label htmlFor='exampleInputTel' for='telephone'>
							Telephone number
						</label>
						<input
							type='tel'
							name='telephone'
							className='form-control'
							aria-describedby='telHelp'
						/>
					</div>
					<div className='form-group'>
						<label htmlFor='message'>Message</label>
						<textarea
							className='form-control'
							rows='6'
							name='visitor_message'
						></textarea>
					</div>
					<button type='submit' className='btn'>
						Submit
					</button>
				</form>
			</article>
		</section>
	)
}
export default Contact
