using System.Collections.Generic;
using System.Drawing;
using System.Web.Http;
using OwlRd.API.Models;

namespace OwlRd.Areas.Api
{
	public class CharacterController : ApiController
	{
		[HttpGet]
		public List<CharacterViewModel> GetCharacters()
		{
			return new List<CharacterViewModel>
			{
				new CharacterViewModel(1, "Alice Owl", new Point(10, 5)),
				new CharacterViewModel(2,
					"MobyDick Owl",
					new Point(15, 10))
			};
		}
	}
}