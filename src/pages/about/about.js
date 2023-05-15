import React from 'react';
import Navbar from '../../components/navbar/navbar.js';
import Wordcloud from '../../components/wordcloud/wordcloud.js';
import './about.css';

const About = () => {
	return (
		<>
			<div className="about">
				<Navbar />
				
				<h1 className="aboutHeader">
					About Me
				</h1>

				<p className="aboutDescription">
					Hi there! My name is Ted, and I am a Mechatronics Engineering
					student from the University of Waterloo. I have a strong 
					background in mechanical design, hardware design, and software
					developement, and am always looking to learn new skills!
				</p>

				<p className="aboutDescription">
					I am a dedicated and independent worker, and always make sure
					to effectively manage my time to deliver tasks on time and
					well done. I also work well in a team, which has led me to 
					success in many environments.
				</p>

				<p className="aboutDescription">
					In my free time, I love to learn new technologies and skills,
					and figure out new ways to apply them to improve an experience
					or just build something cool. Aside from that, I love to read,
					cook, ski, and play piano in my free time.
				</p>

				<Wordcloud className="cloudPos" />
			</div>
		</>
	);
};

export default About;