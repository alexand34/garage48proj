using System.Collections.Generic;

namespace OwlRd.API.Models
{
	public class QuestionViewModel
	{
		public QuestionViewModel(int id, string text, List<QuestionAnswer> answers)
		{
			Id = id;
			Text = text;
			Answers = answers;
		}

		public int Id { get; set; }
		public string Text { get; set; }
		public List<QuestionAnswer> Answers { get; set; }
	}

	public class QuestionAnswer
	{
		public QuestionAnswer(int id, string text, bool isCorrect)
		{
			Id = id;
			Text = text;
			IsCorrect = isCorrect;
		}

		public int Id { get; set; }
		public string Text { get; set; }
		public bool IsCorrect { get; set; }
	}
}