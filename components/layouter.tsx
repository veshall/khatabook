import { cn } from "@/lib/utils";
import * as React from "react";

interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {
	fadedBelow?: boolean;
	fixedHeight?: boolean;
}

const Layout = React.forwardRef<HTMLDivElement, LayoutProps>(
	({ className, fadedBelow = false, fixedHeight = false, ...props }, ref) => (
		<div
			ref={ref}
			className={cn(
				"relative flex min-h-screen w-full flex-col",
				fadedBelow &&
					"after:pointer-events-none after:absolute after:bottom-0 after:left-0 after:hidden after:h-32 after:w-full after:bg-[linear-gradient(180deg,_transparent_10%,_hsl(var(--background))_70%)] after:md:block",
				fixedHeight && "md:h-svh",
				className
			)}
			{...props}
		/>
	)
);
Layout.displayName = "Layout";

const LayoutHeader = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={cn(
			"flex h-[var(--header-height border-b border-foreground/20 items-center gap-4 bg-background md:px-4",
			className
		)}
		{...props}
	/>
));
LayoutHeader.displayName = "LayoutHeader";

interface LayoutBodyProps extends React.HTMLAttributes<HTMLDivElement> {
	fixedHeight?: boolean;
}

const LayoutBody = React.forwardRef<HTMLDivElement, LayoutBodyProps>(
	({ className, fixedHeight, ...props }, ref) => (
		<div
			ref={ref}
			className={cn(
				"flex-1 overflow-auto p-2 md:p-4",
				fixedHeight && "h-[calc(100%-var(--header-height))]",
				className
			)}
			{...props}
		/>
	)
);
LayoutBody.displayName = "LayoutBody";

const LayoutFooter = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={cn(
			"flex h-[var(--header-height)] border-t border-foreground/20 items-center gap-4 bg-background md:px-4 md:py-6",
			className
		)}
		{...props}
	/>
));
LayoutFooter.displayName = "LayoutFooter";

export { Layout, LayoutBody, LayoutFooter, LayoutHeader };
