export default function ContactPage() {
	return (
		<section className="max-w-md space-y-6">
			<h2 className="text-2xl font-semibold">Contact</h2>
			<form action="https://formspree.io/f/your-id" method="POST" className="space-y-4">
				<input name="name" placeholder="Name" className="w-full rounded-md border border-neutral-800 bg-neutral-900 px-3 py-2 text-neutral-100 placeholder-neutral-500" />
				<input type="email" name="email" placeholder="Email" className="w-full rounded-md border border-neutral-800 bg-neutral-900 px-3 py-2 text-neutral-100 placeholder-neutral-500" />
				<textarea name="message" placeholder="Message" className="h-32 w-full rounded-md border border-neutral-800 bg-neutral-900 px-3 py-2 text-neutral-100 placeholder-neutral-500" />
				<button className="rounded-md bg-white px-4 py-2 text-neutral-900">Send</button>
			</form>
		</section>
	)
}


