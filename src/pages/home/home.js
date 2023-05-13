import React from 'react';
import './home.css';
import Navbar from '../../components/navbar/navbar.js'
import LED from '../../components/LED/LED.js'

const Home = () => {
	return (
		<>
			<div className="home">
				<Navbar />
				<h1> </h1>
				<LED colour="red" />
			</div>
		</>
	);
};

export default Home;