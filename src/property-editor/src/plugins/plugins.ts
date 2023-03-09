
import gfm from '@bytemd/plugin-gfm'
import breaks from '@bytemd/plugin-breaks'
import frontmatter from '@bytemd/plugin-frontmatter'
import highlight from '@bytemd/plugin-highlight'
import umbracoLinkPlugin from './umbraco-link-plugin'

const corePlugins = [
	gfm(),
	breaks(),
	frontmatter(),
	highlight(),
	umbracoLinkPlugin(),
]

export const plugins = corePlugins;
