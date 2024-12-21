import { Text } from 'ink'

/**
 * Display a detail item.
 *
 * @param label The label.
 * @param children The children.
 *
 * @example
 * ```tsx
 * <DetailItem label="🔖 Version">1.0.0</DetailItem>
 * // 🔖 Version: 1.0.0
 * ```
 *
 * @returns The detail item.
 */
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
