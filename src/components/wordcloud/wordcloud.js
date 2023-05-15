import React, { useEffect } from 'react';
import TagCloud from 'TagCloud';
import './wordcloud.css';

const Wordcloud = () => {

	useEffect(() => {
		return () => {
			const container = ".tagcloud";

			const tags = [
				"C++",
				"C",
				"Python",
				"Java",
				"MATLAB",
				"Perl",
				"JavaScript",
				"HTML/CSS",
				"Microcontrollers",
				"Arduino",
				"ICs",
				"Hardware Design",
				"SolidWorks",
				"FEA",
				"AutoCAD",
				"EAGLE",
				"Git",
				"Unix"
			];

			const options = {
				radius: 300,
				maxSpeed: "normal",
				initSpeed: "normal",
				keep: true,
			};

			TagCloud(container, tags, options);
		}
	}, [] );

	return (
		<div className="wordcloud">
			<span className="tagcloud"> </span>
		</div>
	);
}

export default Wordcloud;