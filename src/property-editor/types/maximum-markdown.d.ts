import { LitElement } from 'lit';
export declare class MaximumMarkdownEditor extends LitElement {
    private _scope?;
    _editor?: HTMLDivElement;
    render(): import("lit-html").TemplateResult<1>;
    updated(): void;
    private get scope();
    get value(): string | null;
    set value(value: string | null);
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'maximum-markdown-editor': MaximumMarkdownEditor;
    }
}
