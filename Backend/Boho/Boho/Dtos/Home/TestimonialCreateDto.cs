using System.ComponentModel.DataAnnotations;

namespace Boho.Dtos.Home;
public class TestimonialCreateDto
{
    [Required]
    public string Text { get; set; }
    [Required]
    public string Author { get; set; }
}
