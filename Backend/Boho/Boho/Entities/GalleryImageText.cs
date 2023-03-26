namespace Boho.Entities;
public class GalleryImageText
{
    public int Id { get; set; }
    public string Text { get; set; }
    public int GalleryImageId { get; set; }


    public GalleryImage GalleryImage { get; set; }
}
