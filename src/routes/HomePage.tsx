import { Container, Title, Text, Stack } from '@mantine/core'

export default function HomePage() {
	const avatarUrl = 'https://media.discordapp.net/attachments/1106636246496841801/1406831874269122620/a85e88ca-c5d9-4231-9f8b-9aed1e08946a-anime-boy-in-a-purple-cloak-stunning-purple-anime-pfp-boys-2.png?ex=68a3e5c8&is=68a29448&hm=dad2218d2791251c22617977a655ceeba7fb5d551eae411ad9c5b5e549f23442&=&format=webp&quality=lossless'
	const baseApps = [
		{ label: 'Ps', color: '#31A8FF', src: '/apps/photoshop.png' },
		{ label: 'AD', color: '#1BB1FE', src: '/apps/affinity-designer.png' },
		{ label: 'X', color: '#FFFFFF', src: '/apps/x.png' },
		{ label: 'Dc', color: '#5865F2', src: '/apps/discord.png' },
		{ label: 'Fg', color: '#A259FF', src: '/apps/figma.png' },
		{ label: 'Ai', color: '#FF7F18', src: '/apps/illustrator.png' },
	]
	const REPEAT = 8
	const apps = Array.from({ length: REPEAT }, () => baseApps).flat()
	const loop = [...apps, ...apps]

	return (
		<Container size="lg">
			{/* Side app columns (fixed to viewport edges) */}
			<div className="side-col left" aria-hidden>
				<div className="col-mask">
					<div className="col-track">
						{loop.map((a, i) => (
							<span key={`l-${i}`} className="app-bubble" style={{ ['--col' as any]: a.color } as any}>
								{a.src ? <img className="app-img" src={a.src} alt={a.label} loading="lazy" /> : a.label}
							</span>
						))}
					</div>
				</div>
			</div>
			<div className="side-col right" aria-hidden>
				<div className="col-mask">
					<div className="col-track reverse">
						{loop.map((a, i) => (
							<span key={`r-${i}`} className="app-bubble" style={{ ['--col' as any]: a.color } as any}>
								{a.src ? <img className="app-img" src={a.src} alt={a.label} loading="lazy" /> : a.label}
							</span>
						))}
					</div>
				</div>
			</div>

			<div style={{ display: 'grid', placeItems: 'center', marginTop: 10, marginBottom: 30, contentVisibility: 'auto' }}>
				<div className="hero-viz" style={{ position: 'relative', width: 180, height: 180, borderRadius: 9999 }}>
					<img
						src={avatarUrl}
						alt="Avatar"
						style={{
							position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)',
							width: 96, height: 96, borderRadius: '9999px', zIndex: 5,
						}}
					/>
					{/* rotating gradient border ring */}
					<span className="pointer-events-none" style={{
						position: 'absolute', inset: 38, borderRadius: 9999,
						padding: 2,
						background: 'conic-gradient(from 0deg, #c4b5fd, #a78bfa, #7c3aed, #c4b5fd)',
						animation: 'spin 3.5s linear infinite',
						WebkitMask: 'radial-gradient(farthest-side, transparent calc(100% - 4px), black 0)',
						mask: 'radial-gradient(farthest-side, transparent calc(100% - 4px), black 0)',
						zIndex: 1,
					}} />
					{/* subtle pulse ring */}
					<span className="pointer-events-none" style={{
						position: 'absolute', inset: 38, borderRadius: 9999,
						boxShadow: '0 0 0 0 rgba(255,255,255,0.5)',
						animation: 'pulseRing 2s ease-out infinite',
						zIndex: 1,
					}} />
				</div>
			</div>

			<Stack align="center" gap={8} style={{ textAlign: 'center', maxWidth: 820, margin: '0 auto' }}>
				<Title order={1}>I’m Virguê, I design UI the right way.</Title>
				<Text c="dimmed">
					Fast, crisp quality interfaces without bloated cost. Over 5 years of experience, contributions
					across 5+ billion visits, and hundreds of happy customers.
				</Text>
				<Text fw={600}>5+ years experience · 5B+ visits contributed · 100s of clients</Text>
			</Stack>

			<style>{`
				@keyframes spin { to { transform: rotate(360deg); } }
				/* Reuse ring pulse from nav */
				@keyframes pulseRing {
					0% { box-shadow: 0 0 0 0 rgba(255,255,255,0.35); }
					70% { box-shadow: 0 0 0 16px rgba(255,255,255,0); }
					100% { box-shadow: 0 0 0 0 rgba(255,255,255,0); }
				}

				/* Side columns */
				.side-col { position: fixed; top: 0; bottom: 0; width: 84px; z-index: 4; pointer-events: none; }
				.side-col.left { left: 0; padding-left: 18px; }
				.side-col.right { right: 0; padding-right: 18px; }
				.col-mask { position: absolute; inset: 0; overflow: hidden; }
				.col-track { position: absolute; top: 0; left: 0; right: 0; display: flex; flex-direction: column; align-items: center; gap: 22px; animation: colScroll var(--dur, 55s) linear infinite; will-change: transform; }
				.col-track.reverse { animation-direction: reverse; }
				@keyframes colScroll { from { transform: translateY(0); } to { transform: translateY(-50%); } }

				/* Mobile adjustments: shrink width, speed, and ensure both sides run */
				@media (max-width: 640px) {
					.side-col { width: 64px; }
					.col-track { gap: 18px; animation-duration: 45s; }
				}

				.app-bubble { width: 50px; height: 50px; border-radius: 14px; display: grid; place-items: center; font-weight: 700; color: #fff; font-size: 16px; letter-spacing: .5px; background: linear-gradient(180deg, rgba(255,255,255,.06), rgba(255,255,255,.02)), radial-gradient(circle at 30% 30%, var(--col, #a78bfa), transparent 65%); border: 1px solid rgba(255,255,255,.18); box-shadow: inset 0 1px 0 rgba(255,255,255,.22), 0 12px 30px rgba(0,0,0,.25); }
				.app-img { width: 28px; height: 28px; object-fit: contain; filter: drop-shadow(0 2px 4px rgba(0,0,0,.35)); }
			`}</style>
		</Container>
	)
}


