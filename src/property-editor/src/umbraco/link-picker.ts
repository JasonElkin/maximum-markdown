import { Picker } from "./picker";

interface ILinkPickerModel {
	target?: IUmbracoLink
}

export interface IUmbracoLink {
	id?: string,
	name?: string,
	udi?: string,
	url?: string,
}

export class LinkPicker extends Picker {
	open(): Promise<IUmbracoLink | null> {
		const promise = new Promise<IUmbracoLink | null>((resolve) => {
			const linkPicker = {
				hideTarget: true,
				submit: (model: ILinkPickerModel) => {
					resolve(model.target ?? null);
					this._editorService.close();
				},
				close: () => {
					this._editorService.close();
				}
			};
			this._editorService.linkPicker(linkPicker);
		});
		return promise;
	}
}
