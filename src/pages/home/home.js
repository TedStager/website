import React from 'react';
import { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
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

	const descriptors = [
		" Mechatronics Engineering Student", 2000,
		" Software Developer", 1000,
		" Mechanical Designer", 800,
		" Web Developer", 1000,
		" Hardware Designer", 1000,
		" Piano Player", 750,
		"n Amateur Cook", 800,
	];


	return (
		<>
			<div className="home">
				<Navbar />

				<h1 className="intro">
					Hi, I'm
				</h1>

				<div className="signAndButton">

					<span className="ledSign">
						<LED_sign colour={ ledStatus ? "white" : "off" } />
					</span>

					<button onClick={() => setLedStatus(!ledStatus)} 
							className="powerButton" >

						<img src={power} 
							 className="powerIcon" 
							 draggable="false" />
							 
					</button>
				</div>

				<div className="description">
					I am a 
					<TypeAnimation 
					 sequence={descriptors}
					 wrapper="span"
					 cursor="true"
					 repeat={Infinity} />
				</div>
			
			</div>
		</>
	);
};

export default Home;