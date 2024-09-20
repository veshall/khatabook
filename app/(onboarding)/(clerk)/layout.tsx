import { Layout, LayoutBody } from "@/components/layouter";
import React from "react";

export default function ClerkLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<Layout>
			<LayoutBody className="flex justify-center items-center">
				{children}
			</LayoutBody>
		</Layout>
	);
}
