using System.ComponentModel.DataAnnotations;

namespace Boho.Dtos.Home;
public class HomeAboutCreateDto
{
    [Required]
    public string TitleUp { get; set; }
    [Required]
    public string TitleDown { get; set; }
    [Required]
    public string Label { get; set; }
    [Required]
    public string DescriptionUp { get; set; }
    [Required]
    public string DescriptionDown { get; set; }
    [Required]
    public byte[] Image { get; set; }
}
