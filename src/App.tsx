import { ArrowDown, ArrowUpRight, Github, Mail } from "lucide-react";

const projects = [
	{
		number: "01",
		name: "IQ Lend",
		category: "Production DeFi",
		description:
			"Morpho Blue-based lending markets for IQ with capped risk parameters, TWAP-backed pricing, and flash-loan leverage.",
		tags: ["Ethereum mainnet", "Solidity", "Morpho Blue", "Fraxswap"],
		links: [
			{
				label: "Source",
				href: "https://github.com/SidharthK2/iq-lend",
			},
		],
	},
	{
		number: "02",
		name: "Polymarket Agent",
		category: "Autonomous agents",
		description:
			"A multi-agent trading system that discovers prediction markets, executes CLOB orders, and tracks positions through a conversational interface.",
		tags: ["TypeScript", "IQ AI ADK", "MCP", "Polymarket"],
		links: [
			{
				label: "Source",
				href: "https://github.com/SidharthK2/polymarket-agent",
			},
		],
	},
	{
		number: "03",
		name: "Popov",
		category: "ETHGlobal Paris prize winner",
		description:
			"Sybil-resistant, one-person-one-vote governance for local communities, combining World ID with onchain voting.",
		tags: ["World ID", "Solidity", "Aragon OSx", "Next.js"],
		links: [
			{
				label: "Case study",
				href: "https://ethglobal.com/showcase/popov-2b6rf",
			},
			{
				label: "Source",
				href: "https://github.com/SidharthK2/popov-front",
			},
		],
	},
	{
		number: "04",
		name: "Vibechex",
		category: "Real-time systems · private build",
		description:
			"Multiplayer chess with peer-to-peer video and a low-latency game state pipeline.",
		tags: ["WebSockets", "WebRTC", "Redis", "TypeScript"],
		links: [],
	},
];

const capabilities = [
	"Smart contracts",
	"DeFi integrations",
	"Blockchain indexers",
	"Agent systems",
	"Backend APIs",
	"Product interfaces",
];

const externalLinkProps = {
	target: "_blank",
	rel: "noopener noreferrer",
};

