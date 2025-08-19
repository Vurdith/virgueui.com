import { Container, Title, Text, SimpleGrid } from '@mantine/core'
import { glassLitePanel } from '../styles/glass'
import { IconSend, IconPencil, IconGift, IconCloud, IconCrown, IconLayoutGrid, IconBolt, IconPalette, IconShieldCheck, IconMathFunction, IconCalculator, IconPercentage, IconChecklist, IconStar } from '@tabler/icons-react'

export function OfferingsPage() {
    const offerings = [
        {
            title: 'UI/UX Design',
            description: 'Clean, modern UI tailored to your game’s style. Wireframes → polished visuals with any style UI choice.',
            why: 'Useful when you need consistent, beautiful interfaces that guide players effortlessly and boost engagement.',
            icon: <IconLayoutGrid size={64} stroke={1.4} />,
            badge: 'From £7.50 per asset',
        },
        {
            title: 'Roblox Importing',
            description: 'High‑quality imports with greyscaling and 1:1 design from file. Reliable, crisp results every time.',
            why: 'Perfect to get art in‑game correctly the first time, faster iteration, fewer errors, cleaner results.',
            icon: <IconCloud size={64} stroke={1.4} />,
            badge: 'From £3 per asset',
        },
        {
            title: 'Priority Queue',
            description: 'Need it fast? Jump the queue for expedited delivery without compromising quality.',
            why: 'Great for launches and deadlines when timing matters. Your work moves to the front, guaranteed.',
            icon: <IconBolt size={64} stroke={1.4} />,
            badge: 'Add‑on · £100',
        },
        {
            title: 'Yearly Subscription',
            description: 'Long‑term partnership with free imports, yearly frames, and queue priority. Ideal for ongoing projects.',
            why: 'Best value for studios needing ongoing updates. Predictable cost, priority service, and consistent quality.',
            icon: <IconCrown size={64} stroke={1.4} />,
            badge: 'From £950/yr',
        },
        {
            title: 'Branding & Art Direction',
            description: 'Color systems, typography, and component libraries to keep your product consistent and scalable.',
            why: 'Ensures your UI, thumbnails, and promos feel cohesive everywhere, stronger identity, stronger recall.',
            icon: <IconPalette size={64} stroke={1.4} />,
            badge: 'Add‑on · £50',
        },
        {
            title: 'QA & Polish',
            description: 'Final pass for spacing, alignment, and accessibility. Pixel‑perfect refinements that show.',
            why: 'Great for trailers and sneak peeks, showcase‑ready UI that feels premium in every screenshot.',
            icon: <IconShieldCheck size={64} stroke={1.4} />,
            badge: 'Add‑on · £75',
        },
    ]

    return (
        <Container size="lg">
            <Title order={1} ta="center" mb="xs">What I Offer</Title>
            <Text ta="center" c="dimmed" mb="xl">Practical services that ship fast and look right, uniquely tailored to your project.</Text>

            <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="xl" style={{ alignItems: 'stretch', gridAutoRows: '1fr' }}>
                {offerings.map((o) => (
                    <div
                        key={o.title}
                        className="off-card"
                        style={{
                            ...glassLitePanel,
                            position: 'relative',
                            padding: 24,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            justifyContent: 'flex-start',
                            gap: 10,
                            height: '100%',
                            contentVisibility: 'auto',
                            willChange: 'transform',
                            overflow: 'hidden',
                        }}
                    >
                        {/* accent stripe */}
                        <span className="off-stripe" />
                        {/* tape corners */}
                        <span className="off-tape tl" />
                        <span className="off-tape tr" />

                        <div style={{ alignSelf: 'center', marginBottom: 6, position: 'relative' }}>
                            <span className="icon-backglow" />
                            {o.icon}
                        </div>
                        <Title order={3} mb={4} style={{ width: '100%', textAlign: 'left' }}>{o.title}</Title>
                        <Text c="dimmed" style={{ width: '100%', textAlign: 'left' }}>{o.description}</Text>
                        {o.why && <Text c="dimmed" size="sm" style={{ opacity: .9 }}>
                            <strong>Why it’s useful:</strong> {o.why}
                        </Text>}
                        <span className="off-badge" style={{ alignSelf: 'flex-end', marginTop: 'auto' }}>{o.badge}</span>
                    </div>
                ))}
            </SimpleGrid>

            <style>{`
                .off-card { transition: transform .22s ease, box-shadow .22s ease; }
                .off-card:hover { transform: translateY(-3px); box-shadow: 0 22px 55px rgba(0,0,0,.38); }
                .off-stripe { position:absolute; left:0; top:0; bottom:0; width:6px; background: linear-gradient(180deg, #7c3aed, #a78bfa); opacity:.8; box-shadow: 0 0 16px rgba(167,139,250,.45); }
                .off-tape { position:absolute; width:42px; height:10px; background: rgba(255,255,255,.12); border: 1px solid rgba(255,255,255,.18); border-radius: 2px; filter: blur(.2px); }
                .off-tape.tl { left: 18px; top: 10px; transform: rotate(-12deg); }
                .off-tape.tr { right: 18px; top: 8px; transform: rotate(8deg); }
                .icon-backglow { position:absolute; inset:-18px; border-radius:9999px; background: radial-gradient(circle at 30% 30%, rgba(167,139,250,.35), transparent 65%); filter: blur(8px); }
                .off-badge { font-size: 12px; padding: 4px 10px; border-radius: 9999px; background: rgba(255,255,255,.12); border: 1px solid rgba(255,255,255,.22); }
            `}</style>
        </Container>
    )
}

