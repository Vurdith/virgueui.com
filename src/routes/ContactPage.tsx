import { Container, Title, Stack, Group, Text, Anchor, SimpleGrid } from '@mantine/core'
import GlassPanel from '../components/GlassPanel'

export default function ContactPage() {
	const email = 'reeceleneveubusiness@gmail.com'
	const discord = 'virgue_'

	return (
		<Container size="lg">
			<Title order={1} ta="center" mb="xs">Let’s build your UI the right way.</Title>
			<Text ta="center" c="dimmed" mb="xl">Fast replies, clear scopes, and polished delivery. Reach out via email or Discord — whichever you prefer.</Text>

			<SimpleGrid cols={{ base: 1 }} spacing="xl" style={{ alignItems: 'stretch' }}>
				{/* Contact & instructions */}
				<GlassPanel>
					<Stack gap="md">
						<Group wrap="nowrap" align="center" gap={12}>
							<span style={{ display:'inline-grid', placeItems:'center', width:36, height:36, borderRadius:8, background:'rgba(255,255,255,.14)', border:'1px solid rgba(255,255,255,.22)' }}>✉️</span>
							<div>
								<Text fw={700}>Business Email</Text>
								<Anchor href={`mailto:${email}`}>{email}</Anchor>
							</div>
						</Group>

						<Group wrap="nowrap" align="center" gap={12}>
							<span style={{ display:'inline-grid', placeItems:'center', width:36, height:36, borderRadius:8, background:'rgba(255,255,255,.14)', border:'1px solid rgba(255,255,255,.22)' }}>💬</span>
							<div>
								<Text fw={700}>Discord</Text>
								<Text>{discord}</Text>
							</div>
						</Group>
					<div style={{ height: 1, background: 'rgba(255,255,255,.12)', margin: '6px 0 2px' }} />
					<div>
						<Text fw={700} mb={4}>When you contact me, include:</Text>
						<ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.6 }}>
							<li>What we’re building/making</li>
							<li>Preferred style (examples or references help)</li>
							<li>Scope (screens, systems, features)</li>
							<li>Deadline / timeline</li>
						</ul>
					</div>
					</Stack>
				</GlassPanel>
			</SimpleGrid>
		</Container>
	)
}


