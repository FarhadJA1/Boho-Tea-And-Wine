using System.ComponentModel.DataAnnotations;

namespace Boho.Dtos.Category;
public class UpdateCategoryDto
{
    [Required]
    public int Id { get; set; }
    [Required]
    public string Name { get; set; }
}
