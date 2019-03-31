import React from 'react';

class AddTodo extends React.Component {
	render() {
		return (
			<form style={{display: 'flex'}}>
				<input type="text" name="title" placeholder="Add Todo..." style={{flex: '10', padding: '5px'}}/>
				<input type="submit" value="Submit" className="btn" style={{flex: '1'}} />
			</form>
		)
	}
}

export default AddTodo;
