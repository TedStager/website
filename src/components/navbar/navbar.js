import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'

const Navbar = () => {
	return (
		<>	
			<nav>
				<Link className="navlink" to="/">
					Home
				</Link>

				<Link className="navlink" to="/about">
					About
				</Link>

				<Link className="navlink" to="/portfolio">
					Portfolio
				</Link>

			</nav>

			<h1> </h1>   {/* placeholder to make up for abs position */}
		</>
	);
};

export default Navbar;