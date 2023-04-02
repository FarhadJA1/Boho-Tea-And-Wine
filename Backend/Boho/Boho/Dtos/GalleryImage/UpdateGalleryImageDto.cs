using System.ComponentModel.DataAnnotations;

namespace Boho.Dtos.GalleryImage;
public class UpdateGalleryImageDto
{
    [Required]
    public int Id { get; set; }
    [Required]
    public byte[] Image { get; set; }
}
