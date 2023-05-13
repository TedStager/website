import React from 'react';
import { useState, useEffect } from 'react';
import './home.css';
import Navbar from '../../components/navbar/navbar.js';
import LED_sign from '../../components/LED_sign/LED_sign.js';

const Home = () => {
	const [ledStatus, setLedStatus] = useState(false);

	// initial lights turn on
	useEffect(() => {
		setLedStatus(true);
	}, []);

	return (
		<>
			<div className="home">
				<Navbar />

				<h1 className="intro">
					Hi, I'm
				</h1>

				<LED_sign colour={ ledStatus ? "white" : "off" } />

				<button onClick={() => setLedStatus(!ledStatus)}>
					Toggle Lights
				</button>

			</div>
		</>
	);
};

export default Home;