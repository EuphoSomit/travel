import React from 'react';
import ReactDOM from 'react-dom';
import Picker from '.';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Picker />, div);
	ReactDOM.unmountComponentAtNode(div);
});
