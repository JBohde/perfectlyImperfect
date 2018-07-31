import React from "react";
import Input from 'react-toolbox/lib/input';


class InputTest extends React.Component {
	state = { name: '', phone: '', multiline: '', email: '', hint: '', label: '' };
  
	handleChange = (name, value) => {
	  this.setState({...this.state, [name]: value});
	};
  
	render () {
	  return (
		<section>
		  <Input type='text' multiline label='Multiline' value={this.state.multiline} onChange={this.handleChange.bind(this, 'multiline')} />
		</section>
	  );
	}
  }
export default InputTest;
