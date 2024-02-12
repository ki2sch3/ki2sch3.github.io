import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createHashRouter } from 'react-router-dom'
import App from './App'
import About from './routes/About'
import './style.css'

const router = createHashRouter([
	{
		path: '/',
		element: <App />,
	},
	{
		path: '/about',
		element: <About />,
	},
])

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
