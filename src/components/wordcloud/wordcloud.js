import React, { useEffect } from 'react';
import { TagCloud } from '@frank-mayer/react-tag-cloud';
import './wordcloud.css';

const Wordcloud = () => {
	return (
		<div className="wordcloud">	
			<TagCloud options={(w: Window & typeof globalThis): TagCloudOptions => ({
	            	  radius: Math.min(500, w.innerWidth, w.innerHeight) / 2,
	                 maxSpeed: "fast", })}

					  className="TagCloud"
			>
			{[
				"SolidWorks",
				"FEA",
				"AutoCAD",
				"Git",
				"Unix",
				"EAGLE",
				"C++",
				"C",
				"Python",
				"MATLAB",
				"Perl",
				"Java",
				"JavaScript",
				"HTML/CSS",
				"Microcontrollers",
				"Arduino",
				"ICs",
				"Hardware Design",
				"PHP",
				"Drupal"
			]}
			</TagCloud>
		</div>
	);
}

export default Wordcloud;