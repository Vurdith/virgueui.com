import { NavLink } from 'react-router-dom'
import type { CSSProperties } from 'react'
import { useEffect, useRef } from 'react'
import { glassBase, glassPill } from '../styles/glass'
import { IconBriefcase, IconRoute, IconBulb, IconLayoutGrid, IconCurrencyPound, IconMail } from '@tabler/icons-react'

const navStyle: CSSProperties = {
	...glassBase,
	position: 'fixed',
	top: 20,
	left: '50%',
	transform: 'translateX(-50%)',
	zIndex: 50,
	borderRadius: 9999,
	padding: '10px 20px',
	display: 'flex',
	gap: 16,
	alignItems: 'center',
	flexWrap: 'nowrap',
	maxWidth: 'min(100vw - 16px, 1200px)',
    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.12), 0 12px 30px rgba(0,0,0,0.25)'
}

const linkStyle = (isActive: boolean): CSSProperties => ({
	...glassPill,
	textDecoration: 'none',
	color: isActive ? '#fff' : 'rgba(255,255,255,0.9)',
	background: isActive ? 'rgba(255,255,255,0.18)' : glassPill.background,
	border: isActive ? '1px solid rgba(255,255,255,0.25)' : glassPill.border,
	boxShadow: isActive
		? '0 0 0 1px rgba(255,255,255,0.28), 0 8px 24px rgba(0,0,0,0.45), 0 0 24px rgba(167,139,250,0.55)'
		: glassPill.boxShadow,
	position: 'relative',
	overflow: 'hidden',
	willChange: 'transform',
	transition: 'transform 220ms cubic-bezier(.2,.8,.2,1), box-shadow 220ms ease, background 220ms ease, color 220ms ease',
	transform: 'translateZ(0)',
})

const circleStyle = (isActive: boolean): CSSProperties => ({
	...glassPill,
	width: 56,
	height: 56,
	borderRadius: 9999,
	padding: 0,
	display: 'inline-flex',
	alignItems: 'center',
	justifyContent: 'center',
	background: isActive ? 'rgba(255,255,255,0.18)' : glassPill.background,
	border: isActive ? '1px solid rgba(255,255,255,0.25)' : glassPill.border,
	boxShadow: isActive
		? '0 0 0 1px rgba(255,255,255,0.30), 0 10px 28px rgba(0,0,0,0.50), 0 0 32px rgba(167,139,250,0.65)'
		: glassPill.boxShadow,
	position: 'relative',
	overflow: 'hidden',
	willChange: 'transform',
	transition: 'transform 220ms cubic-bezier(.2,.8,.2,1), box-shadow 220ms ease, background 220ms ease',
	transform: 'translateZ(0)',
})

