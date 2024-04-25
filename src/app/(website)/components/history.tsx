import { cn } from "@/lib/utils";
import StringLine from "./string-line";

export default function History() {
	const history = [
		{
			title: "Senior Software Engineer",
			company: "Defined Solution",
			date: "Now",
		},
		{
			title: "Senior Full-stack Engineer",
			company: "Reserveit Bangladesh",
			date: "Oct 2022",
		},
		{
			title: "Full-stack Engineer",
			company: "Reserveit Bangladesh",
			date: "Oct 2021",
		},
		{
			title: "Junior Full-stack Engineer",
			company: "PlanetX Inc",
			date: "Mar 2021",
		},
	];
	return (
		<section
			id="history"
			className="flex flex-col justify-center min-h-svh"
		>
			<StringLine />
			{history.map((job, index) => (
				<div
					key={index}
					className={cn(
						"pt-5"
						// "hover:bg-gradient-logo hover:text-background "
					)}
				>
					<div className="grid grid-cols-7 md:gap-8 text-5xl max-w-4xl mx-auto px-10 mb-5">
						<p className="col-span-7 md:col-span-3 text-3xl md:text-4xl">
							{job.date}
						</p>
						<p className="col-span-7 md:col-span-4 md:leading-8">
							{job.title} <br />
							<span className="text-gradient text-2xl font-semibold tracking-widest">
								{job.company}
							</span>
						</p>
					</div>
					<StringLine />
				</div>
			))}
		</section>
	);
}
