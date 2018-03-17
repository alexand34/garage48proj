using System.Collections.Generic;
using System.Web.Http;
using OwlRd.API.Models;

namespace OwlRd.Areas.Api
{
	public class ShopController : ApiController
	{
		[HttpGet]
        [Route("api/shop/getshopitems")]
		public List<ShopItemViewModel> GetShopItems()
		{
			return new List<ShopItemViewModel>
			{
				new ShopItemViewModel(1, "Glasses", "http://www.stickpng.com/assets/images/584999937b7d4d76317f5ffd.png", ShopItemType.EquipHead),
				new ShopItemViewModel(2,
					"Cowboy hat",
					"http://hddfhm.com/images/clipart-cowboy-hat-18.png",
					ShopItemType.EquipHead)
			};
		}
	}
}