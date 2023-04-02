using System.ComponentModel.DataAnnotations;

namespace Boho.Dtos.GalleryImageText;
public class UpdateGalleryImageTextDto
{
    [Required]
    public int Id { get; set; }
    [Required]
    public string Text { get; set; }
    [Required]
    public int GalleryImageId { get; set; }
}
