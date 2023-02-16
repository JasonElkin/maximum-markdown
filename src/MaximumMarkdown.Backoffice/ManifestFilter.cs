using Microsoft.Extensions.Options;
using Umbraco.Cms.Core.Manifest;
using Umbraco.Community.MaximumMarkdown.Core;

namespace Umbraco.Community.MaximumMarkdown.Backoffice;

internal class ManifestFilter : IManifestFilter
{
	private readonly bool _viteDevMode;

	public ManifestFilter(IOptions<Configuration> options)
	{
		_viteDevMode = options.Value.ViteDevMode;
	}

	public void Filter(List<PackageManifest> manifests)
	{
		manifests.Add(new PackageManifest
		{
			PackageName = "Maximum Markdown",
			Scripts = new[]
			{
		   $"/App_Plugins/MaximumMarkdown/{(_viteDevMode ? "dev-bootstrapper" : "assets/main")}.js"
		}
		});
	}
}
