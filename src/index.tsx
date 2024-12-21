import { render } from 'ink'
import ProjectInfo from './components/ProjectInfo'

import type { JSONSchemaForNPMPackageJsonFiles } from '@schemastore/package'

const pkg: JSONSchemaForNPMPackageJsonFiles = await import(
	`${process.cwd()}/package.json`,
	{
		assert: { type: 'json' },
	}
)

render(<ProjectInfo pkg={pkg} />)
