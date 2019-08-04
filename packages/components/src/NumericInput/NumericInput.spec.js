import React from 'react';
import ReactDOM from 'react-dom';
import NumericInput from '.';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<NumericInput />, div);
	ReactDOM.unmountComponentAtNode(div);
});
