import { UserButton } from "@clerk/nextjs";
import React from "react";

export default function DashboardPage() {
	return (
		<div>
			secured Dashboard page
			<UserButton />
		</div>
	);
}
