using System.ComponentModel.DataAnnotations;

namespace Boho.Dtos.About;
public class CreateContentDto
{

    [Required]
    public string ContentUp { get; set; }
    [Required]
    public string ContentDown { get; set; }
}
