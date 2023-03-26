using Boho.Dtos.GalleryImage;

namespace Boho.Dtos.GalleryImageText;
public class GalleryImageTextDto
{
    public int Id { get; set; }
    public string Text { get; set; }
    public int GalleryImageId { get; set; }


    public GalleryImageDto GalleryImage { get; set; }
}
