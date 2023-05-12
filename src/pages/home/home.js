import React from 'react';
import './home.css';
import Navbar from '../../components/navbar/navbar.js'

const Home = () => {
	return (
		<>
			<Navbar shown={false} />
			<h1> This is Ted's website! </h1>
		</>
	);
};

export default Home;