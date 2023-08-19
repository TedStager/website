import React from 'react';
import { useRef } from 'react';

import Navbar from '../../components/navbar/navbar.js';
import './portfolio.css';
import { projects } from './projects.js';

const Portfolio = () => {

	const NUM_IN_ROW = 3;

	// const windowDims = useRef([window.innerWidth, window.innerHeight]);
	// alert(windowDims.current[0]);

	function getProjectHtml(project) {
		return (
			<a
			href={project.link}
			key={project.image}
			target="_blank"
			rel="noreferrer noopener"
			className="projectTile">
				<div className="projectTileContents">
					<img
					alt={project.image_desc}
					className="projectImage"
					src={project.image}
					/>

					<div className="projectText">
						<h2 className="projectSub">
							{project.subtitle}
						</h2>
						<h1 className="projectTitle">
							{project.title}
						</h1>
						<p className="projectDesc">
							{project.description}
						</p>
					</div>
				</div>
			</a>
		);
	}

	function getProjectList(projects) {
		const projList = [];
		const fullRows = Math.floor(projects.length / NUM_IN_ROW);
		const overflow = projects.length % NUM_IN_ROW;

		// first get all the full rows
		var counter = 0;
		for (let i = 0; i < fullRows; i++) {
			var row = [];
			
			for (let j = 0; j < NUM_IN_ROW; j++) {
				var projectIndex = i + j*i;
				row[j] = getProjectHtml(projects[counter]);
				counter++;
			}

			projList[i] = row;
		}

		// now get the overflow
		if (overflow) {
			row = [];
			for (let i = 0; i < overflow; i++) {
				var projectIndex = fullRows*NUM_IN_ROW + i;
				row[i] = getProjectHtml(projects[projectIndex]);
			}

			projList[fullRows] = row;
		}

		return projList;
	}

	return (
		<>
			<Navbar />
			<div className="projPortfolio">
				<h1 className="portfolioHeader">
					Check out some of my projects!
				</h1>

				<div className="projectList">
					{
						getProjectList(projects).map((row) => (
							<div className="projectRow">
								{row}
							</div>
						))
					}
				</div>
			</div>
		</>
	);
};

export default Portfolio;