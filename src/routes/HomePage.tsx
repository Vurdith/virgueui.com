export default function HomePage() {
	return (
		<section className="space-y-6">
			<h1 className="text-3xl font-bold">Hi, I’m Your Name</h1>
			<p className="max-w-2xl text-neutral-300">
				Frontend developer building fast, accessible web apps with React, TypeScript, and Tailwind CSS.
			</p>
			<div className="flex gap-3">
				<a href="#projects" className="rounded-md bg-white px-4 py-2 text-neutral-900">View Projects</a>
				<a href="/contact" className="rounded-md border border-neutral-700 px-4 py-2 text-neutral-200">Contact</a>
			</div>
		</section>
	)
}


