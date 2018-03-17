using System.Collections.Generic;
using System.Web.Http;
using OwlRd.API.Models;

namespace OwlRd.Areas.Api
{
	public class QuestionsController : ApiController
	{
		[HttpGet]
        [Route("api/questions/getQuestions")]
		public QuestionViewModel GetQuestions()
		{
			return new QuestionViewModel(1, "What Alice have done at that moment?",
				new List<QuestionAnswer>
				{
					new QuestionAnswer(1, "Nothing", false),
					new QuestionAnswer(2, "Ran back", false),
					new QuestionAnswer(3, "Thrown it away", false),
					new QuestionAnswer(4, "Ate it", true)
				});
		}
	}
}