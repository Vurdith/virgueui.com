import { Outlet } from 'react-router-dom'
import TopCenterNav from '../components/TopCenterNav'
import AnimatedBackground from '../components/AnimatedBackground'

export default function RootLayout() {
	return (
		<div className="min-h-screen bg-neutral-950 text-neutral-100">
			<TopCenterNav />
			<main className="relative mx-auto max-w-6xl px-4" style={{
				minHeight: '100vh',
				paddingTop: 180,
				paddingBottom: 100,
				background: 'linear-gradient(135deg, #6d28d9 0%, #7c3aed 25%, #8b5cf6 50%, #a78bfa 75%, #c4b5fd 100%)'
			}}>
				<AnimatedBackground />
				<Outlet />
			</main>
			{/* footer removed as requested */}
		</div>
	)
}


