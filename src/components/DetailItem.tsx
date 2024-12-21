import { Text } from 'ink'

const DetailItem = ({
	label,
	children,
}: { label: string; children: React.ReactNode }) => (
	<Text>
		<Text bold color="green">
			{label}
		</Text>
		: {children}
	</Text>
)

export default DetailItem
