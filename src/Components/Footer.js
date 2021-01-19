import React from 'react'

export default function Footer() {
	const style = { color: 'black' }
	const footerStyle = {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center',
		height: '100%',
		maxWidth: '1200px',
		marginTop: '5vh',
	}
	return (
		<footer style={footerStyle}>
			<a href='https://jurajbasanda.com/' style={style}>
				{' '}
				Made by ©Juraj Basanda
			</a>
		</footer>
	)
}
