using System.ComponentModel.DataAnnotations;

namespace Boho.Dtos.GalleryImageText;
public class CreateGalleryImageTextDto
{
    [Required]
    public string Text { get; set; }
    [Required]
    public int GalleryImageId { get; set; }
}
