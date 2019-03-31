import React, { Component } from 'react';
import Todos from './components/Todos'
import './App.css';

class App extends Component {
  render() {
		// lifecycle method that renders what we see in the DOM
    return (
			// note that you don't use 'class' in JSX, you use 'className'
			// this looks like HTML, but it's actually JSX
			// <!-- We embed our custom components with tags -->
      <div className="App">
					<Todos />
      </div>
    );
  }
}

export default App;
