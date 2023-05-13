import React from 'react';
import './home.css';
import Navbar from '../../components/navbar/navbar.js'

const Home = () => {
	return (
		<>
			<div className="home">
				<Navbar />
				<h1> I am Ted! </h1>
			</div>
		</>
	);
};

export default Home;