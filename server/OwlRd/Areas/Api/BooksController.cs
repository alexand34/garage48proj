using System.Collections.Generic;
using System.Web.Http;
using OwlRd.API.Models;

namespace OwlRd.Areas.Api
{
	public class BooksController : ApiController
	{
		[HttpGet, Route("api/books")]
		public List<BookThumbnailViewModel> GetBooks()
		{
			return new List<BookThumbnailViewModel>
			{
				new BookThumbnailViewModel(1, "https://images-na.ssl-images-amazon.com/images/I/91NJTuwDDhL._SL1500_.jpg",
					"Alice in Wonderland")
			};
		}
	}
}