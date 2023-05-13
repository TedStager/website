import React from 'react';
import Navbar from '../../components/navbar/navbar.js'
import './about.css';

const About = () => {
	return (
		<>
			<div className="about">
				<Navbar />
				<p> 
					I am a Mechatronics Engineer from the University of Waterloo!
				</p>
			</div>
		</>
	);
};

export default About;