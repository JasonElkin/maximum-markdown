using Umbraco.Cms.Core;
using Umbraco.Cms.Core.PropertyEditors;

namespace Umbraco.Community.MaximumMarkdown.Backoffice;

[DataEditor(
	alias: "Simple Property Editor",
	name: "Simple Property Editor",
	view: "~/App_Plugins/MaximumMarkdown/simple-editor.html",
	ValueType = ValueTypes.Text,
	Group = Constants.PropertyEditors.Groups.Pickers,
	Icon = "icon-link"
    )]
public class SimplePropertyEditor : DataEditor
{
	public SimplePropertyEditor(IDataValueEditorFactory dataValueEditorFactory) : base(dataValueEditorFactory)
	{
	}
}
