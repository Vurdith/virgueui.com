import { useEffect, useRef } from 'react'
// Vite worker import (URL form) so TypeScript is happy
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import workerUrl from '../workers/bgWorker.ts?worker&url'

export default function AnimatedBackground() {
	const ref = useRef<HTMLCanvasElement | null>(null)
	const startedRef = useRef(false)

	useEffect(() => {
		const canvas = ref.current
		if (!canvas || startedRef.current) return
		startedRef.current = true
		try {
			if ('transferControlToOffscreen' in canvas) {
				const off = (canvas as HTMLCanvasElement).transferControlToOffscreen()
				// Persist a single worker across rerenders/StrictMode mounts
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				const w: Worker = (window as any).__bgWorker || new Worker(workerUrl, { type: 'module' })
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				;(window as any).__bgWorker = w

				const postResize = () => {
					w.postMessage({
						type: 'resize',
						width: window.innerWidth,
						height: window.innerHeight,
						devicePixelRatio: window.devicePixelRatio || 1,
					})
				}

				w.postMessage({ type: 'init', canvas: off, width: window.innerWidth, height: window.innerHeight, devicePixelRatio: window.devicePixelRatio || 1 }, [off as unknown as Transferable])
				window.addEventListener('resize', postResize)

				// Also react to devicePixelRatio changes (browser zoom)
				let mql: MediaQueryList | null = null
				const bindDprListener = () => {
					try {
						mql = window.matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`)
						const onChange = () => {
							postResize()
							// rebind to new DPR value
							if (mql) mql.removeEventListener('change', onChange)
							bindDprListener()
						}
						mql.addEventListener('change', onChange)
					} catch {
						// noop
					}
				}
				bindDprListener()

				return () => {
					window.removeEventListener('resize', postResize)
					if (mql) {
						try {
							mql.onchange = null
						} catch { /* ignore */ }
					}
				}
			}
		} catch (e) {
			// If already transferred (StrictMode double-mount), just ignore
		}
	}, [])

	return (
		<canvas ref={ref} id="bg-canvas" style={{ position: 'fixed', inset: 0, width: '100vw', height: '100dvh', pointerEvents: 'none', zIndex: 5, willChange: 'transform' }} />
	)
}


