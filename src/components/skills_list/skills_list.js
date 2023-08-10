import React from 'react';
import './skills_list.css';

/**
 * In the skill array, it is an array, with each line
 * being an array of skill strings.
 */

const SkillsList = ({ skillArray }) => {
	return (
		<h2 className="skillsBlock">
			{skillArray.map((skillRow) => (
				<div>
					{skillRow.map((skill) => (
						<span className="skill">{skill}</span>
					))}
	
					<br/>

				</div>
			))}
		</h2>
	);
}

export default SkillsList;