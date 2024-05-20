import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home'
import {
	createBrowserRouter,
	RouteObject,
	RouterProvider
} from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './redux/store';
import InfoPage from './components/InfoPage/InfoPage';
import ErrorPage from './components/ErrorPage/ErrorPage';


const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/info/:infoTheme',
		element: <InfoPage />,
	},
	{
		path: '*',
		element: <ErrorPage />,
	},
] as RouteObject[])

function App() {
	return (
		<React.Fragment>
			<Provider store={store}>
				<RouterProvider router={router} />
			</Provider>
		</React.Fragment>
	);
}

export default App;