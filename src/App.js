import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import axios from 'axios';


import Header from './components/layout/Header';
import About from './components/pages/About';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';

// import uuid from 'uuid';

import './App.css';

class App extends Component {
	state = {
		todos: []
	}

	// toggles the 'complete' prop for our item
	markComplete = (id) => {
		this.setState( {todos: this.state.todos.map(todo => {
			if(todo.id === id) {
				todo.completed = !todo.completed
				}
				return todo;
			})
		})
	}

	// DELETE todos when trash button is selected
	deleteTodo = (id) => {
		axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
			.then(res => this.setState({todos: this.state.todos.filter(todo => todo.id !== id)}));
		// this.setState( {todos: this.state.todos.filter(todo => {
		// 	return todo.id !== id
		// })})
	}

	// ADD a new todo when the submit is clicked
	// using the spread operator because it makes a copied array
	addTodo = (title) => {
		// MAKE POST REQUEST
		axios.post('https://jsonplaceholder.typicode.com/todos', {
			title,
			completed: false
		})
			.then(res => this.setState({todos: [...this.state.todos, res.data] }))
	}

	// make API GET request
	componentDidMount() {
		// lifecycle method that runs right after the component mounts
		axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
			.then(res => this.setState({ todos: res.data}))
	}

  render() {
		// lifecycle method that renders what we see in the DOM
		console.log(this.state.todos);
    return (
			// note that you don't use 'class' in JSX, you use 'className'
			// this looks like HTML, but it's actually JSX
			// <!-- We embed our custom components with tags -->
			// passing our todos, from our App state, to the Todos
			// if we want to use the router, we need to wrap EVERYTHING in it
			<Router>
	      <div className="App">
					<div className="container">
						<Header />
						<Route exact path="/" render={props => (
							<React.Fragment>
								<AddTodo addTodo={this.addTodo} />
								<Todos todos={this.state.todos} markComplete={this.markComplete} deleteTodo={this.deleteTodo}/>
							</React.Fragment>
						)} />

						<Route path="/about" component={About} />
					</div>
	      </div>
			</Router>
    );
  }
}

export default App;
