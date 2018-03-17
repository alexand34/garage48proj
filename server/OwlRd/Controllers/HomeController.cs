using System;
using System.Web.Http;

namespace OwlRd.Controllers
{
    [RoutePrefix("api")]
    public class HomeController : ApiController
    {
        [HttpGet]
        public ApplicationSettings Get()
        {
            return new ApplicationSettings(DateTime.UtcNow);
        }
    }

    public class ApplicationSettings
    {
        public ApplicationSettings(DateTime current)
        {
            CurrentUtc = current;
        }

        public DateTime CurrentUtc { get; set; }
    }

}