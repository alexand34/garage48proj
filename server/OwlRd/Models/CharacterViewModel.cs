using System.Drawing;

namespace OwlRd.API.Models
{
	public class CharacterViewModel
	{
		public CharacterViewModel(int id, string name, Point position)
		{
			Id = id;
			Name = name;
			Position = position;
		}

		public int Id { get; set; }
		public string Name { get; set; }
		public Point Position { get; set; }
	}
}