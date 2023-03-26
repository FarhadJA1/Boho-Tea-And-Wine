using Boho.Dtos.Category;

namespace Boho.Dtos.Product;
public class ProductDto
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Price { get; set; }
    public string Description { get; set; }
    public int CategoryId { get; set; }


    public CategoryDto Category { get; set; }
}
