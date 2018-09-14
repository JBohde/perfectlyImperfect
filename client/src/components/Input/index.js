import React from "react";
import Input from 'react-toolbox/lib/input';


class MyInput extends React.Component {
	state = {};
  
	handleChange = (name, value) => {
	  this.setState({...this.state, [name]: value});
	};
  
	render () {
	  return (
		<section>
		  <Input type='text' multiline label={this.props.multiline} value={this.state.multiline} onChange={this.handleChange.bind(this, 'multiline')} />
		</section>
	  );
	}
  }

const linkStyle = {
	// color: "black",
	// boxShadow: "5px 5px 10px black"
}

const MyInput = props => (
	<div className="form-group row">	
		<textarea type="text" name={props.name} value={props.value} rows={props.rows} cols={props.cols} placeholder={props.placeholder} onChange={props.onChange} />
	</div>
);

export default MyInput;
