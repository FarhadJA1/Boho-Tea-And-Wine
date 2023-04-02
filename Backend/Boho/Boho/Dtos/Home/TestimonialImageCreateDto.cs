using System.ComponentModel.DataAnnotations;

namespace Boho.Dtos.Home;
public class TestimonialImageCreateDto
{
    [Required]
    public byte[] Image { get; set; }
}
