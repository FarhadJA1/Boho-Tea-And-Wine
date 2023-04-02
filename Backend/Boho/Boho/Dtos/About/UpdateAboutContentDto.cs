using System.ComponentModel.DataAnnotations;

namespace Boho.Dtos.About;
public class UpdateAboutContentDto
{
    [Required]
    public int Id { get; set; }
    [Required]
    public string ContentUp { get; set; }
    [Required]
    public string ContentDown { get; set; }
}
