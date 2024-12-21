import { expect, test } from 'bun:test'
import type { JSONSchemaForNPMPackageJsonFiles } from '@schemastore/package'
import { render } from 'ink-testing-library'
import ProjectInfo from '../src/components/ProjectInfo'

/**
 * The dummy package.json file from the playground directory.
 */ // @ts-expect-error
const pkg: JSONSchemaForNPMPackageJsonFiles = await import(
	'./playground/package.json',
	{
		assert: { type: 'json' },
	}
)

test('just works', () => {
	const { lastFrame } = render(<ProjectInfo pkg={pkg} />)
	expect(lastFrame()).toMatchSnapshot()
})
