using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(ernie_reyes.Startup))]
namespace ernie_reyes
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
