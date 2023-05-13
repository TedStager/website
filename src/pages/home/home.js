import React from 'react';
import './home.css';
import Navbar from '../../components/navbar/navbar.js';
import LED from '../../components/LED/LED.js';
import LED_sign from '../../components/LED_sign/LED_sign.js';

const Home = () => {
	return (
		<>
			<div className="home">
				<Navbar />
				<LED_sign colour="blue" />
			</div>
		</>
	);
};

export default Home;