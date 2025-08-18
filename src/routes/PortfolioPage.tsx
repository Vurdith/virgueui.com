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
	'https://media.discordapp.net/attachments/1166676527245709382/1248374326994927738/image.png?ex=68a436f1&is=68a2e571&hm=fa8a239493b06a21fda4f376fd20c861f870539ed0f8da09ba13c7732c9f766e&=&format=webp&quality=lossless',
	'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1920&auto=format&fit=crop',
	'https://images.unsplash.com/photo-1532993680872-98b088e2cacd?q=80&w=1740&auto=format&fit=crop',
]

const items: PortfolioItem[] = [
	{ name: 'Solo-Leveling UI', description: 'Solo-Leveling Inspired UI with a HUD and some frames.', imageUrl: stock[0], images: [stock[0]] },
]

export default function PortfolioPage() {
	const [opened, setOpened] = useState(false)
	const [active, setActive] = useState<PortfolioItem | null>(null)
	const [imgIdx, setImgIdx] = useState(0)
	const [dir, setDir] = useState<'left' | 'right'>('right')

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
				/* Force X text inside close button and center it */
				.modal-close { display:flex; align-items:center; justify-content:center; position:relative }
				.modal-close svg { display:none }
				.modal-close::before { content:'X'; font-weight:800; font-size:14px; color:#ffffff; text-shadow: 0 1px 4px rgba(0,0,0,.45), 0 0 5px rgba(0,0,0,.3); line-height:1 }
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
				classNames={{
					close: 'modal-close',
					header: 'modal-header',
					title: 'modal-title',
					body: 'modal-body',
					content: 'modal-content',
				}}
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
					close: {
						background: 'rgba(255,255,255,0.10)',
						border: '1px solid rgba(255,255,255,0.20)',
						color: '#fff',
						borderRadius: 9999,
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						lineHeight: 1,
						width: 32,
						height: 32,
						boxShadow: '0 3px 14px rgba(0,0,0,.20)',
						transform: 'translateY(6px)'
					},
				}}
			>
				{active && (
					<div style={{ borderRadius: 12, overflow: 'hidden', background: 'rgba(0,0,0,0.12)', marginBottom: 16, position: 'relative' }}>
						<Image key={imgIdx + (dir === 'right' ? '-r' : '-l')} src={(active.images ?? [active.imageUrl])[imgIdx]} alt={active.name} radius={12} className={dir === 'right' ? 'swoosh-right' : 'swoosh-left'} style={{ display: 'block', width: '100%', maxHeight: '56vh', objectFit: 'contain' }} loading="eager" decoding="async" />
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
		</Container>
	)
}


