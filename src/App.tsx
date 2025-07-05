import { Mail, Github } from "lucide-react";

const Portfolio = () => {
	const proudOf = [
		"Being a Web3 engineer",
		"Built DeFAI systems securing $1M+ TVL at IQ AI",
		"Won Prize pool at ETH Global Paris",
		"Can code smart contracts, backend APIs, and frontend (not at the same time)",
	];

	const projects = [
		{
			name: "DeCommunity",
			description:
				"Decentralized governance platform with World ID identity verification",
			year: "2023",
			award: "ETH Global Paris Prize winner",
		},
		{
			name: "Vibechex",
			description: "Real-time multiplayer chess with super low latency",
			year: "2025",
			note: "WebSockets + WebRTC + Redis",
		},
	];

	return (
		<div className="min-h-screen bg-neutral-900 text-zinc-100 font-sans scroll-smooth">
			<div className="max-w-2xl mx-auto p-8">
				{/* Navigation - Top Right */}
				<nav className="flex justify-end gap-8 mb-20 text-sm font-medium">
					<a
						href="#about"
						className="text-zinc-400 hover:text-zinc-100 transition-all duration-300 tracking-wide"
					>
						about
					</a>
					<a
						href="#work"
						className="text-zinc-400 hover:text-zinc-100 transition-all duration-300 tracking-wide"
					>
						work
					</a>
					<a
						href="#contact"
						className="text-zinc-400 hover:text-zinc-100 transition-all duration-300 tracking-wide"
					>
						contact
					</a>
				</nav>

				{/* Header */}
				<header
					className="mb-24"
					style={{
						fontFamily:
							'"SF Pro Display", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
					}}
				>
					<h1 className="text-6xl font-light text-zinc-50 mb-8 tracking-tight leading-none">
						Sidharth
					</h1>
					<p className="text-xl text-zinc-300 leading-relaxed mb-12 font-light">
						Building at the intersection of web3 and AI
					</p>
				</header>

				{/* Things I'm Proud Of */}
				<section id="about" className="mb-28">
					<h2 className="text-3xl font-light text-zinc-50 mb-12 tracking-tight">
						Things i'm proud of
					</h2>
					<ul className="space-y-4 text-zinc-300">
						{proudOf.map((item, index) => (
							<li key={index} className="flex items-start group">
								<span className="text-zinc-600 mr-4 mt-1">•</span>
								<span className="font-light leading-relaxed group-hover:text-zinc-200 transition-colors duration-300">
									{index === 1 ? (
										<a
											href="https://iqai.com/"
											className="flex items-center gap-3 hover:text-zinc-100 transition-all duration-300 hover:underline font-light tracking-wide"
										>
											{item}
										</a>
									) : (
										item
									)}
								</span>
							</li>
						))}
					</ul>
				</section>

				{/* Work Section */}
				<section id="work" className="mb-28">
					<h2 className="text-3xl font-light text-zinc-50 mb-12 tracking-tight">
						Work
					</h2>

					<div className="space-y-8">
						<div className="border-l border-neutral-700 pl-8 hover:border-neutral-600 transition-colors duration-500">
							<div className="flex justify-between items-start mb-4">
								<div>
									<h3 className="font-medium text-zinc-50 text-xl tracking-tight">
										IQ AI
									</h3>
									<p className="text-zinc-400 font-light mt-1">Web3 Engineer</p>
								</div>
								<span className="text-zinc-500 font-light tracking-wide">
									2023 — Present
								</span>
							</div>
							<p className="text-zinc-400 leading-relaxed font-light">
								Built blockchain indexer backend securing $1M+ TVL. Built
								autonomous on-chain AI agents integrating with major DeFi
								protocols like Morpho and Fraxswap.
							</p>
						</div>
					</div>
				</section>

				{/* Projects Section */}
				<section className="mb-28">
					<h2 className="text-3xl font-light text-zinc-50 mb-12 tracking-tight">
						Projects
					</h2>

					<div className="space-y-12">
						{projects.map((project, index) => (
							<div key={index} className="group cursor-pointer">
								<div className="flex justify-between items-start mb-4">
									<h3 className="font-medium text-zinc-50 group-hover:text-blue-400 transition-all duration-300 text-xl tracking-tight">
										{project.name}
										{project.award && (
											<span className="ml-4 text-xs bg-amber-900/40 text-amber-200 px-3 py-1.5 rounded-full font-light tracking-wide">
												{project.award}
											</span>
										)}
									</h3>
									<span className="text-zinc-500 font-light tracking-wide">
										{project.year}
									</span>
								</div>
								<p className="text-zinc-400 leading-relaxed font-light">
									{project.description}
									{project.note && (
										<span className="text-zinc-500"> • {project.note}</span>
									)}
								</p>
							</div>
						))}
					</div>
				</section>

				{/* Contact Links */}
				<section id="contact" className="mb-12">
					<div className="flex gap-8">
						<a
							href="https://github.com/SidharthK2"
							className="flex items-center gap-3 text-zinc-400 hover:text-zinc-100 transition-all duration-300 font-light tracking-wide"
						>
							<Github size={18} />
							GitHub
						</a>
						<a
							href="https://x.com/coding_sid"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-3 text-zinc-400 hover:text-zinc-100 transition-all duration-300 font-light tracking-wide"
						>
							{/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
							<svg
								width="18"
								height="18"
								viewBox="0 0 24 24"
								fill="currentColor"
							>
								<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
							</svg>
						</a>
						<a
							href="mailto:sidharthkapoor.100@gmail.com"
							className="flex items-center gap-3 text-zinc-400 hover:text-zinc-100 transition-all duration-300 font-light tracking-wide"
						>
							<Mail size={18} />
							Email
						</a>
					</div>
				</section>
			</div>
		</div>
	);
};

export default Portfolio;
