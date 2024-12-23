#!/usr/bin/env node

import { render } from 'ink'
import ProjectInfo from './components/ProjectInfo'

import type { JSONSchemaForNPMPackageJsonFiles } from '@schemastore/package'
import type { ErrorLike } from 'bun'

const currentDirectory = process.cwd()

/**
 * The package.json file from the current working directory.
 */
let pkg: JSONSchemaForNPMPackageJsonFiles
try {
	pkg = await import(`${currentDirectory}/package.json`, {
		assert: { type: 'json' },
	})
} catch (error: unknown) {
	if ((error as ErrorLike).code === 'ERR_MODULE_NOT_FOUND') {
		console.error(
			`Error: Could not find \`package.json\` in \`${currentDirectory}\`.`,
		)
		process.exit(1)
	} else {
		throw error
	}
}

render(<ProjectInfo pkg={pkg} />)