export function PricingPage() {
    const tiers = [
        {
            name: 'Tier 1 — Tiny',
            price: '£5–£12.50 per',
            items: [
                'Close (X) buttons',
                'Cooldown indicators',
            ],
        },
        {
            name: 'Tier 2 — Small',
            price: '£12.50–£25 per',
            items: [
                'Toggles',
                'Sliders',
                'Buttons with states',
                'Simple pop‑ups / Notifications / tooltips',
                'Basic chat / minimap frames',
                'Box containers',
            ],
        },
        {
            name: 'Tier 3 — Medium',
            price: '£35–£75 per',
            items: [
                'Health/Mana/XP Bars',
                'Hotbars / quick‑slots',
                'Simple inventory grids',
                'Top bars',
                'Leaderboard cells',
            ],
        },
        {
            name: 'Tier 4 — Large',
            price: '£75–£150 per',
            items: [
                'Full system frames (shop, inventory, settings)',
                'Leaderboards',
                'Party/Guild UIs',
                'Main menus',
                'Full HUDs with hotbar, bars, etc',
            ],
        },
    ]
    const perks = [
        'Free discovery chat',
        'Transparent quotes & scope',
        'Any style: minimal, skeuomorphic, sci‑fi, playful, your choice',
        'Consistent design tokens & typography',
        'Exported assets (.png/.svg) + source on request',
        'Performance‑minded animations',
        'Minor tweaks after delivery (48h window)'
    ]
    const discounts = [
        { label: '5 assets', off: '5% off' },
        { label: '10 assets', off: '10% off' },
        { label: '25 assets', off: '20% off' },
        { label: '50 assets', off: '40% off' },
    ]

    return (
        <Container size="lg">
            <Title order={1} ta="center" mb="xs">UI Design Commission Pricing</Title>
            <Text ta="center" c="dimmed" mb="xl">Any style of UI, priced clearly with tier‑based rates and a simple inclusion rule.</Text>

            {/* One unified grid of panels for consistent alignment */}
            <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="xl" style={{ alignItems: 'stretch', gridAutoRows: '1fr' }}>
                {/* Tier cards */}
                {tiers.map((t, idx) => (
                    <div key={t.name} className="price-card" style={{ ...glassLitePanel }}>
                        <div className="card-head">
                            <span className="icon-bubble">{idx === 0 ? '🌟' : idx === 1 ? '✨' : idx === 2 ? '💠' : '🏛️'}</span>
                            <Title order={4} m={0}>{t.name}</Title>
                            <span className="badge">{t.price}</span>
                        </div>
                        <ul className="tier-list">
                            {t.items.map((it) => (<li key={it}>{it}</li>))}
                        </ul>
                    </div>
                ))}

                {/* Inclusion rule */}
                <div className="price-card span-2" style={{ ...glassLitePanel }}>
                    <div className="card-head">
                        <span className="icon-bubble"><IconMathFunction size={16} /></span>
                        <Title order={4} m={0}>Inclusion Rule (with math)</Title>
                    </div>
                    <Text c="dimmed" mb={8}>Higher‑tier assets may include lower‑tier elements at 75% off (pay 25% of base). This discount applies only when the smaller asset is required inside the larger one (e.g., a settings frame legitimately needs toggles, sliders, and box containers). Unrelated items don’t qualify. All reduced amounts are rounded to the nearest pound (£1).</Text>
                    <ul className="rate-list">
                        <li><strong>Tiny add‑on</strong>: £5–£12.50 × 25% = £1.25–£3.13</li>
                        <li><strong>Small add‑on</strong>: £12.50–£25 × 25% = £3.13–£6.25</li>
                        <li><strong>Medium add‑on</strong>: £35–£75 × 25% = £8.75–£18.75</li>
                    </ul>
                    <Text mt={8}>How it stacks:</Text>
                    <ul className="rate-list">
                        <li>Small can include Tiny at the reduced rate.</li>
                        <li>Medium can include Small and Tiny at the reduced rate.</li>
                        <li>Large can include Medium, Small, and Tiny at the reduced rate.</li>
                    </ul>
                </div>

                {/* Examples */}
                <div className="price-card span-3" style={{ ...glassLitePanel }}>
                    <div className="card-head">
                        <span className="icon-bubble"><IconCalculator size={16} /></span>
                        <Title order={4} m={0}>Examples</Title>
                    </div>
                    <Text mb={6}><strong>Example A — Medium asset with extras</strong></Text>
                    <ul className="rate-list">
                        <li>Base: Medium (e.g., £60)</li>
                        <li>Includes: 2 Small buttons + 3 Tiny icons</li>
                        <li>Small add‑ons: 2 × (25% of £12.50–£25) = £6.25–£12.50 total</li>
                        <li>Tiny add‑ons: 3 × (£1.25–£3.13) = £3.75–£9.39</li>
                        <li><strong>Total</strong>: £60 + (£6.25–£12.50) + (£3.75–£9.39) = <strong>£70.00–£81.89</strong> → <em>Rounded</em>: <strong>£70–£82</strong></li>
                    </ul>
                    <Text mt={10} mb={6}><strong>Example B — Large system (shop) with sub‑elements</strong></Text>
                    <ul className="rate-list">
                        <li>Base: Large (e.g., £120)</li>
                        <li>Includes: 1 Medium stat bar, 2 Small buttons, 4 Tiny indicators</li>
                        <li>Medium add‑on: £12.50–£18.75</li>
                        <li>Small add‑ons: 2 × (£3.13–£6.25) = £6.26–£12.50</li>
                        <li>Tiny add‑ons: 4 × (£1.25–£3.13) = £5.00–£12.52</li>
                        <li><strong>Total</strong>: £120 + (£12.50–£18.75) + (£6.26–£12.50) + (£5.00–£12.52) = <strong>£143.76–£163.77</strong> → <em>Rounded</em>: <strong>£144–£164</strong></li>
                    </ul>
                </div>

                {/* Perks */}
                <div className="price-card span-2" style={{ ...glassLitePanel }}>
                    <div className="card-head">
                        <span className="icon-bubble"><IconChecklist size={16} /></span>
                        <Title order={4} m={0}>Included Perks</Title>
                    </div>
                    <ul className="rate-list">
                        {perks.map((p) => (<li key={p}>{p}</li>))}
                    </ul>
                </div>

                {/* Discounts */}
                <div className="price-card" style={{ ...glassLitePanel }}>
                    <div className="card-head">
                        <span className="icon-bubble"><IconPercentage size={16} /></span>
                        <Title order={4} m={0}>Bulk Discounts</Title>
                    </div>
                    <div className="discounts">
                        {discounts.map((d) => (
                            <div key={d.label} className="discount-row"><span>{d.label}</span><span>{d.off}</span></div>
                        ))}
                    </div>
                    <Text c="dimmed" size="sm" mt={6}>Discounts apply to base tier prices. Inclusion‑rule add‑ons are already reduced.</Text>
                </div>
            </SimpleGrid>

            {/* Import pricing section */}
            <Title order={1} ta="center" mt="xl" mb="xs">UI Import Commission Pricing</Title>
            <Text ta="center" c="dimmed" mb="xl">Accurate, clean in‑game imports for any style. Includes greyscaling, size checks, and fidelity pass.</Text>
            <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="xl" style={{ alignItems: 'stretch', gridAutoRows: '1fr' }}>
                <div className="price-card" style={{ ...glassLitePanel }}>
                    <div className="card-head">
                        <span className="icon-bubble"><IconCloud size={16} /></span>
                        <Title order={4} m={0}>Tiny</Title>
                        <span className="badge">£3–£7 per</span>
                    </div>
                </div>
                <div className="price-card" style={{ ...glassLitePanel }}>
                    <div className="card-head">
                        <span className="icon-bubble"><IconCloud size={16} /></span>
                        <Title order={4} m={0}>Small</Title>
                        <span className="badge">£7–£14 per</span>
                    </div>
                </div>
                <div className="price-card" style={{ ...glassLitePanel }}>
                    <div className="card-head">
                        <span className="icon-bubble"><IconCloud size={16} /></span>
                        <Title order={4} m={0}>Medium & Large</Title>
                        <span className="badge">£14–£26 per</span>
                    </div>
                </div>
            </SimpleGrid>

            <style>{`
                .price-card { position: relative; display:flex; flex-direction:column; gap:10px; padding: 18px; transition: transform .22s ease, box-shadow .22s ease; }
                .price-card:hover { transform: translateY(-3px); box-shadow: 0 22px 55px rgba(0,0,0,.38); }
                .price-card.span-2 { grid-column: span 2; }
                .price-card.span-3 { grid-column: span 3; }
                .card-head { display:flex; align-items:center; gap:10px; }
                .icon-bubble { display:inline-grid; place-items:center; width:28px; height:28px; border-radius:8px; background: rgba(255,255,255,.14); border:1px solid rgba(255,255,255,.22); font-size:14px; }
                .badge { margin-left:auto; font-size:12px; padding:4px 10px; border-radius:9999px; background: rgba(255,255,255,.12); border:1px solid rgba(255,255,255,.22); }
                .tier-card { position: relative; }
                .tier-card { transition: transform .22s ease, box-shadow .22s ease; }
                .tier-card:hover { transform: translateY(-3px); box-shadow: 0 22px 55px rgba(0,0,0,.38); }
                .tier-stripe { position:absolute; inset:0; background: linear-gradient(120deg, rgba(139,92,246,.10), rgba(167,139,250,.06)); mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0); -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0); padding: 1px; border-radius: 12px; }
                .tier-list { margin: 6px 0 0; padding-left: 18px; line-height: 1.5; }
                .rate-list { margin: 6px 0 0; padding-left: 18px; line-height: 1.6; }
                .discounts { display: grid; grid-template-columns: 1fr auto; gap: 10px 18px; }
                .discount-row { display: contents; }
                .panel-head .head-icon { display:inline-grid; place-items:center; width:28px; height:28px; border-radius:8px; background: rgba(255,255,255,.14); border:1px solid rgba(255,255,255,.22); font-size:14px; }
            `}</style>
        </Container>
    )
}

