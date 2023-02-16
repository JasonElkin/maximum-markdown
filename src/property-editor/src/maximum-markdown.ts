import './styles/global.css'
// tippy doesn't use the shadow DOM
import 'tippy.js/dist/tippy.css'

import styles from 'bytemd/dist/index.css?inline'
import highlight from 'highlight.js/styles/default.css?inline'

import { html, unsafeCSS, css } from 'lit'
import { customElement, query } from 'lit/decorators.js'

import { Editor } from 'bytemd'
import { plugins } from './plugins/plugins';
import { UmbracoPropertyEditor } from './umbraco-property-editor';

const contentWrapper = document.getElementById('contentwrapper');

const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

@customElement('maximum-markdown-editor')
export class MaximumMarkdownEditor extends UmbracoPropertyEditor {
	constructor() {
		super();
		this.addEventListener('keydown', (e) => {
			if (e.ctrlKey === e.metaKey === e.altKey === false && e.key in digits) {
				e.stopPropagation();
			}
		})
	}

	@query('#editor')
	private _editor!: HTMLDivElement;

	private observer = new MutationObserver((m) => {
		if ((<HTMLDivElement>m[0].target).classList.contains('bytemd-fullscreen')) {
			contentWrapper?.classList.add('bytemd-fullscreen')
		} else {
			contentWrapper?.classList.remove('bytemd-fullscreen')
		}
	});

	render() {
		return html`
			<div id="editor"></div>
    `
	}

	updated() {
		// @ts-ignore
		const editor = new Editor({
			target: this._editor,
			props: {
				value: this.value,
				plugins,
			},
		});
		// @ts-ignore
		editor.$on('change', (e) => {
			// @ts-ignore
			editor.$set({ value: e.detail.value })
			this.value = e.detail.value;
		})

		this.observer.observe(this._editor.firstChild!, { attributeFilter: ['class'] });
	}

	disconnectedCallback() {
		// Not sure if this is necessary
		this.observer.disconnect()
	}

	static styles = [
		unsafeCSS(styles),
		unsafeCSS(highlight),
		css`
		div.bytemd-fullscreen.bytemd {
			z-index: 100;
		}
		.bytemd-toolbar-right [bytemd-tippy-path='5'] {
			display: none;
		}
		`
	];
}

declare global {
	interface HTMLElementTagNameMap {
		'maximum-markdown-editor': MaximumMarkdownEditor
	}
}
