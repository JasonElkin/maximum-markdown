import { BytemdPlugin } from "bytemd"
import { LinkPicker } from "../umbraco/link-picker"
import { getShortcutWithPrefix } from "./util"

export default function umbracoLinkPlugin(): BytemdPlugin {
	return {
		actions: [
			{
				title: 'Umbraco Link',
				icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16">
								<path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
								<path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
							</svg>`,
				handler: {
					type: 'action',
					shortcut: getShortcutWithPrefix('K'),
					async click(ctx) {

						var linkPicker = new LinkPicker(ctx.root)
						const target = await linkPicker.open()

						if (target !== null) {
							if (ctx.editor.getSelection().length > 0) {
								ctx.wrapText('[', `](${target.url})`)
							} else {
								ctx.appendBlock(`[${target.name ?? 'link'}](${target.url ?? 'url'})`)
							}
							ctx.editor.focus()
						}
					},
				},
			},
		],
	}
}
