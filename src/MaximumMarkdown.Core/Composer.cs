using Microsoft.Extensions.DependencyInjection;
using Umbraco.Cms.Core.Composing;
using Umbraco.Cms.Core.DependencyInjection;

namespace Umbraco.Community.MaximumMarkdown.Core;

public class Composer : IComposer
{
	public void Compose(IUmbracoBuilder builder)
	{
		builder.Services.AddOptions<Configuration>()
			.Bind(builder.Config.GetSection(Configuration.SectionName));
	}
}
