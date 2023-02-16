using Umbraco.Cms.Core;
using Umbraco.Cms.Core.PropertyEditors;

namespace Umbraco.Community.MaximumMarkdown.Backoffice;

[DataEditor(
	alias: "Maximum Markdown Editor",
	name: "Maximum Markdown",
	view: "~/App_Plugins/MaximumMarkdown/editor.html",
	ValueType = ValueTypes.Text,
	Group = Constants.PropertyEditors.Groups.RichContent,
	Icon = "markdown"
	)]
public class MaximumMarkdownEditor : DataEditor
{
	public MaximumMarkdownEditor(IDataValueEditorFactory dataValueEditorFactory) : base(dataValueEditorFactory)
	{
	}
}
