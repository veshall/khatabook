import { ClerkProvider } from "@clerk/nextjs";

export default async function DashboardLayout(props: {
	children: React.ReactNode;
}) {
	return (
		<ClerkProvider
			publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
		>
			{props.children}
		</ClerkProvider>
	);
}
