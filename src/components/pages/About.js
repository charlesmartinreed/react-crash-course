import React from 'react';

// since you need to have anything returned in JSX inside of a DOM element, you can use React.Fragment as a dummy element rather than creating a DOM
export default function About() {
	return (
		<React.Fragment>
			<h1>About</h1>
			<p>This is the TodoList app, v1.0.0. Taken from Brad Traversy's React Crash Course, available on YouTube. </p>
		</React.Fragment>
	)
}

const fragmentStyle = {
	textAlign: 'center'
}
// export default About;