export default function TopCenterNav() {
	const items = [
		{ to: '/portfolio', label: 'Portfolio' },
		{ to: '/process', label: 'Process' },
		{ to: '/skills', label: 'Skills' },
		{ to: '/offerings', label: 'Offerings' },
		{ to: '/pricing', label: 'Pricing' },
		{ to: '/contact', label: 'Contact' },
	]

	const leftItems = items.slice(0, 3)
	const rightItems = items.slice(3)

	const navRef = useRef<HTMLDivElement | null>(null)
	const orbRef = useRef<HTMLSpanElement | null>(null)

	useEffect(() => {
		const nav = navRef.current as HTMLDivElement | null
		const orb = orbRef.current as HTMLSpanElement | null
		if (!nav || !orb) return
		let t = Math.random() * Math.PI * 2
		let raf = 0
		let last: number | null = null
		let rect = nav.getBoundingClientRect()
		const speed = 0.6 // radians per second (time-based)
		const ro = new ResizeObserver(() => { rect = nav.getBoundingClientRect() })
		ro.observe(nav)
		function step(now: number) {
			if (last === null) last = now
			const dtMs = now - last
			if (dtMs < 16) { raf = requestAnimationFrame(step); return }
			const dt = dtMs / 1000
			last = now
			const rx = rect.width / 2 + 10
			const ry = rect.height / 2 + 10
			// curved, lively path using multiple frequencies
			const x = rx * Math.cos(t) + 8 * Math.sin(3 * t)
			const y = ry * Math.sin(t * 0.9 + 0.6) + 6 * Math.sin(2.3 * t)
			if (orb) {
				orb.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`
				orb.style.filter = `blur(1px)`
			}
			t += dt * speed
			raf = requestAnimationFrame(step)
		}
		raf = requestAnimationFrame(step)
		return () => { cancelAnimationFrame(raf); ro.disconnect() }
	}, [])

	const VIZ_BARS = 28

	// Return an appropriate icon for each route (used on mobile-only)
	const iconFor = (to: string) => {
		switch (to) {
			case '/portfolio': return <IconBriefcase size={18} />
			case '/process': return <IconRoute size={18} />
			case '/skills': return <IconBulb size={18} />
			case '/offerings': return <IconLayoutGrid size={18} />
			case '/pricing': return <IconCurrencyPound size={18} />
			case '/contact': return <IconMail size={18} />
			default: return null
		}
	}

	return (
		<nav style={navStyle} ref={navRef} className="tc-nav">
			{/* fairy orb with curved path */}
			<span ref={orbRef} className="pointer-events-none" style={{
				position: 'absolute', left: '50%', top: '50%',
				width: 14, height: 14, borderRadius: '9999px',
				transform: 'translate(-50%, -50%)',
				background: 'radial-gradient(circle, #ffffff 10%, #c4b5fd 60%, rgba(196,181,253,.2) 100%)',
				boxShadow: '0 0 24px 10px rgba(167,139,250,0.55)',
			}} />
			{/* energy border (stronger and visible) */}
			<span className="pointer-events-none absolute -inset-1" style={{
				borderRadius: 9999,
				background: 'conic-gradient(from 0deg, rgba(192,132,252,.0) 0deg, rgba(192,132,252,.55) 120deg, rgba(192,132,252,.0) 300deg)',
				animation: 'spin 3.5s linear infinite',
				filter: 'blur(4px) saturate(140%)',
				mixBlendMode: 'screen',
				opacity: .9,
			}} />
			<span className="pointer-events-none absolute inset-0" style={{
				borderRadius: 9999,
				boxShadow: '0 0 40px 10px rgba(167,139,250,0.35) inset, 0 0 18px rgba(167,139,250,0.45)',
			}} />
			{leftItems.map((it) => (
				<NavLink key={it.to} to={it.to} style={({ isActive }) => linkStyle(isActive)} className={({ isActive }) => `nav-pill ${isActive ? 'active' : ''}`}>
					<span className="nav-icon" aria-hidden style={{ position: 'relative', zIndex: 2 }}>{iconFor(it.to)}</span>
					<span className="nav-label" style={{ position: 'relative', zIndex: 2 }}>{it.label}</span>
					{/* animated pulse ring */}
					<span className="pointer-events-none absolute inset-0" style={{
						borderRadius: 9999,
						boxShadow: '0 0 0 0 rgba(255,255,255,0.35)',
						animation: 'pulseRing 2s ease-out infinite',
						zIndex: 1,
					}} />
					{/* rotating gradient border */}
					<span className="pointer-events-none absolute inset-0" style={{
						borderRadius: 9999,
						padding: 2,
						background: 'conic-gradient(from 0deg, #c4b5fd, #a78bfa, #7c3aed, #c4b5fd)',
						animation: 'spin 3s linear infinite',
						WebkitMask: 'radial-gradient(farthest-side, transparent calc(100% - 3px), black 0)',
						mask: 'radial-gradient(farthest-side, transparent calc(100% - 3px), black 0)',
						zIndex: 0,
					}} />
					{/* hover ripple */}
					<span className="pointer-events-none absolute left-1/2 top-1/2" style={{
						width: 6, height: 6, borderRadius: '9999px',
						background: 'rgba(255,255,255,0.55)',
						transform: 'translate(-50%,-50%) scale(0)',
						animation: 'ripple 1.2s ease-out infinite',
					}} />
				</NavLink>
			))}
			{/* Center large circular Home button with faux audio visualizer */}
			<NavLink
				to="/"
				style={({ isActive }) => ({ ...circleStyle(isActive), overflow: 'visible' })}
				className={({ isActive }) => `nav-pill home-circle ${isActive ? 'active' : ''}`}
				aria-label="Home"
			>
				{/* faux audio bars extruding from center */}
				{Array.from({ length: VIZ_BARS }).map((_, i) => {
					const angle = `${(360 / VIZ_BARS) * i}deg`
					const dur = 1.8 + (i % 8) * 0.18 // slower, varied
					const delay = (i % 16) * 0.05
					return (
						<span
							key={`viz-${i}`}
							className="viz-bar pointer-events-none"
							style={{ ['--a' as any]: angle, animationDuration: `${dur}s`, animationDelay: `${delay}s`, zIndex: 1, top: '35%' } as unknown as CSSProperties}
						/>
					)
				})}
				<img src="https://media.discordapp.net/attachments/1106636246496841801/1406831874269122620/a85e88ca-c5d9-4231-9f8b-9aed1e08946a-anime-boy-in-a-purple-cloak-stunning-purple-anime-pfp-boys-2.png?ex=68a3e5c8&is=68a29448&hm=dad2218d2791251c22617977a655ceeba7fb5d551eae411ad9c5b5e549f23442&=&format=webp&quality=lossless" alt="Home Avatar" style={{ width: 44, height: 44, borderRadius: '9999px', position: 'relative', zIndex: 5 }} />
				{/* rotating gradient border ring above bars */}
				<span className="pointer-events-none absolute inset-0" style={{
					borderRadius: 9999,
					padding: 2,
					background: 'conic-gradient(from 0deg, #c4b5fd, #a78bfa, #7c3aed, #c4b5fd)',
					animation: 'spin 3s linear infinite',
					WebkitMask: 'radial-gradient(farthest-side, transparent calc(100% - 3px), black 0)',
					mask: 'radial-gradient(farthest-side, transparent calc(100% - 3px), black 0)',
					zIndex: 4,
				}} />
				{/* subtle pulse ring */}
				<span className="pointer-events-none absolute inset-0" style={{
					borderRadius: 9999,
					boxShadow: '0 0 0 0 rgba(255,255,255,0.35)',
					animation: 'pulseRing 2s ease-out infinite',
					zIndex: 4,
				}} />
				{/* top shadow overlay, visible only when active */}
				<span className="viz-shadow-top pointer-events-none" />
			</NavLink>
			{rightItems.map((it) => (
				<NavLink key={it.to} to={it.to} style={({ isActive }) => linkStyle(isActive)} className={({ isActive }) => `nav-pill ${isActive ? 'active' : ''}`}>
					<span className="nav-icon" aria-hidden style={{ position: 'relative', zIndex: 2 }}>{iconFor(it.to)}</span>
					<span className="nav-label" style={{ position: 'relative', zIndex: 2 }}>{it.label}</span>
					<span className="pointer-events-none absolute inset-0" style={{
						borderRadius: 9999,
						boxShadow: '0 0 0 0 rgba(255,255,255,0.35)',
						animation: 'pulseRing 2s ease-out infinite',
						zIndex: 1,
					}} />
					<span className="pointer-events-none absolute inset-0" style={{
						borderRadius: 9999,
						padding: 2,
						background: 'conic-gradient(from 0deg, #c4b5fd, #a78bfa, #7c3aed, #c4b5fd)',
						animation: 'spin 3s linear infinite',
						WebkitMask: 'radial-gradient(farthest-side, transparent calc(100% - 3px), black 0)',
						mask: 'radial-gradient(farthest-side, transparent calc(100% - 3px), black 0)',
						zIndex: 0,
					}} />
					<span className="pointer-events-none absolute left-1/2 top-1/2" style={{
						width: 6, height: 6, borderRadius: '9999px',
						background: 'rgba(255,255,255,0.55)',
						transform: 'translate(-50%,-50%) scale(0)',
						animation: 'ripple 1.2s ease-out infinite',
					}} />
				</NavLink>
			))}
			<style>{`
			/* base nav pill sizing set here (CSS, not inline) so media queries can override */
			.tc-nav .nav-pill { font-size: 11px; padding: 6px 12px; flex: 0 0 auto; }
			.nav-icon { display: none; }
			.nav-label { display: inline; }
			.nav-pill { transform: translateZ(0); transition: transform 240ms cubic-bezier(.2,.8,.2,1); will-change: transform; }
			.nav-pill:hover,
			.nav-pill.active,
			.nav-pill[aria-current="page"],
			.nav-pill:focus-visible { animation: pulseScale 1.4s ease-in-out infinite; }
			.nav-pill:active { transform: translateZ(0) scale(.98); }
			@keyframes pulseRing {
				0% { box-shadow: 0 0 0 0 rgba(255,255,255,0.5); }
				70% { box-shadow: 0 0 0 16px rgba(255,255,255,0); }
				100% { box-shadow: 0 0 0 0 rgba(255,255,255,0); }
			}
			@keyframes burst {
				0% { transform: translate(-50%,-50%) scale(0.6); opacity: 0.9; }
				60% { transform: translate(-50%,-50%) scale(2.2); opacity: 0; }
				100% { opacity: 0; }
			}
			@keyframes spin { to { transform: rotate(360deg); } }
			@keyframes sheen { 0% { opacity: 0; } 50% { opacity: 1; } 100% { opacity: 0; } }
			@keyframes ripple {
				0% { transform: translate(-50%,-50%) scale(0); opacity: .35; }
				70% { transform: translate(-50%,-50%) scale(2.2); opacity: 0; }
				100% { opacity: 0; }
			}
			@keyframes pulseScale {
				0% { transform: translateZ(0) scale(1); }
				50% { transform: translateZ(0) scale(1.06); }
				100% { transform: translateZ(0) scale(1); }
			}
			/* Faux audio visualizer bars - square radial glass bars */
			.viz-bar {
				position: absolute;
				left: 50%;
				top: 50%;
				width: 4px;
				height: 16px;
				border-radius: 1px; /* square-like */
				background: linear-gradient(to bottom, rgba(255,255,255,.95), rgba(255,255,255,.22));
				border: 1px solid rgba(255,255,255,.28);
				box-shadow: 0 6px 18px rgba(167,139,250,.35), inset 0 0 6px rgba(255,255,255,.25);
				transform: translate(-50%,-50%) rotate(var(--a)) translateY(-20px) scaleY(1);
				transform-origin: center bottom; /* anchor at center, extend outward */
				filter: saturate(120%);
				mix-blend-mode: screen;
				animation-name: vizPulse;
				animation-timing-function: ease-in-out;
				animation-iteration-count: infinite;
				will-change: transform, opacity;
			}
			@keyframes vizPulse {
				0% { transform: translate(-50%,-50%) rotate(var(--a)) translateY(-20px) scaleY(.8); opacity: .85; }
				50% { transform: translate(-50%,-50%) rotate(var(--a)) translateY(-20px) scaleY(1.25); opacity: 1; }
				100% { transform: translate(-50%,-50%) rotate(var(--a)) translateY(-20px) scaleY(.8); opacity: .85; }
			}
			/* Active shadow overlay sits above visualizer */
			.viz-shadow-top { position:absolute; inset:0; border-radius:9999px; box-shadow: 0 0 0 1px rgba(255,255,255,0.30), 0 10px 28px rgba(0,0,0,0.50), 0 0 32px rgba(167,139,250,0.65); opacity:0; transition:opacity .2s; z-index: 4; }
			.nav-pill.active .viz-shadow-top { opacity: 1; }

			/* Responsive nav: compress spacing and sizes on small screens */
			@media (max-width: 640px) {
			  .tc-nav { gap: 8px; padding: 6px 10px; }
			  .tc-nav .nav-pill { font-size: 0; padding: 6px; width: 36px; height: 36px; border-radius: 9999px; }
			  .nav-icon { display: inline-flex; align-items: center; justify-content: center; width: 20px; height: 20px; }
			  .nav-label { display: none; }
			  .home-circle { width: 48px !important; height: 48px !important; }
			  .home-circle img { width: 38px !important; height: 38px !important; }
			  .home-circle .viz-bar { width: 3px; height: 12px; transform: translate(-50%,-50%) rotate(var(--a)) translateY(-16px) scaleY(1); }
			}
			@media (max-width: 480px) {
			  .tc-nav { gap: 4px; padding: 4px 8px; }
			  .tc-nav .nav-pill { width: 34px; height: 34px; padding: 6px; }
			  .home-circle { width: 44px !important; height: 44px !important; }
			  .home-circle img { width: 34px !important; height: 34px !important; }
			  .home-circle .viz-bar { width: 2px; height: 10px; transform: translate(-50%,-50%) rotate(var(--a)) translateY(-14px) scaleY(1); }
			}
			`}</style>
		</nav>
	)
}


