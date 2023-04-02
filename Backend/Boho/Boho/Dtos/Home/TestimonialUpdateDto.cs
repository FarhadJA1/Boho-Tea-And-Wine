using System.ComponentModel.DataAnnotations;

namespace Boho.Dtos.Home;
public class TestimonialUpdateDto
{
    [Required]
    public int Id { get; set; }
    [Required]
    public string Text { get; set; }
    [Required]
    public string Author { get; set; }
}
