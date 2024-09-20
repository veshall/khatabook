export default async function MarketingLayout(props: {
	children: React.ReactNode;
}) {
	return (
		<div className="bg-gradient-to-br from-sky-200 to-yellow-50">
			{props.children}
		</div>
	);
}
