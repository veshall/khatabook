/* eslint-disable react/no-unescaped-entities */
import { Layout } from "@/components/layouter";
import { PageHeading, TypographyH3 } from "@/components/typography";
import { Button, buttonVariants } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	ChevronRight,
	CreditCard,
	PieChart,
	Smartphone,
	Star,
} from "lucide-react";

export default function MarketingPage() {
	return (
		<Layout>
			<header className="px-4 lg:px-6 h-14 flex items-center">
				<Link className="flex items-center justify-center" href="#">
					<PageHeading className="font-bold text-12xl">Khata-book</PageHeading>
				</Link>
				<nav className="ml-auto flex gap-4 sm:gap-6">
					<Link
						className="text-sm font-medium hover:underline underline-offset-4"
						href="#"
					>
						Features
					</Link>
					<Link
						className="text-sm font-medium hover:underline underline-offset-4"
						href="#"
					>
						Pricing
					</Link>
					<Link
						className="text-sm font-medium hover:underline underline-offset-4"
						href="#"
					>
						About
					</Link>
					<Link
						className="text-sm font-medium hover:underline underline-offset-4"
						href="#"
					>
						Contact
					</Link>
				</nav>
			</header>
			<main className="flex-1">
				<section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
					<div className="container px-4 md:px-6">
						<div className="flex flex-col items-center space-y-4 text-center">
							<div className="space-y-2">
								<h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
									Track Your Money, Master Your Finances
								</h1>
								<p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
									MoneyTrack helps you record and analyze your income and
									expenses with ease. Take control of your financial future
									today.
								</p>
							</div>
							<div className="space-x-4">
								<Link
									className={buttonVariants({ variant: "default" })}
									href="/sign-in"
								>
									Get Started
								</Link>

								<Button variant="outline">Learn More</Button>
							</div>
						</div>
					</div>
				</section>
				<section className="w-full py-12 md:py-24 lg:py-32  dark:bg-gray-800">
					<div className="container px-4 md:px-6">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
							Key Features
						</h2>
						<div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
							<Card>
								<CardHeader>
									<CreditCard className="w-8 h-8 mb-2" />
									<CardTitle>Easy Transaction Entry</CardTitle>
								</CardHeader>
								<CardContent>
									Quickly record your income and expenses with our intuitive
									interface.
								</CardContent>
							</Card>
							<Card>
								<CardHeader>
									<PieChart className="w-8 h-8 mb-2" />
									<CardTitle>Insightful Analytics</CardTitle>
								</CardHeader>
								<CardContent>
									Visualize your spending habits with beautiful charts and
									graphs.
								</CardContent>
							</Card>
							<Card>
								<CardHeader>
									<Smartphone className="w-8 h-8 mb-2" />
									<CardTitle>Mobile Friendly</CardTitle>
								</CardHeader>
								<CardContent>
									Access your financial data anytime, anywhere with our mobile
									app.
								</CardContent>
							</Card>
						</div>
					</div>
				</section>
				<section className="w-full py-12 md:py-24 lg:py-32">
					<div className="container px-4 md:px-6">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
							What Our Users Say
						</h2>
						<div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
							<Card>
								<CardHeader>
									<CardTitle>John Doe</CardTitle>
									<div className="flex">
										{[...Array(5)].map((_, i) => (
											<Star key={i} className="w-4 h-4 fill-primary" />
										))}
									</div>
								</CardHeader>
								<CardContent>
									"MoneyTrack has completely changed how I manage my finances.
									It's so easy to use!"
								</CardContent>
							</Card>
							<Card>
								<CardHeader>
									<CardTitle>Jane Smith</CardTitle>
									<div className="flex">
										{[...Array(5)].map((_, i) => (
											<Star key={i} className="w-4 h-4 fill-primary" />
										))}
									</div>
								</CardHeader>
								<CardContent>
									"I love the insights I get from the analytics. It's helped me
									save so much money!"
								</CardContent>
							</Card>
							<Card>
								<CardHeader>
									<CardTitle>Bob Johnson</CardTitle>
									<div className="flex">
										{[...Array(5)].map((_, i) => (
											<Star key={i} className="w-4 h-4 fill-primary" />
										))}
									</div>
								</CardHeader>
								<CardContent>
									"The mobile app is fantastic. I can track my expenses on the
									go!"
								</CardContent>
							</Card>
						</div>
					</div>
				</section>
				{/* <section className="w-full py-12 md:py-24 lg:py-32 dark:bg-gray-800">
					<div className="container px-4 md:px-6">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
							Pricing Plans
						</h2>
						<div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
							<Card>
								<CardHeader>
									<CardTitle>Basic</CardTitle>
									<CardDescription>For personal use</CardDescription>
								</CardHeader>
								<CardContent>
									<p className="text-4xl font-bold">$0</p>
									<p className="text-sm text-gray-500">per month</p>
									<ul className="mt-4 space-y-2">
										<li className="flex items-center">
											<ChevronRight className="w-4 h-4 mr-2" />
											Up to 100 transactions
										</li>
										<li className="flex items-center">
											<ChevronRight className="w-4 h-4 mr-2" />
											Basic analytics
										</li>
										<li className="flex items-center">
											<ChevronRight className="w-4 h-4 mr-2" />
											Mobile app access
										</li>
									</ul>
								</CardContent>
								<CardFooter>
									<Button className="w-full">Get Started</Button>
								</CardFooter>
							</Card>
							<Card>
								<CardHeader>
									<CardTitle>Pro</CardTitle>
									<CardDescription>For power users</CardDescription>
								</CardHeader>
								<CardContent>
									<p className="text-4xl font-bold">$9.99</p>
									<p className="text-sm text-gray-500">per month</p>
									<ul className="mt-4 space-y-2">
										<li className="flex items-center">
											<ChevronRight className="w-4 h-4 mr-2" />
											Unlimited transactions
										</li>
										<li className="flex items-center">
											<ChevronRight className="w-4 h-4 mr-2" />
											Advanced analytics
										</li>
										<li className="flex items-center">
											<ChevronRight className="w-4 h-4 mr-2" />
											Priority support
										</li>
									</ul>
								</CardContent>
								<CardFooter>
									<Button className="w-full">Upgrade to Pro</Button>
								</CardFooter>
							</Card>
							<Card>
								<CardHeader>
									<CardTitle>Business</CardTitle>
									<CardDescription>For teams and companies</CardDescription>
								</CardHeader>
								<CardContent>
									<p className="text-4xl font-bold">$49.99</p>
									<p className="text-sm text-gray-500">per month</p>
									<ul className="mt-4 space-y-2">
										<li className="flex items-center">
											<ChevronRight className="w-4 h-4 mr-2" />
											Unlimited transactions
										</li>
										<li className="flex items-center">
											<ChevronRight className="w-4 h-4 mr-2" />
											Custom analytics
										</li>
										<li className="flex items-center">
											<ChevronRight className="w-4 h-4 mr-2" />
											Team collaboration
										</li>
									</ul>
								</CardContent>
								<CardFooter>
									<Button className="w-full">Contact Sales</Button>
								</CardFooter>
							</Card>
						</div>
					</div>
				</section> */}
			</main>
			<footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
				<p className="text-xs text-gray-500 dark:text-gray-400">
					© 2023 MoneyTrack. All rights reserved.
				</p>
				<nav className="sm:ml-auto flex gap-4 sm:gap-6">
					<Link className="text-xs hover:underline underline-offset-4" href="#">
						Terms of Service
					</Link>
					<Link className="text-xs hover:underline underline-offset-4" href="#">
						Privacy
					</Link>
				</nav>
			</footer>
		</Layout>
	);
}

function Link({ href, children, ...props }) {
	return (
		<a href={href} {...props}>
			{children}
		</a>
	);
}
