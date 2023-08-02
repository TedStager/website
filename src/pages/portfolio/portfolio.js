import React from 'react';
import Navbar from '../../components/navbar/navbar.js';
import './portfolio.css';
import { projects } from './data/projects.js';

const Portfolio = () => {
	return (
		<>
			<Navbar />
			<div className="projPortfolio">
				<h1 className="portfolioHeader">
					Check out some of my projects!
				</h1>

				<div className="projectList">
					{
						projects.map((project) => (
							<a
							href={project.link}
							// key={project.image}
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
						))
					}
				</div>
			</div>
		</>
	);
};

export default Portfolio;