// Actual Process page inspired by the provided design
export function ProcessPage() {
    const steps = [
        {
            title: 'Reach Out',
            description: 'Tell me about your project, goals, and style preferences so I can understand your vision.',
            icon: <IconSend size={80} stroke={1.4} />,
        },
        {
            title: 'Design',
            description:
                "I’ll create custom UI designs that balance beauty and usability, with wireframes, mockups, and polished visuals.",
            icon: <IconPencil size={80} stroke={1.4} />,
        },
        {
            title: 'Receive',
            description:
                "You’ll receive your UI in a professional format (.afdesign or other preferred files), fully prepared for development and handoff.",
            icon: <IconGift size={80} stroke={1.4} />,
        },
        {
            title: 'Rating',
            description: 'If you loved the result, a quick rating or recommendation helps others pick with confidence, totally optional, but appreciated!',
            icon: <IconStar size={80} stroke={1.4} />,
        },
    ]

    return (
        <Container size="lg">
            <Title order={1} ta="center" mb="xs">Clean, creative, user-focused.</Title>
            <Text ta="center" c="dimmed" mb="xl">The process of turning your vision into stunning UI experiences!</Text>

            <div className="process-unique" style={{ position: 'relative' }}>
                {/* Decorative connectors (hidden on small screens) */}
                <svg
                    className="process-svg"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 30"
                    preserveAspectRatio="none"
                    style={{ position: 'absolute', inset: 0, zIndex: 0, opacity: 0.5, pointerEvents: 'none', filter: 'drop-shadow(0 0 10px rgba(167,139,250,0.45))' }}
                >
                    <defs>
                        <linearGradient id="procGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#8b5cf6" />
                            <stop offset="50%" stopColor="#a78bfa" />
                            <stop offset="100%" stopColor="#c4b5fd" />
                        </linearGradient>
                    </defs>
                    <path d="M 12 22 C 24 8, 38 8, 50 22" fill="none" stroke="url(#procGrad)" strokeWidth="0.6" strokeLinecap="round" className="process-path" />
                    <path d="M 50 22 C 62 34, 76 34, 88 22" fill="none" stroke="url(#procGrad)" strokeWidth="0.6" strokeLinecap="round" className="process-path" />
                </svg>

                <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" style={{ alignItems: 'stretch', gridAutoRows: '1fr' }}>
                    {steps.map((step, i) => (
                        <div
                            key={step.title}
                            className={`step-card step-${i + 1}`}
                            style={{
                                ...glassLitePanel,
                                textAlign: 'center',
                                padding: 28,
                                minHeight: 260,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                height: '100%',
                                gap: 10,
                                contentVisibility: 'auto',
                                transition: 'transform .25s ease, box-shadow .25s ease',
                                willChange: 'transform',
                                contain: 'layout paint style',
                            }}
                        >
                            <span className="step-badge" style={{
                                position: 'absolute',
                                top: 12,
                                left: 12,
                                fontSize: 12,
                                padding: '4px 10px',
                                borderRadius: 9999,
                                background: 'rgba(255,255,255,0.12)',
                                border: '1px solid rgba(255,255,255,0.22)'
                            }}>Step {i + 1}</span>
                            <div className="icon-wrap" style={{ position: 'relative' }}>
                                <span className="icon-glow" style={{ position: 'absolute', inset: -18, borderRadius: 9999, background: 'radial-gradient(closest-side, rgba(167,139,250,0.35), transparent 70%)', filter: 'blur(8px)' }} />
                                {step.icon}
                            </div>
                            <Title order={2} mb={6}>{step.title}</Title>
                            <Text c="dimmed" style={{ maxWidth: 420 }}>{step.description}</Text>
                        </div>
                    ))}
                </SimpleGrid>
            </div>

            <style>{`
                .step-card:hover { transform: translateY(-2px) scale(1.01); box-shadow: 0 18px 45px rgba(0,0,0,0.35); }
                /* Even alignment across all cells; pull the last (Rating) card to center on large screens */
                .process-svg { display: none; }
                @media (min-width: 900px) { .process-svg { display: block; } }
                .process-path { stroke-dasharray: 6 8; animation: procDash 8s linear infinite; }
                @keyframes procDash { to { stroke-dashoffset: -140; } }
                @media (min-width: 900px) {
                    .step-4 { grid-column: 2; }
                }
            `}</style>
        </Container>
    )
}


