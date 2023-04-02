using System.ComponentModel.DataAnnotations;

namespace Boho.Dtos.Home;
public class HomeGalleryLabelUpdateDto
{
    [Required]
    public int Id { get; set; }
    [Required]
    public string Title { get; set; }
    [Required]
    public string Label { get; set; }
}
