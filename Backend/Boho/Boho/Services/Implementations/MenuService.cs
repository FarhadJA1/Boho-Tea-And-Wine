using AutoMapper;
using Boho.Data;
using Boho.Dtos.About;
using Boho.Dtos.Bruschetta;
using Boho.Dtos.Category;
using Boho.Dtos.Product;
using Boho.Entities;
using Boho.Services.Abstractions;
using Microsoft.EntityFrameworkCore;

namespace Boho.Services.Implementations;
public class MenuService : IMenuService
{
    private readonly AppDbContext _context;
    private readonly IMapper _mapper;

    public MenuService(AppDbContext context, IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }
    #region Bruschettas
    public async Task CreateBruschettaAsync(CreateBruschettaDto createBruschettaDto)
    {
        var bruschetta = _mapper.Map<Bruschetta>(createBruschettaDto);
        await _context.Bruschettas.AddAsync(bruschetta);
        await _context.SaveChangesAsync();
    }
    public async Task<bool> DeleteBruschettaAsync(int id)
    {
        var bruschetta = await _context.Bruschettas.FirstOrDefaultAsync(m => m.Id == id);
        if (bruschetta != null)
        {
            _context.Bruschettas.Remove(bruschetta);
            await _context.SaveChangesAsync();
            return true;
        }
        return false;
    }
    public async Task<IEnumerable<BruschettaDto>> GetAllBruschettasAsync()
    {
        var bruschettas = await _context.Bruschettas.Include(x => x.BruschettaCompositions).ToListAsync();
        return _mapper.Map<IEnumerable<BruschettaDto>>(bruschettas);
    }
    public async Task<bool> UpdateBruschettaAsync(UpdateBruschettaDto updateBruschettaDto)
    {
        var bruschetta = await _context.Bruschettas.FirstOrDefaultAsync(m => m.Id == updateBruschettaDto.Id);
        if (bruschetta != null)
        {
            bruschetta.Name = updateBruschettaDto.Name;
            bruschetta.PriceForThree = updateBruschettaDto.PriceForThree;
            bruschetta.PriceForFive = updateBruschettaDto.PriceForFive;
            await _context.SaveChangesAsync();
            return true;
        }
        return false;
    }
    #endregion

    #region BruschettaCompositions
    public async Task CreateBruschettaCompositionAsync(CreateBruschettaCompositionDto createBruschettaCompositionDto)
    {
        var bruschettaComposition = _mapper.Map<BruschettaComposition>(createBruschettaCompositionDto);
        await _context.BruschettaCompositions.AddAsync(bruschettaComposition);
        await _context.SaveChangesAsync();
    }
    public async Task<bool> DeleteBruschettaCompositionAsync(int id)
    {
        var bruschettaComposition = await _context.BruschettaCompositions.FirstOrDefaultAsync(m => m.Id == id);
        if (bruschettaComposition != null)
        {
            _context.BruschettaCompositions.Remove(bruschettaComposition);
            await _context.SaveChangesAsync();
            return true;
        }
        return false;
    }
    public async Task<IEnumerable<BruschettaCompositionDto>> GetAllBruschettaCompositionsAsync()
    {
        var bruschettaCompositions = await _context.BruschettaCompositions.Include(m => m.Bruschetta).ToListAsync();
        return _mapper.Map<IEnumerable<BruschettaCompositionDto>>(bruschettaCompositions);
    }
    public async Task<bool> UpdateBruschettaCompositionAsync(UpdateBruschettaCompositionDto updateBruschettaCompositionDto)
    {
        var bruschettaComposition = await _context.BruschettaCompositions.FirstOrDefaultAsync(m => m.Id == updateBruschettaCompositionDto.Id);
        if (bruschettaComposition != null)
        {
            bruschettaComposition.Composition = updateBruschettaCompositionDto.Composition;
            bruschettaComposition.BruschettaId = updateBruschettaCompositionDto.BruschettaId;
            await _context.SaveChangesAsync();
            return true;
        }
        return false;
    }
    #endregion

    #region Products
    public async Task CreateProductAsync(CreateProductDto createProductDto)
    {
        var product = _mapper.Map<Product>(createProductDto);
        await _context.Products.AddAsync(product);
        await _context.SaveChangesAsync();
    }
    public async Task<IEnumerable<ProductDto>> GetAllProductsAsync()
    {
        var products = await _context.Products.Include(m => m.Category).ToListAsync();
        return _mapper.Map<IEnumerable<ProductDto>>(products);
    }
    public async Task<bool> DeleteProductAsync(int id)
    {
        var product = await _context.Products.FirstOrDefaultAsync(m => m.Id == id);
        if (product != null)
        {
            _context.Products.Remove(product);
            await _context.SaveChangesAsync();
            return true;
        }
        return false;
    }
    public async Task<bool> UpdateProductAsync(UpdateProductDto updateProductDto)
    {
        var product = await _context.Products.FirstOrDefaultAsync(m => m.Id == updateProductDto.Id);
        if (product != null)
        {
            product.Price = updateProductDto.Price;
            product.Description = updateProductDto.Description;
            product.Name = updateProductDto.Name;
            product.CategoryId = updateProductDto.CategoryId;
            await _context.SaveChangesAsync();
            return true;
        }
        return false;
    }
    #endregion

    #region Categories
    public async Task CreateCategoryAsync(CreateCategoryDto createCategoryDto)
    {
        var category = _mapper.Map<Category>(createCategoryDto);
        await _context.Categories.AddAsync(category);
        await _context.SaveChangesAsync();
    }

    public async Task<IEnumerable<CategoryDto>> GetAllCategoriesAsync()
    {
        var categories = _context.Categories.Include(m=>m.Products).ToListAsync();
        return _mapper.Map<IEnumerable<CategoryDto>>(categories);
    }

    public async Task<bool> UpdateCategoryAsync(UpdateCategoryDto updateCategoryDto)
    {
        var category = await _context.Categories.FirstOrDefaultAsync(m => m.Id == updateCategoryDto.Id);
        if (category != null)
        {
            category.Name = updateCategoryDto.Name;
            await _context.SaveChangesAsync();
            return true;
        }
        return false;
    }

    public async Task<bool> DeleteCategoryAsync(int id)
    {
        var category = await _context.Categories.FirstOrDefaultAsync(m => m.Id == id);
        if (category != null)
        {
            _context.Categories.Remove(category);
            await _context.SaveChangesAsync();
            return true;
        }
        return false;
    }
    #endregion


}
