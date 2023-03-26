using Boho.Dtos.About;
using Boho.Dtos.Bruschetta;
using Boho.Dtos.Category;
using Boho.Dtos.Product;

namespace Boho.Services.Abstractions;
public interface IMenuService
{
    Task CreateBruschettaAsync(CreateBruschettaDto createBruschettaDto);
    Task CreateBruschettaCompositionAsync(CreateBruschettaCompositionDto createBruschettaCompositionDto);
    Task<IEnumerable<BruschettaDto>> GetAllBruschettasAsync();
    Task<IEnumerable<BruschettaCompositionDto>> GetAllBruschettaCompositionsAsync();
    Task<bool> UpdateBruschettaCompositionAsync(UpdateBruschettaCompositionDto updateBruschettaCompositionDto);
    Task<bool> UpdateBruschettaAsync(UpdateBruschettaDto updateBruschettaDto);
    Task<bool> DeleteBruschettaAsync(int id);
    Task<bool> DeleteBruschettaCompositionAsync(int id);
    Task CreateProductAsync(CreateProductDto createProductDto);
    Task<IEnumerable<ProductDto>> GetAllProductsAsync();
    Task<bool> UpdateProductAsync(UpdateProductDto updateProductDto);
    Task<bool> DeleteProductAsync(int id);
    Task CreateCategoryAsync(CreateCategoryDto createCategoryDto);
    Task<IEnumerable<CategoryDto>> GetAllCategoriesAsync();
    Task<bool> UpdateCategoryAsync(UpdateCategoryDto updateCategoryDto);
    Task<bool> DeleteCategoryAsync(int id);

}
