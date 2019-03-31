import React, { Component } from 'react';
import Todos from './components/Todos'
import './App.css';

class App extends Component {
	state = {
		todos: [
			{
				id: 1,
				title: 'Take out the trash',
				completed: false
			},
			{
				id: 2,
				title: 'Dinner with friends.',
				completed: false
			},
			{
				id: 3,
				title: 'Schedule a meeting with design team.',
				completed: false
			},
		]
	}

	markComplete = (id) => {
		this.setState( {todos: this.state.todos.map(todo => {
			if(todo.id === id) {
				todo.completed = !todo.completed
				}
				return todo;
			})
		})
	}

  render() {
		// lifecycle method that renders what we see in the DOM
		console.log(this.state.todos);
    return (
			// note that you don't use 'class' in JSX, you use 'className'
			// this looks like HTML, but it's actually JSX
			// <!-- We embed our custom components with tags -->
			// passing our todos, from our App state, to the Todos
      <div className="App">
					<Todos todos={this.state.todos} markComplete={this.markComplete}/>
      </div>
    );
  }
}

export default App;
