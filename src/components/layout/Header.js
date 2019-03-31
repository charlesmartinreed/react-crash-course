import React from 'react';

// This is a 'functional component'. Think of this as having only a render method.
function Header() {
	return  (
		<header style={headerStyle}>
			<h1>TodoList</h1>
		</header>
	)
}

const headerStyle = {
	background: '#333',
	color: '#fff',
	textAlign: 'center',
	padding: '10px'
}

export default Header;
