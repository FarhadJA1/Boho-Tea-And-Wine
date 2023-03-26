using Boho.Dtos.Product;

namespace Boho.Dtos.Category;
public class CategoryDto
{
    public int Id { get; set; }
    public string Name { get; set; }
    public IEnumerable<ProductDto> Products { get; set; }
}
