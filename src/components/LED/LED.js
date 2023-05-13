import React from 'react';
import './LED.css';

const LED = ({ colour }) => {
	return (
		<span className={colour} >
		</span>
	);
};

export default LED;