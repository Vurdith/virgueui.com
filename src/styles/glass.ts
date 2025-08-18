import type { CSSProperties } from 'react'

// Performance-friendly glass tokens (lighter blur, softer border)
const GLASS_RADIUS = 12

export const glassBase: CSSProperties = {
	background: 'rgba(255, 255, 255, 0.10)',
	border: '1px solid rgba(255, 255, 255, 0.16)',
	backdropFilter: 'blur(16px) saturate(130%)',
	WebkitBackdropFilter: 'blur(16px) saturate(130%)',
	boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.12), 0 10px 35px rgba(0,0,0,0.25)',
}

export const glassPill: CSSProperties = {
	...glassBase,
	padding: '6px 12px',
	borderRadius: 9999,
	fontSize: '11px',
}

export const glassPanel: CSSProperties = {
	...glassBase,
	borderRadius: GLASS_RADIUS,
	padding: 16,
	overflow: 'hidden',
}

export const glassHeaderBar: CSSProperties = {
	...glassBase,
	position: 'sticky',
	top: 0,
	zIndex: 10,
	borderBottom: '1px solid rgba(255,255,255,0.12)',
}

export const cardCornerRadius = GLASS_RADIUS - 2

// Lightweight variant (no blur) for heavy lists like portfolio
export const glassLitePanel: CSSProperties = {
	background: 'rgba(255,255,255,0.08)',
	border: '1px solid rgba(255,255,255,0.12)',
	borderRadius: GLASS_RADIUS,
	padding: 16,
	overflow: 'hidden',
}


