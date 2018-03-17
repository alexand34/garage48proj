namespace OwlRd.API.Models
{
	public class ShopItemViewModel
	{
		public ShopItemViewModel(int id, string name, string image, ShopItemType type)
		{
			Id = id;
			Name = name;
			Image = image;
			Type = type;
		}

		public int Id { get; set; }
		public string Name { get; set; }
		public string Image { get; set; }
		public ShopItemType Type { get; set; }
	}

	public enum ShopItemType
	{
		EquipHead = 0
	}
}