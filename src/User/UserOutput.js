import React from 'react'
import "./User.css"

const userOutput = (props) => {
	const style = {
		fontWeight: "bold"
	};

	return (
		<div
			style = {style}
			className = "User">
			<p >User name: {props.username}</p>
			<p>Paragraph 1</p>
			<p>Paragraph 2</p>
		</div>
	)
};

export default userOutput;