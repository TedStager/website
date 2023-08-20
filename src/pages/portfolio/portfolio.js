import React from 'react';
import { useState, useEffect } from 'react';

import Navbar from '../../components/navbar/navbar.js';
import './portfolio.css';
import { projects } from './projects.js';

const Portfolio = () => {

	
	// all of this is to get the number in the row to be dynamic
	const [numInRow, setNumInRow] = useState(3);

	const [dims, setDims] = useState({
		height: window.innerHeight,
		width: window.innerWidth,
	});

	useEffect(() => {
		window.addEventListener('resize', () => {
			setTimeout(() => {
				setDims({
					height: window.innerHeight,
					width: window.innerWidth,
				});

				// logic for num in row
				if (dims.width < 920)
					setNumInRow(1);
				else if (dims.width < 1250)
					setNumInRow(2);
				else
					setNumInRow(3);

				console.log(dims.width);
			});
		});
	});
	
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
		const fullRows = Math.floor(projects.length / numInRow);
		const overflow = projects.length % numInRow;

		// first get all the full rows
		var counter = 0;
		for (let i = 0; i < fullRows; i++) {
			var row = [];
			
			for (let j = 0; j < numInRow; j++) {
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
				var projectIndex = fullRows*numInRow + i;
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