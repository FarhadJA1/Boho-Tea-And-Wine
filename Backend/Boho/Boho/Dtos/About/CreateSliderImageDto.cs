using System.ComponentModel.DataAnnotations;

namespace Boho.Dtos.About;
public class CreateSliderImageDto
{
    [Required]
    public byte[] Image { get; set; }
}
