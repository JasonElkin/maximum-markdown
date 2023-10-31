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

declare module 'bytemd' {
  export class Editor extends bytemd.Editor {
    constructor(options: {
      target: HTMLElement;
      props: {
        value: string;
        plugins: BytemdPlugin[];
        sanitize: (schema: Schema) => Schema;
      };
    });
    $on(
      event: 'change',
      handler: (e: { detail: { value: string } }) => void
    ): void;
    $set(props: { value: string }): void;
  }
}
