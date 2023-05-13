import React from 'react';
import './LED.css';

const LED = ({ colour }) => {
	return (
		<span className="led">
			<span className={colour} > 
			</span>
		</span>
	);
};

export default LED;