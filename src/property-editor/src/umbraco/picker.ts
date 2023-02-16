
export class Picker {
	private _injector: ng.auto.IInjectorService;
	protected _editorService: any;

	constructor(element: HTMLElement) {
		this._injector = window.angular.element(element).injector();
		this._editorService = <any>this._injector.get("editorService");
	}
}
