import { NavLink, Outlet } from 'react-router-dom'

export default function RootLayout() {
	return (
		<div className="min-h-screen bg-neutral-950 text-neutral-100">
			<header className="sticky top-0 z-10 border-b border-neutral-800 bg-neutral-950/80 backdrop-blur">
				<div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
					<nav className="flex gap-6 text-sm">
						<NavLink to="/" className={({ isActive }) => isActive ? 'text-white' : 'text-neutral-400 hover:text-white'}>Home</NavLink>
						<NavLink to="/projects" className={({ isActive }) => isActive ? 'text-white' : 'text-neutral-400 hover:text-white'}>Projects</NavLink>
						<NavLink to="/contact" className={({ isActive }) => isActive ? 'text-white' : 'text-neutral-400 hover:text-white'}>Contact</NavLink>
					</nav>
				</div>
			</header>
			<main className="mx-auto max-w-6xl px-4 py-10">
				<Outlet />
			</main>
			<footer className="border-t border-neutral-800 py-6 text-center text-xs text-neutral-400">
				© {new Date().getFullYear()} Your Name
			</footer>
		</div>
	)
}


