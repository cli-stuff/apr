import type { JSONSchemaForNPMPackageJsonFiles } from '@schemastore/package'
import { Box, Newline, Text } from 'ink'
import Divider from 'ink-divider'
import Link from 'ink-link'
import DetailItem from './DetailItem'

const ProjectInfo = ({ pkg }: { pkg: JSONSchemaForNPMPackageJsonFiles }) => (
	<Box
		borderStyle="round"
		minWidth={50}
		paddingLeft={1}
		paddingRight={1}
		flexDirection="column"
		alignSelf="flex-start"
	>
		<Box
			alignItems="center"
			alignSelf="center"
			flexDirection="column"
			justifyContent="center"
		>
			<Text>
				<Text bold>{pkg.name}</Text>
				<Newline />
			</Text>
			<Text>{pkg.description}</Text>
		</Box>

		<Divider />

		{pkg.version && <DetailItem label="🔖 Version">{pkg.version}</DetailItem>}
		{pkg.author?.name && (
			<DetailItem label="👤 Author">
				{pkg.author.name}
				{pkg.author.url && ` (${pkg.author.url})`}
			</DetailItem>
		)}
		{pkg.license && <DetailItem label="📄 License">{pkg.license}</DetailItem>}
		{pkg.homepage && (
			<DetailItem label="🏠 Homepage">{pkg.homepage}</DetailItem>
		)}
		{pkg.bugs && (
			// @ts-expect-error
			<DetailItem label="🐛 Bugs">{pkg.bugs?.url}</DetailItem>
		)}
	</Box>
)

export default ProjectInfo
