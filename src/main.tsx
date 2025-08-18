import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '@mantine/core/styles.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './routes/RootLayout.tsx'
import ProjectsPage from './routes/ProjectsPage.tsx'
import HomePage from './routes/HomePage.tsx'
import ContactPage from './routes/ContactPage.tsx'
import PortfolioPage from './routes/PortfolioPage.tsx'
import { ProcessPage, SkillsPage, OfferingsPage, PricingPage } from './routes/Placeholders.tsx'
import { MantineProvider } from '@mantine/core'
import { Notifications } from '@mantine/notifications'
import theme from './styles/theme.ts'

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		children: [
			{ index: true, element: <HomePage /> },
			{ path: 'portfolio', element: <PortfolioPage /> },
			{ path: 'process', element: <ProcessPage /> },
			{ path: 'skills', element: <SkillsPage /> },
			{ path: 'offerings', element: <OfferingsPage /> },
			{ path: 'pricing', element: <PricingPage /> },
			{ path: 'projects', element: <ProjectsPage /> },
			{ path: 'contact', element: <ContactPage /> },
		],
	},
])

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<MantineProvider defaultColorScheme="dark" theme={theme}>
			<Notifications position="top-right" />
			<RouterProvider router={router} />
		</MantineProvider>
	</StrictMode>,
)
