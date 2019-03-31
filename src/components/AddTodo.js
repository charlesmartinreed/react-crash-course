import React from 'react';

class AddTodo extends React.Component {
	// generally, with inputs, you want your fields to be a state for the component

	// a registration form with name, email, address, etc, would need corresponding state properties for each input...

	state = {
		title: ''
	}

	// this state is constantly being updated
	onChange = (e) => this.setState( { [e.target.name]: e.target.value })

	// when we hit the submit button
	onSubmit = (e) => {
		e.preventDefault();
		this.props.addTodo(this.state.title);
		this.setState({title: ''});
	}

	render() {
		return (
			<form style={{display: 'flex'}} onSubmit={this.onSubmit}>
				<input
				type="text"
				name="title"
				placeholder="Add Todo..." style={{flex: '10', padding: '5px'}}
				value={this.state.title}
				onChange={this.onChange}
				/>

				<input
				type="submit"
				value="Submit"
				className="btn" style={{flex: '1'}}
				/>
			</form>
		)
	}
}

export default AddTodo;
