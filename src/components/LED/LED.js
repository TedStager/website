import React from 'react';
import './LED.css';

const LED = ({ colour }) => {
	return (
		<div className={colour} >
		</div>
	);
};

export default LED;