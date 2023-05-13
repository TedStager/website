import React from 'react';
import './LED_sign.css';
import LED from '../LED/LED.js'

const LED_sign = ({ colour }) => {
	return (
		<div className="sign">
			<div className="letter_T">
			
				<div className="top">
					<LED colour={colour} />
					<LED colour={colour} />
					<LED colour={colour} />
				</div>

				<div className="vertical">
					<LED colour={colour} />
					<LED colour={colour} />
					<LED colour={colour} />
					<LED colour={colour} />
				</div>
			</div>

			<div className="letter_E">
				<div className="bar">
					<LED colour={colour} />
					<LED colour={colour} />
					<LED colour={colour} />
				</div>

				<LED colour={colour} />

				<div className="bar">
					<LED colour={colour} />
					<LED colour={colour} />
				</div>

				<LED colour={colour} />

				<div className="bar">
					<LED colour={colour} />
					<LED colour={colour} />
					<LED colour={colour} />
				</div>
			</div>

			<div className="letter_D">
				<div className="across">
					<LED colour={colour} />
					<LED colour={colour} />
				</div>

				<div className="across">
					<LED colour={colour} />
					<LED colour="clear" />
					<LED colour={colour} />
				</div>

				<div className="across">
					<LED colour={colour} />
					<LED colour="clear" />
					<LED colour={colour} />
				</div>

				<div className="across">
					<LED colour={colour} />
					<LED colour="clear" />
					<LED colour={colour} />
				</div>

				<div className="across">
					<LED colour={colour} />
					<LED colour={colour} />
				</div>
			</div>			
		</div>
	);
};

export default LED_sign;