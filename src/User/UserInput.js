import React from 'react'
import "./User.css"

const userInput = (props) => {
	return (
		<input className = "User" type="text" value = {props.username} onChange={props.changeName}/>
	)
};

export default userInput;