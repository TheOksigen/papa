import React from 'react';
import ReactDOM from 'react-dom';
import RouteConfig from './Route.jsx';
import { BrowserRouter } from 'react-router-dom';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(
	<BrowserRouter>
		<RouteConfig />
	</BrowserRouter>
);
