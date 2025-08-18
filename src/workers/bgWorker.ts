/* eslint-disable no-restricted-globals */
// Dedicated worker that renders the background to an OffscreenCanvas.
// This keeps animation independent from the main UI thread.

type InitMessage = {
	type: 'init'
	canvas: OffscreenCanvas
	width: number
	height: number
	devicePixelRatio: number
}

type ResizeMessage = {
	type: 'resize'
	width: number
	height: number
	devicePixelRatio: number
}

type Message = InitMessage | ResizeMessage

let ctx: OffscreenCanvasRenderingContext2D | null = null
let canvas: OffscreenCanvas | null = null
let DPR = 1

type Shape = { x: number; y: number; w: number; h: number; vy: number; vx: number; alpha: number; rot: number; vr: number }
let shapes: Shape[] = []

let last = 0
let timer: number | undefined

function seedShapes(count: number, width: number, height: number) {
	shapes = Array.from({ length: count }, () => ({
		x: Math.random() * width,
		y: height + Math.random() * 200,
		w: 16 + Math.random() * 32,
		h: 16 + Math.random() * 32,
		vy: 12 + Math.random() * 18,
		vx: (Math.random() - 0.5) * 6,
		alpha: 0.12 + Math.random() * 0.18,
		rot: Math.random() * Math.PI,
		vr: (Math.random() - 0.5) * 0.4,
	}))
}

function resize(width: number, height: number, dpr: number) {
	if (!canvas || !ctx) return
	DPR = Math.min(dpr || 1, 2)
	canvas.width = Math.floor(width * DPR)
	canvas.height = Math.floor(height * DPR)
	ctx.setTransform(DPR, 0, 0, DPR, 0, 0)
	seedShapes(22, width, height)
}

function frame(now: number) {
	if (!ctx || !canvas) return
	if (!last) last = now
	const dt = Math.min((now - last) / 1000, 0.05)
	last = now

	const width = canvas.width / DPR
	const height = canvas.height / DPR

	ctx.clearRect(0, 0, canvas.width, canvas.height)

	// soft glows
	const grad1 = ctx.createRadialGradient(120, 100, 0, 120, 100, 260)
	grad1.addColorStop(0, 'rgba(109,40,217,0.45)')
	grad1.addColorStop(1, 'rgba(109,40,217,0)')
	ctx.fillStyle = grad1
	ctx.beginPath(); ctx.arc(120, 100, 260, 0, Math.PI * 2); ctx.fill()

	const grad2 = ctx.createRadialGradient(width - 160, height - 120, 0, width - 160, height - 120, 240)
	grad2.addColorStop(0, 'rgba(167,139,250,0.35)')
	grad2.addColorStop(1, 'rgba(167,139,250,0)')
	ctx.fillStyle = grad2
	ctx.beginPath(); ctx.arc(width - 160, height - 120, 240, 0, Math.PI * 2); ctx.fill()

	// floating squares
	for (const p of shapes) {
		p.y -= p.vy * dt
		p.x += p.vx * dt
		p.rot += p.vr * dt
		if (p.y < -p.h) {
			p.y = height + 50
			p.x = Math.random() * width
			p.vx = (Math.random() - 0.5) * 6
			p.vy = 12 + Math.random() * 18
			p.w = 16 + Math.random() * 32
			p.h = 16 + Math.random() * 32
			p.alpha = 0.12 + Math.random() * 0.18
		}
		ctx.save()
		ctx.translate(p.x, p.y)
		ctx.rotate(p.rot)
		ctx.fillStyle = `rgba(255,255,255,${p.alpha})`
		ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h)
		ctx.restore()
	}
}

function start() {
	if (timer) clearTimeout(timer as unknown as number)
	const tick = () => { frame(performance.now()); timer = setTimeout(tick, 16) as unknown as number }
	timer = setTimeout(tick, 16) as unknown as number
}

self.onmessage = (ev: MessageEvent<Message>) => {
	const msg = ev.data
	if (msg.type === 'init') {
		canvas = msg.canvas
		ctx = canvas.getContext('2d')
		resize(msg.width, msg.height, msg.devicePixelRatio)
		start()
	}
	if (msg.type === 'resize') {
		resize(msg.width, msg.height, msg.devicePixelRatio)
	}
}


