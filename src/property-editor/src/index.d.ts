import { BytemdPlugin } from "bytemd";

declare global {
	interface Window { maximumMarkdown?: MaximumMarkdownConfig; }

	interface MaximumMarkdownConfig {
		plugins?: BytemdPlugin
	}
}

declare module 'angular' {
	export interface IScope extends angular.IScope {
		model: IPropertyEditorModel;
		umbProperty: IUmbProperty;
	}

	export interface IPropertyEditorModel {
		value: string | null;
	}

	export interface IUmbProperty {
		setDirty(): void;
	}
}
