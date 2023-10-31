import { IScope } from 'angular';
import { LitElement } from 'lit';

export class UmbracoPropertyEditor<Type> extends LitElement {
  private _scope?: IScope;

  protected get scope(): IScope {
    this._scope =
      this._scope ?? <IScope>window.angular.element(this).scope().$parent;
    return this._scope;
  }

  get value(): Type | null {
    if (!this.scope.model.value) {
      return null;
    }

    return this.scope.model.value as Type;
  }

  set value(value: Type | null) {
    if (value === null) {
      this.scope.model.value = null;
    } else {
      this.scope.model.value = JSON.stringify(value);
    }
    this.scope.umbProperty.setDirty();
  }
}
