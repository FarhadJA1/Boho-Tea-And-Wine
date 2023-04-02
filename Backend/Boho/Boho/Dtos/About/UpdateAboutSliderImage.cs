using System.ComponentModel.DataAnnotations;

namespace Boho.Dtos.About;
public class UpdateAboutSliderImage
{
    [Required]
    public int Id { get; set; }
    [Required]
    public byte[] Image { get; set; }
}
