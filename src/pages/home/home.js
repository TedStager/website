import React from 'react';
import { useState, useEffect } from 'react';
import './home.css';
import Navbar from '../../components/navbar/navbar.js';
import LED_sign from '../../components/LED_sign/LED_sign.js';
import power from './power_button.png'

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

				<div className="signAndButton">
					<LED_sign colour={ ledStatus ? "white" : "off" } />

					<button onClick={() => setLedStatus(!ledStatus)} className="powerButton" >
						<img src={power} className="powerIcon" />
					</button>
				</div>
			
			</div>
		</>
	);
};

export default Home;