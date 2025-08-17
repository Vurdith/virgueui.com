type Project = {
	name: string
	description: string
	link: string
}

const projects: Project[] = [
	{ name: 'Project One', description: 'A brief description of your project showcasing tech and impact.', link: '#' },
	{ name: 'Project Two', description: 'Another cool project—keep it concise with clear value.', link: '#' },
]

export default function ProjectsPage() {
	return (
		<section className="space-y-8">
			<h2 className="text-2xl font-semibold">Projects</h2>
			<ul className="grid gap-4 sm:grid-cols-2">
				{projects.map((p) => (
					<li key={p.name} className="rounded-lg border border-neutral-800 p-5">
						<h3 className="text-lg font-medium">{p.name}</h3>
						<p className="mt-2 text-sm text-neutral-300">{p.description}</p>
						<a href={p.link} className="mt-3 inline-block text-sm text-white underline">View</a>
					</li>
				))}
			</ul>
		</section>
	)
}


