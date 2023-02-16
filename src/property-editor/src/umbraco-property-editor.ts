import { IScope } from "angular";
import { LitElement } from "lit";

export class UmbracoPropertyEditor extends LitElement {
	private _scope?: IScope;

	protected get scope(): IScope {
		this._scope = this._scope ?? <IScope>window.angular.element(this).scope().$parent;
		return this._scope;
	}

	get value(): string | null {
		return this.scope.model.value
	}

	set value(value: string | null) {
		this.scope.model.value = value;
		this.scope.umbProperty.setDirty();
	}
}
