using Umbraco.Cms.Core.Composing;
using Umbraco.Cms.Core.DependencyInjection;

namespace Umbraco.Community.MaximumMarkdown.Backoffice;

internal class Composer : IComposer
{
	public void Compose(IUmbracoBuilder builder)
	{
		builder.ManifestFilters().Append<ManifestFilter>();
	}
}
