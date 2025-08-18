import { Container, Title, SimpleGrid } from '@mantine/core'
import { projects } from '../data/projects'
import GlassPanel from '../components/GlassPanel'
import GlassCard from '../components/GlassCard'

export default function ProjectsPage() {
	return (
		<Container size="lg">
			<Title order={2} mb="md">Projects</Title>
			<SimpleGrid cols={{ base: 1, md: 2 }} spacing="lg">
				{projects.map((p) => (
					<GlassPanel key={p.name}>
						<GlassCard title={p.name} description={p.description} imageUrl={p.imageUrl} href={p.link} />
					</GlassPanel>
				))}
			</SimpleGrid>
		</Container>
	)
}