// Unique Skills page inspired by the provided layout
export function SkillsPage() {
    const skills: { emoji: string; title: string; description: string }[] = [
        { emoji: '🗣', title: 'Communication Skills', description: 'I keep clear, professional, and friendly communication to ensure your vision is fully understood and executed.' },
        { emoji: '🕒', title: 'Availability', description: 'I stay flexible and accessible to clients, making sure I can answer questions and provide updates when you need them.' },
        { emoji: '🎯', title: 'Quality-Driven', description: 'Every design I create is pixel-perfect, user-friendly, and tailored to your goals with no shortcuts.' },
        { emoji: '⏳', title: 'Deadline Keeper', description: 'I respect deadlines and always deliver on time while maintaining high standards of design quality.' },
        { emoji: '🎨', title: 'Creative Thinking', description: 'I bring fresh, original, and modern design ideas to every project, ensuring your UI stands out.' },
        { emoji: '💡', title: 'Problem-Solving', description: 'I design with solutions in mind, making complex processes intuitive and effortless for end users.' },
        { emoji: '👥', title: 'Customer Care', description: 'I listen, adapt, and provide support throughout the process to make the experience stress-free and enjoyable.' },
        { emoji: '🖌', title: 'Attention to Detail', description: 'From color choices to spacing, every element is crafted with precision for a flawless user experience.' },
        { emoji: '📐', title: 'UX Understanding', description: 'I design with users in mind, ensuring interfaces are not just beautiful but also intuitive and functional.' },
        { emoji: '🔄', title: 'Flexibility & Adaptability', description: 'I can adjust designs based on feedback and project needs without compromising quality.' },
        { emoji: '📱', title: 'Responsive Design', description: 'I create designs that work seamlessly across mobile, tablet, and desktop.' },
        { emoji: '⚡', title: 'Efficiency', description: 'I balance speed with quality, providing quick turnarounds without sacrificing detail.' },
        { emoji: '🧠', title: 'Critical Thinking', description: 'I analyze user behavior and project requirements to make design decisions backed by reasoning.' },
        { emoji: '🤝', title: 'Collaboration', description: 'I work well with developers, product owners, and other designers to bring projects smoothly from idea to launch.' },
        { emoji: '📊', title: 'Organization', description: 'I manage files, assets, and design systems so your project is structured and easy to maintain.' },
        { emoji: '🖥', title: 'Tool Mastery', description: 'Proficient in Figma, Adobe XD, Photoshop, Illustrator, and prototyping tools to deliver professional results.' },
        { emoji: '🔍', title: 'Research-Oriented', description: 'I stay updated on design trends, user needs, and competitor analysis to create relevant and modern designs.' },
        { emoji: '🌍', title: 'Multicultural Awareness', description: 'I design with inclusivity in mind, making sure interfaces are accessible and usable for diverse audiences.' },
        { emoji: '🧩', title: 'Consistency', description: 'I maintain consistent styles, typography, and branding throughout the UI for a polished product.' },
        { emoji: '🚀', title: 'Growth-Oriented', description: 'I’m always learning new techniques, tools, and best practices to give my clients cutting-edge design solutions.' },
    ]

    return (
        <Container size="lg">
            <Title order={1} ta="center" mb="xs">Why Hire Me?</Title>
            <Text ta="center" c="dimmed" mb="md">Because great design is more than just looks, it’s about creating experiences.</Text>
            <Text ta="center" c="dimmed" mb="xl">I don’t just design interfaces, I design solutions. A UI should feel natural, guide users effortlessly, and reflect your game's personality. That’s where I come in.</Text>

            {/* Unique mosaic layout with staggered cards and animated accent stripe */}
            <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="xl" style={{ alignItems: 'stretch', gridAutoRows: '1fr' }}>
                {skills.map((s, i) => (
                    <div
                        key={s.title}
                        className={`skill-card skill-${i % 6}`}
                        style={{
                            ...glassLitePanel,
                            padding: 24,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            textAlign: 'center',
                            minHeight: 240,
                            position: 'relative',
                            overflow: 'hidden',
                            transition: 'transform .25s ease, box-shadow .25s ease',
                            contentVisibility: 'auto',
                            height: '100%',
                            gap: 10,
                            willChange: 'transform',
                            contain: 'layout paint style',
                        }}
                    >
                        <div className="skill-emoji" style={{
                            width: 62,
                            height: 62,
                            borderRadius: 9999,
                            display: 'grid',
                            placeItems: 'center',
                            fontSize: 30,
                            marginBottom: 10,
                            background: 'radial-gradient(circle at 30% 30%, rgba(167,139,250,0.35), transparent 60%)',
                            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.2), 0 10px 28px rgba(0,0,0,0.35)'
                        }}>{s.emoji}</div>
                        <Title order={3} mb={6}>{s.title}</Title>
                        <Text c="dimmed" style={{ margin: 0 }}>{s.description}</Text>
                        <span className="skill-accent" />
                    </div>
                ))}
            </SimpleGrid>

            <style>{`
                .skill-card { will-change: transform; }
                .skill-card:hover { transform: translateY(-2px) scale(1.01); box-shadow: 0 18px 45px rgba(0,0,0,0.35); }
                /* Animated gradient accent diagonally across each card */
                .skill-accent { position:absolute; inset:-20%; background: linear-gradient(120deg, rgba(139,92,246,0.0), rgba(167,139,250,0.18), rgba(139,92,246,0.0)); transform: rotate(12deg) translateY(-40%); animation: sweep 9s ease-in-out infinite; pointer-events:none; }
                @keyframes sweep { 50% { transform: rotate(12deg) translateY(20%); } }
                /* Remove stagger to keep rows perfectly aligned */
                @media (min-width: 900px) { .skill-0, .skill-1, .skill-2, .skill-3, .skill-4, .skill-5 { transform: none; } }
            `}</style>
        </Container>
    )
}


