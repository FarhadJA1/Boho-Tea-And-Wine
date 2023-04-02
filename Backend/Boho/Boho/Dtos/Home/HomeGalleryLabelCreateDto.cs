using System.ComponentModel.DataAnnotations;

namespace Boho.Dtos.Home;
public class HomeGalleryLabelCreateDto
{
    [Required]
    public string Title { get; set; }
    [Required]
    public string Label { get; set; }
}
