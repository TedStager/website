import React from 'react';
import Navbar from '../../../../components/navbar/navbar.js';
import SkillsList from '../../../../components/skills_list/skills_list.js';
import '../project_pages.css';

import finishedPic from './stepped_tone.png';
import schematicPic from './schematic.png';

const SteppedTone = () => {
	const synthSkills = [
		[
			"Digital ICs",
			"Analogue Circuits",
		],
		[
			"Circuit Schematics",
			"Prototyping",
		],
	];

	return (
		<>
			<Navbar />
			
			<div className="projArticle">

				<h1 className="title">Stepped Tone Generator</h1>
				<h1 className="subtitle">A homemade analogue synthesizer.</h1>

				<img src={finishedPic}
					 alt="Picture of synthesizer"
					 className="projectImage"	/>

				 <SkillsList skillArray={synthSkills} />

				<div className="projBody">
					<h3 className="sectionHeader">
						Research and Planning
					</h3>
					<p className="text">
						The concept behind tone generation in this synthesizer actually quite simple, and as such, required few design changes to the stepped tone generator schematic that floats around the web. The circuit revolves around two 555 timers, one that generates a square wave with a fixed frequency which then feeds into a timer that releases a pulse of a fixed duration every time the input pin senses a rising edge on the signal. These two configurations, called astable and monostable respectively, are what cause the strange noises as the original square wave signal gets modulated or clipped by the second timer. The user controls the system using two potentiometers, one for the frequency of the first timer, and the other for the pulse duration of the second. Initially (seen in the schematic below) it was planned to have an additional two LEDS to oscillate back and forth, but this design was scrapped in favour of the single 556 dual-timer chip and a single status LED.
					</p>

					<img src={schematicPic}
						 alt="Picture of schematic"
						 className="bodyImage" />

					<h3 className="sectionHeader">
						Build and Outcome
					</h3>
					<p className="text">
						At first, the circuit was prototyped and troubleshot on a breadboard. This was to validate all components worked and the circuit would be functional before permanently attaching it to anything. Once it was ensured that everything would work as intended, it was soldered to a small piece of perfboard to finalize the build, with the addition of an on/off switch for easier use. In the end, it worked perfectly, and was able to produce a large range of sounds and noises depending on the states of the two potentiometers controlling the period of the timers.
					</p>

					<p className="comingSoon">
						Coming soon: soundclip of the snyth.
					</p>

				</div>
			</div>

		</>
	);
}

export default SteppedTone;