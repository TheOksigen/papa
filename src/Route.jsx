import React from 'react';
import { Route, Routes } from 'react-router-dom';
import App from './App';
import Pizza from './Pizza';

const RouteConfig = () => {
	return (
		<Routes>
			<Route path="/" element={<App />} />
			<Route path="/pizza/:id" element={<Pizza />} />
		</Routes>
	);
};

export default RouteConfig;
