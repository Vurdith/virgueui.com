import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './routes/RootLayout.tsx'
import HomePage from './routes/HomePage.tsx'
import ProjectsPage from './routes/ProjectsPage.tsx'
import ContactPage from './routes/ContactPage.tsx'

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		children: [
			{ index: true, element: <HomePage /> },
			{ path: 'projects', element: <ProjectsPage /> },
			{ path: 'contact', element: <ContactPage /> },
		],
	},
])

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
)
