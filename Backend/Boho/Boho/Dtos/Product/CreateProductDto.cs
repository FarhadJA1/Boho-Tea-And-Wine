namespace Boho.Dtos.Product;
public class CreateProductDto
{
    public string Name { get; set; }
    public string Price { get; set; }
    public string Description { get; set; }
    public int CategoryId { get; set; }
}
