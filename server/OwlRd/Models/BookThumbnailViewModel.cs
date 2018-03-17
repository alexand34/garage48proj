namespace OwlRd.API.Models
{
    public class BookThumbnailViewModel
    {
        public BookThumbnailViewModel(int id, string thumbnailUrl, string title)
        {
            Id = id;
            ThumbnailUrl = thumbnailUrl;
            Title = title;
        }

        public int Id { get; set; }
        public string ThumbnailUrl { get; set; }
        public string Title { get; set; }

    }
}