const Portfolio = () => {
	return (
		<div className="relative min-h-screen overflow-hidden bg-[#0a0a0a] text-zinc-100">
			<div
				aria-hidden="true"
				className="pointer-events-none fixed inset-0 opacity-40"
				style={{
					backgroundImage:
						"radial-gradient(circle at 50% -10%, rgba(245, 158, 11, 0.09), transparent 32rem), linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)",
					backgroundSize: "auto, 72px 72px, 72px 72px",
				}}
			/>

			<div className="relative mx-auto max-w-6xl px-6 sm:px-10">
				<nav
					aria-label="Primary navigation"
					className="flex min-h-24 items-center justify-between border-b border-white/10"
				>
					<a
						href="#top"
						aria-label="Sidharth Kapoor — back to top"
						className="group flex min-h-11 items-center gap-3 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-400"
					>
						<span className="grid size-9 place-items-center rounded-full border border-amber-400/50 bg-amber-400/10 text-sm font-semibold text-amber-300 transition-colors group-hover:bg-amber-400 group-hover:text-neutral-950">
							SK
						</span>
						<span className="hidden text-sm font-medium tracking-wide text-zinc-300 sm:inline">
							Sidharth Kapoor
						</span>
					</a>

					<div className="flex items-center gap-1 text-sm text-zinc-400 sm:gap-3">
						<a
							href="#work"
							className="flex min-h-11 items-center rounded-md px-3 transition-colors hover:text-zinc-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
						>
							Work
						</a>
						<a
							href="#projects"
							className="flex min-h-11 items-center rounded-md px-3 transition-colors hover:text-zinc-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
						>
							Projects
						</a>
						<a
							href="#contact"
							className="flex min-h-11 items-center rounded-md px-3 transition-colors hover:text-zinc-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
						>
							Contact
						</a>
					</div>
				</nav>

				<main id="top">
					<header className="grid min-h-[calc(100vh-6rem)] items-center py-20 lg:grid-cols-[1fr_18rem] lg:gap-20">
						<div>
							<p className="mb-7 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-amber-300">
								<span className="size-1.5 rounded-full bg-amber-300 shadow-[0_0_18px_rgba(252,211,77,0.8)]" />
								Web3 engineer at IQ AI
							</p>
							<h1 className="max-w-4xl text-5xl font-light leading-[1.04] tracking-[-0.045em] text-zinc-50 sm:text-7xl lg:text-[5.4rem]">
								I build DeFi infrastructure and autonomous agents for{" "}
								<span className="text-zinc-500">onchain markets.</span>
							</h1>
							<p className="mt-8 max-w-2xl text-lg font-light leading-8 text-zinc-400 sm:text-xl">
								I work across smart contracts, indexers, backend systems, and
								product surfaces—turning complex protocols into dependable
								software.
							</p>
							<div className="mt-10 flex flex-wrap gap-4">
								<a
									href="#projects"
									className="inline-flex min-h-12 items-center gap-2 rounded-full bg-zinc-100 px-6 text-sm font-medium text-neutral-950 transition-colors hover:bg-amber-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-400"
								>
									Selected work
									<ArrowDown size={16} aria-hidden="true" />
								</a>
								<a
									href="mailto:sidharthkapoor.100@gmail.com"
									className="inline-flex min-h-12 items-center gap-2 rounded-full border border-white/15 px-6 text-sm font-medium text-zinc-300 transition-colors hover:border-white/30 hover:text-zinc-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-400"
								>
									Let&apos;s talk
									<Mail size={16} aria-hidden="true" />
								</a>
							</div>
						</div>

						<div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 lg:mt-0 lg:grid-cols-1">
							<div className="bg-[#0d0d0d] p-6">
								<p className="text-3xl font-light tracking-tight text-zinc-50">
									$1M+
								</p>
								<p className="mt-2 text-sm leading-6 text-zinc-500">
									TVL supported by systems I helped build
								</p>
							</div>
							<div className="bg-[#0d0d0d] p-6">
								<p className="text-3xl font-light tracking-tight text-zinc-50">
									ETHGlobal
								</p>
								<p className="mt-2 text-sm leading-6 text-zinc-500">
									Paris prize winner
								</p>
							</div>
						</div>
					</header>

					<section
						id="work"
						aria-labelledby="work-heading"
						className="scroll-mt-8 border-t border-white/10 py-24"
					>
						<div className="grid gap-12 lg:grid-cols-[12rem_1fr] lg:gap-20">
							<div>
								<p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
									01 / Experience
								</p>
								<h2 id="work-heading" className="mt-4 text-3xl font-light">
									Current work
								</h2>
							</div>

							<article>
								<div className="flex flex-col gap-3 border-b border-white/10 pb-7 sm:flex-row sm:items-start sm:justify-between">
									<div>
										<a
											href="https://iqai.com/"
											{...externalLinkProps}
											className="group inline-flex min-h-11 items-center gap-2 text-2xl font-medium text-zinc-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-400"
										>
											IQ AI
											<ArrowUpRight
												size={18}
												aria-hidden="true"
												className="text-zinc-600 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-amber-300"
											/>
										</a>
										<p className="mt-1 text-zinc-400">Web3 Engineer</p>
									</div>
									<p className="text-sm text-zinc-500">2023 — Present</p>
								</div>

								<div className="mt-8 grid gap-8 text-base font-light leading-8 text-zinc-300 sm:grid-cols-2">
									<p>
										Built blockchain indexing infrastructure supporting more
										than $1M in TVL, with a focus on correctness, reliability,
										and observable onchain state.
									</p>
									<p>
										Built autonomous agents that interact with DeFi protocols
										including Morpho and Fraxswap, spanning contract
										integrations, APIs, and user-facing flows.
									</p>
								</div>

								<ul
									aria-label="Core capabilities"
									className="mt-10 flex flex-wrap gap-2"
								>
									{capabilities.map((capability) => (
										<li
											key={capability}
											className="rounded-full border border-white/10 bg-white/[0.025] px-3.5 py-2 text-xs tracking-wide text-zinc-400"
										>
											{capability}
										</li>
									))}
								</ul>
							</article>
						</div>
					</section>

					<section
						id="projects"
						aria-labelledby="projects-heading"
						className="scroll-mt-8 border-t border-white/10 py-24"
					>
						<div className="mb-14 grid gap-6 lg:grid-cols-[12rem_1fr] lg:gap-20">
							<p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
								02 / Projects
							</p>
							<div>
								<h2
									id="projects-heading"
									className="text-4xl font-light tracking-tight sm:text-5xl"
								>
									Selected systems
								</h2>
								<p className="mt-5 max-w-2xl text-base font-light leading-7 text-zinc-400">
									A mix of production DeFi, autonomous agents, governance,
									and real-time software.
								</p>
							</div>
						</div>

						<div className="divide-y divide-white/10 border-y border-white/10">
							{projects.map((project) => (
								<article
									key={project.name}
									className="grid gap-8 py-10 sm:grid-cols-[3rem_1fr] lg:grid-cols-[3rem_12rem_1fr]"
								>
									<p className="font-mono text-xs text-zinc-600">
										{project.number}
									</p>
									<div>
										<h3 className="text-xl font-medium text-zinc-50">
											{project.name}
										</h3>
										<p className="mt-2 text-xs font-medium uppercase leading-5 tracking-[0.14em] text-amber-300/80">
											{project.category}
										</p>
									</div>
									<div>
										<p className="max-w-2xl font-light leading-7 text-zinc-300">
											{project.description}
										</p>
										<div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
											<ul
												aria-label={`${project.name} technologies`}
												className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-zinc-500"
											>
												{project.tags.map((tag) => (
													<li key={tag}>{tag}</li>
												))}
											</ul>

											{project.links.length > 0 && (
												<div className="flex flex-wrap gap-2 sm:ml-auto">
													{project.links.map((link) => (
														<a
															key={link.href}
															href={link.href}
															{...externalLinkProps}
															className="inline-flex min-h-11 items-center gap-1.5 rounded-full border border-white/10 px-4 text-xs font-medium text-zinc-300 transition-colors hover:border-amber-300/50 hover:text-amber-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
														>
															{link.label}
															<ArrowUpRight size={13} aria-hidden="true" />
														</a>
													))}
												</div>
											)}
										</div>
									</div>
								</article>
							))}
						</div>
					</section>

					<section
						id="contact"
						aria-labelledby="contact-heading"
						className="scroll-mt-8 border-t border-white/10 py-24"
					>
						<div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
							<div>
								<p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-300">
									03 / Contact
								</p>
								<h2
									id="contact-heading"
									className="mt-6 max-w-3xl text-4xl font-light leading-tight tracking-tight text-zinc-50 sm:text-6xl"
								>
									Have a difficult onchain problem?
								</h2>
								<p className="mt-6 max-w-2xl font-light leading-7 text-zinc-400">
									I&apos;m always interested in thoughtful conversations about
									DeFi infrastructure, agent systems, and ambitious engineering
									work.
								</p>
							</div>
							<a
								href="mailto:sidharthkapoor.100@gmail.com"
								className="group inline-flex min-h-14 w-fit items-center gap-3 rounded-full bg-amber-300 px-7 font-medium text-neutral-950 transition-colors hover:bg-amber-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-400"
							>
								Get in touch
								<ArrowUpRight
									size={18}
									aria-hidden="true"
									className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
								/>
							</a>
						</div>
					</section>
				</main>

				<footer className="flex flex-col gap-6 border-t border-white/10 py-8 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
					<p>© {new Date().getFullYear()} Sidharth Kapoor</p>
					<div className="flex flex-wrap gap-2">
						<a
							href="https://github.com/SidharthK2"
							{...externalLinkProps}
							className="inline-flex min-h-11 items-center gap-2 rounded-md px-3 transition-colors hover:text-zinc-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
						>
							<Github size={17} aria-hidden="true" />
							GitHub
						</a>
						<a
							href="https://x.com/coding_sid"
							{...externalLinkProps}
							className="inline-flex min-h-11 items-center gap-2 rounded-md px-3 transition-colors hover:text-zinc-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
						>
							<svg
								aria-hidden="true"
								width="16"
								height="16"
								viewBox="0 0 24 24"
								fill="currentColor"
							>
								<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
							</svg>
							X
						</a>
						<a
							href="mailto:sidharthkapoor.100@gmail.com"
							className="inline-flex min-h-11 items-center gap-2 rounded-md px-3 transition-colors hover:text-zinc-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
						>
							<Mail size={17} aria-hidden="true" />
							Email
						</a>
					</div>
				</footer>
			</div>
		</div>
	);
};

export default Portfolio;
