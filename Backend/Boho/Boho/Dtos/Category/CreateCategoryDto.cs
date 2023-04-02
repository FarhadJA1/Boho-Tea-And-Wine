using System.ComponentModel.DataAnnotations;

namespace Boho.Dtos.Category;
public class CreateCategoryDto
{
    [Required]
    public string Name { get; set; }
}
