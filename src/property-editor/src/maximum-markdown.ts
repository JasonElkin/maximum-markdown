// tippy doesn't use the shadow DOM
import 'tippy.js/dist/tippy.css'

import styles from 'bytemd/dist/index.css?inline'
import highlight from 'highlight.js/styles/default.css?inline'

import { html, unsafeCSS, css } from 'lit'
import { customElement, query } from 'lit/decorators.js'

import { Editor } from 'bytemd'
import { plugins } from './plugins/plugins';

import { UmbracoPropertyEditor } from './umbraco/umbraco-property-editor';
import { disableDigitShortcuts } from './umbraco/single-key-shortcut-disabler'

import { Schema } from 'hast-util-sanitize'
import IMarkdownPropertyValue from './markdown-property-value'

const contentWrapper = document.getElementById('contentwrapper');

@customElement('maximum-markdown-editor')
export class MaximumMarkdownEditor extends UmbracoPropertyEditor<IMarkdownPropertyValue> {
	constructor() {
		super();
		disableDigitShortcuts(this);
	}

	@query('#editor')
	private _editor!: HTMLDivElement;

	private fullScreenObserver = new MutationObserver((m) => {
		if ((<HTMLDivElement>m[0].target).classList.contains('bytemd-fullscreen')) {
			contentWrapper?.style.setProperty('z-index', '1100')
		} else {
			contentWrapper?.style.removeProperty('z-index')
		}
	});

	render() {
		return html`
			<div id="editor"></div>
    `
	}

	updated() {
		const editor = new Editor({
			target: this._editor,
			props: {
				value: this.value?.markdown ?? '',
				plugins,
				sanitize: (schema: Schema) => {
					schema.attributes?.a.push('dataUmbUdi')
					return schema;
				}
			},
		});
		editor.$on('change', (e) => {
			editor.$set({ value: e.detail.value })
			this.value = { markdown: e.detail.value }
		})

		this.fullScreenObserver.observe(this._editor.firstChild!, { attributeFilter: ['class'] });
	}

	disconnectedCallback() {
		this.fullScreenObserver.disconnect()
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
