import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const PageHeading = React.forwardRef<
	HTMLHeadingElement,
	React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
	<h1
		ref={ref}
		className={cn(
			"font-cal text-2xl leading-7 text-gray-900 sm:truncate sm:text-3xl",
			className
		)}
		{...props}
	/>
));
PageHeading.displayName = "PageHeading";

const SectionHeader = React.forwardRef<
	HTMLHeadingElement,
	React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
	<h4
		ref={ref}
		className={cn("font-cal text-base leading-7", className)}
		{...props}
	/>
));
SectionHeader.displayName = "SectionHeader";

const SectionDescription = React.forwardRef<
	HTMLParagraphElement,
	React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
	<p
		ref={ref}
		className={cn("mt-1 text-sm leading-6 text-gray-700", className)}
		{...props}
	/>
));
SectionDescription.displayName = "SectionDescription";

const MessageText = React.forwardRef<
	HTMLParagraphElement,
	React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
	<p ref={ref} className={cn("text-sm text-gray-700", className)} {...props} />
));
MessageText.displayName = "MessageText";

const TypographyH3 = React.forwardRef<
	HTMLHeadingElement,
	React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
	<h3
		ref={ref}
		className={cn("scroll-m-20 font-cal text-2xl", className)}
		{...props}
	/>
));
TypographyH3.displayName = "TypographyH3";

const TypographyP = React.forwardRef<
	HTMLParagraphElement,
	React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
	<p ref={ref} className={cn("text-sm leading-4", className)} {...props} />
));
TypographyP.displayName = "TypographyP";

const SpanButton = React.forwardRef<
	HTMLParagraphElement,
	React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
	<span
		ref={ref}
		className={cn(
			"relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
			className
		)}
		{...props}
	/>
));
SpanButton.displayName = "SpanButton";

type LinkProps = React.ComponentProps<typeof Link>;
const TextLink = React.forwardRef<HTMLAnchorElement, LinkProps>(
	({ className, ...props }, ref) => {
		return (
			<Link
				ref={ref}
				className={cn("font-semibold text-blue-600 hover:underline", className)}
				{...props}
			/>
		);
	}
);

TextLink.displayName = "TextLink";

export {
	MessageText,
	PageHeading,
	SectionDescription,
	SectionHeader,
	SpanButton,
	TextLink,
	TypographyH3,
	TypographyP,
};
