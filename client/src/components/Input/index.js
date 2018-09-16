import React from "react";
// import Input from 'react-toolbox/lib/input';

const linkStyle = {
	width: '100%',
	boxSizing: 'border-box',
	border: '1px solid #ddd',
	cursor: 'text',
	padding: '8px',
	borderRadius: '2px',
	marginBottom: '2em',
	boxShadow: 'inset 0px 1px 8px -3px #ABABAB',
	background: '#fefefe'
}

const MyInput = props => (
	<div className="form-group row">	
		<input type="text" name={props.name} value={props.value} placeholder={props.placeholder} style={linkStyle} onChange={props.onChange} />
	</div>
);

export default MyInput;
