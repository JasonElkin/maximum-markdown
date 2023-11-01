import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement('simple-property-editor')
export class SimplePropertyEditor extends LitElement {
  
  protected _angularElement?: any;
  protected _scope: any;
  protected _editorService: any;

  constructor() {
    super();
    
    // pull out the "angular" bits and bobs we'll need
    this._angularElement = window.angular.element(this);
    this._scope = this._angularElement.scope();
    this._editorService = this._angularElement.injector().get("editorService");
  }

  protected get value(): string{
    return this._scope.model.value;
  }

  protected set value(value: string){
    this._scope.model.value = value;
    // when the value changes, request an update to the DOM (there are other/better ways of doing this)
    this.requestUpdate();
  }

  pickSomething() {
    const linkPicker = {
      hideTarget: true,
      submit: (value: { target: { udi: string; }; }) => {
        this.value = value.target.udi;
        this._scope.umbProperty.setDirty();
        this._editorService.close();
      },
      close: () => {
        this._editorService.close();
      }
    };
    this._editorService.linkPicker(linkPicker);
  }

  render() {
		return html`
			<uui-button label="UUI Button" look="primary" @click="${this.pickSomething}">UUI Button</uui-button>
      <p>${ this.value }</p>
    `
	}

}

declare global {
	interface HTMLElementTagNameMap {
		'simple-property-editor': SimplePropertyEditor
	}
}
