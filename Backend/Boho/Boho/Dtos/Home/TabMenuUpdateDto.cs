using System.ComponentModel.DataAnnotations;

namespace Boho.Dtos.Home;
public class TabMenuUpdateDto
{
    [Required]
    public int Id { get; set; }
    [Required]
    public string FirstText { get; set; }
    [Required]
    public string SecondText { get; set; }
    [Required]
    public byte[] Image { get; set; }
}
