import { useEffect, useState } from 'react'
import { Container, Title, SimpleGrid, Modal, Image, Text } from '@mantine/core'
import { glassLitePanel } from '../styles/glass'

type PortfolioItem = {
	name: string
	description: string
	imageUrl: string
	images?: string[]
}

const stock = [
	'https://media.discordapp.net/attachments/1407100214011101286/1407100251952648295/korriban.png?ex=68a4dfba&is=68a38e3a&hm=a34d3331a55c39f3a01835435929352e57851040aba7fcbec09fd9f55a39acf9&=&format=webp&quality=lossless&width=2162&height=1216',
]

const items: PortfolioItem[] = [
	{ name: 'Star Wars UI', description: 'Star Wars Inspired UI with a HUD and an information frame.', imageUrl: stock[0], images: [stock[0]] },
]

export default function PortfolioPage() {
	const [opened, setOpened] = useState(false)
	const [active, setActive] = useState<PortfolioItem | null>(null)
	const [imgIdx, setImgIdx] = useState(0)
	const [dir, setDir] = useState<'left' | 'right'>('right')
	const [fullscreen, setFullscreen] = useState(false)

	useEffect(() => {
		if (!active || !active.images || active.images.length <= 1) return
		const next = active.images[(imgIdx + 1) % active.images.length]
		const prev = active.images[(imgIdx - 1 + active.images.length) % active.images.length]
		const a = new window.Image(); a.src = next
		const b = new window.Image(); b.src = prev
	}, [active, imgIdx])

	return (
		<Container size="lg">
			<Title order={2} mb="md" style={{ opacity: opened ? 0 : 1, transition: 'opacity 120ms ease' }}>My Portfolio</Title>
			<SimpleGrid cols={{ base: 1, md: 2 }} spacing="md">
				{items.map((it) => (
					<div key={it.name} style={{ ...glassLitePanel, containIntrinsicSize: '300px', contentVisibility: 'auto' as any, position: 'relative', transition: 'transform 250ms cubic-bezier(.2,.8,.2,1), box-shadow 250ms' }} className="portfolio-card">
						<div onClick={() => { setActive(it); setImgIdx(0); setDir('right'); setOpened(true) }} style={{ cursor: 'pointer' }}>
							<div style={{ borderRadius: 10, overflow: 'hidden' }}>
								<Image src={it.imageUrl} alt={it.name} height={200} fit="cover" loading="lazy" decoding="async" />
							</div>
							<Title order={4} mt="sm">{it.name}</Title>
							<Text size="sm" c="dimmed">{it.description}</Text>
						</div>
					</div>
				))}
				<style>{`
				.portfolio-card:hover { transform: translateY(-4px) scale(1.02); box-shadow: 0 18px 45px rgba(0,0,0,.35) }
				.portfolio-card::after { content:''; position:absolute; inset:0; border-radius:12px; background: radial-gradient(400px 120px at var(--mx,50%) 110%, rgba(255,255,255,.08), transparent 60%); opacity:0; transition: opacity .25s; pointer-events:none }
				.portfolio-card:hover::after { opacity:1 }
				.swoosh-right { animation: swooshR .25s ease-out }
				.swoosh-left { animation: swooshL .25s ease-out }
				@keyframes swooshR { from { transform: translateX(12px); opacity:.6 } to { transform: translateX(0); opacity:1 } }
				@keyframes swooshL { from { transform: translateX(-12px); opacity:.6 } to { transform: translateX(0); opacity:1 } }
				.modal-nav-btn { position:absolute; top:50%; transform:translateY(-50%); width:36px; height:36px; border-radius:9999px; border:1px solid rgba(255,255,255,.25); background:rgba(255,255,255,.12); color:#fff; display:flex; align-items:center; justify-content:center; cursor:pointer; transition: background .15s, border-color .15s; }
				.modal-nav-btn.left { left:10px }
				.modal-nav-btn.right { right:10px }
				.modal-nav-btn:hover { background:rgba(255,255,255,.2); border-color:rgba(255,255,255,.35) }
				`}</style>
			</SimpleGrid>

			<Modal
				opened={opened}
				onClose={() => setOpened(false)}
				title={active?.name}
				size="80%"
				transitionProps={{ transition: 'fade', duration: 60 }}
				overlayProps={{ opacity: 0.18, color: '#000' }}
				lockScroll={false}
				keepMounted={false}
				yOffset="140px"
				closeButtonProps={{ display: 'none' as unknown as string }}
				classNames={{
					header: 'modal-header',
					title: 'modal-title',
					body: 'modal-body',
					content: 'modal-content',
				}}
				style={{ opacity: fullscreen ? 0 : 1, pointerEvents: fullscreen ? 'none' : 'auto' }}
				styles={{
					title: { color: '#ffffff', fontWeight: 700, transform: 'translateY(6px)' },
					header: {
						position: 'sticky', top: 0, zIndex: 3,
						background: 'rgba(255,255,255,0.03)',
						padding: '6px 16px',
						marginBottom: 0,
					},
					body: {
						background: 'rgba(255,255,255,0.02)',
						maxHeight: '70vh',
						overflowY: 'auto',
						padding: '8px 16px 16px',
					},
					content: {
						background: 'rgba(255,255,255,0.06)',
						border: '1px solid rgba(255,255,255,0.10)',
						borderRadius: 16,
						overflow: 'hidden',
						willChange: 'transform',
						transform: 'translateZ(0)'
					},
				}}
			>
				{active && (
					<div style={{ borderRadius: 12, overflow: 'hidden', background: 'rgba(0,0,0,0.12)', marginBottom: 16, position: 'relative' }}>
						<Image
							key={imgIdx + (dir === 'right' ? '-r' : '-l')}
							src={(active.images ?? [active.imageUrl])[imgIdx]}
							alt={active.name}
							radius={12}
							className={dir === 'right' ? 'swoosh-right' : 'swoosh-left'}
							style={{ display: 'block', width: '100%', maxHeight: '56vh', objectFit: 'contain', cursor: 'zoom-in' }}
							loading="eager"
							decoding="async"
							onClick={() => setFullscreen(true)}
						/>
						{(active.images && active.images.length > 1) && (
							<>
								<button className="modal-nav-btn left" aria-label="Previous" onClick={() => { if (!active.images) return; setDir('left'); setImgIdx((imgIdx - 1 + active.images.length) % active.images.length) }}>‹</button>
								<button className="modal-nav-btn right" aria-label="Next" onClick={() => { if (!active.images) return; setDir('right'); setImgIdx((imgIdx + 1) % active.images.length) }}>›</button>
							</>
						)}
					</div>
				)}
				{active && (
					<Text mt="md" c="dimmed">{active.description}</Text>
				)}
			</Modal>

			{/* fullscreen overlay */}
			{fullscreen && active && (
				<div onClick={() => setFullscreen(false)} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,.92)', zIndex: 999999, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'zoom-out' }}>
					<img src={(active.images ?? [active.imageUrl])[imgIdx]} alt={active.name} style={{ maxWidth: '94vw', maxHeight: '94vh', objectFit: 'contain', boxShadow: '0 40px 120px rgba(0,0,0,.65)', borderRadius: 12 }} />
				</div>
			)}
		</Container>
	)
}


