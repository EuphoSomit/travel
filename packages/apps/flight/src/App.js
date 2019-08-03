import React, { Component } from 'react';

import { CompOne, CompTwo } from '@travel/components';

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h1>
						<a
							className="App-link"
							href="https://github.com/react-workspaces/cra-workspaces-playground"
							target="_blank"
							rel="noopener noreferrer"
						>
							<strong>React</strong> Workspaces
						</a>
					</h1>
					<h2>Hot Reload Your Workspaces</h2>
					<p className="body">
						<code className="file">
							packages/apps/app-one/src/App.js
						</code>
						<code className="file">
							packages/components/src/CompOne/CompOne.js
						</code>
						<code className="file">
							packages/components/src/CompTwo/CompTwo.js
						</code>
					</p>
					<div className="components">
						<CompOne />
						<CompTwo />
					</div>
				</header>
			</div>
		);
	}
}

export default App;
