type Props = {
	title: string
	description: string
	imageUrl: string
	href?: string
}

import { glassPanel, cardCornerRadius } from '../styles/glass'

export default function GlassCard({ title, description, imageUrl, href }: Props) {
	const Wrapper = href ? 'a' : ('div' as any)
	return (
		<Wrapper
			{...(href ? { href } : {})}
			className="group relative block overflow-hidden transition-transform duration-300 hover:-translate-y-0.5"
			style={glassPanel}
	>
			<div className="relative" style={{ borderRadius: cardCornerRadius, overflow: 'hidden' }}>
				<img src={imageUrl} alt="" className="h-56 w-full object-cover opacity-95 transition-transform duration-500 group-hover:scale-[1.03]" />
				<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_100%,rgba(0,0,0,0.55),transparent)]" />
			</div>
			<div className="p-4" style={{ borderTop: 0 }}>
				<h3 className="text-base font-semibold text-white">{title}</h3>
				<p className="mt-1 text-xs text-neutral-200/80">{description}</p>
			</div>
		</Wrapper>
	)
}


