import type { ReactNode } from 'react'
import { glassPanel } from '../styles/glass'

type Props = {
	children: ReactNode
	className?: string
}

export default function GlassPanel({ children, className = '' }: Props) {
	return (
		<div className={className} style={glassPanel}>
			{children}
		</div>
	)
}


