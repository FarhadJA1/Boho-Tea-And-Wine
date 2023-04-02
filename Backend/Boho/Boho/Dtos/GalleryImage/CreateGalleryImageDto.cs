using System.ComponentModel.DataAnnotations;

namespace Boho.Dtos.GalleryImage;
public class CreateGalleryImageDto
{
    [Required]
    public byte[] Image { get; set; }
}
