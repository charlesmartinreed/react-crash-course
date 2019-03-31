// class based component
import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends React.Component {
	render() {
			return this.props.todos.map(todo => (
				<TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} />
			));
	}
}

// these are the prop types for our class
// these allow us to specify what sort of data our application should expect to handle with our classes
Todos.propTypes = {
	todos: PropTypes.array.isRequired
}

export default Todos;
