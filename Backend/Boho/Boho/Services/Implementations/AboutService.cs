using AutoMapper;
using Boho.Data;
using Boho.Dtos.About;
using Boho.Entities;
using Boho.Services.Abstractions;
using Microsoft.EntityFrameworkCore;

namespace Boho.Services.Implementations;
public class AboutService : IAboutService
{
    private readonly AppDbContext _context;
    private readonly IMapper _mapper;

    public AboutService(AppDbContext context,IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }

    public async Task CreateContentAsync(CreateContentDto createContentDto)
    {
        var content = _mapper.Map<AboutContent>(createContentDto);
        await _context.AboutContents.AddAsync(content);
        await _context.SaveChangesAsync();
    }

    public async Task CreateSliderImageAsync(CreateSliderImageDto createSliderImageDto)
    {
        var image = _mapper.Map<AboutSliderImage>(createSliderImageDto);
        await _context.AboutSliderImages.AddAsync(image);
        await _context.SaveChangesAsync();
    }

    public async Task<bool> DeleteAboutContentAsync(int id)
    {
        var data = await _context.AboutContents.FirstOrDefaultAsync(m=>m.Id == id);
        if(data != null)
        {
            _context.AboutContents.Remove(data);
            await _context.SaveChangesAsync();
            return true;
        }
        return false;
    }

    public async Task<bool> DeleteAboutSliderImageAsync(int id)
    {
        var data = await _context.AboutSliderImages.FirstOrDefaultAsync(m => m.Id == id);
        if (data != null)
        {
            _context.AboutSliderImages.Remove(data);
            await _context.SaveChangesAsync();
            return true;
        }
        return false;
    }

    public async Task<AboutContentDto> GetAllAboutContentsAsync()
    {
        var contents = await _context.AboutContents.ToListAsync();
        return _mapper.Map<AboutContentDto>(contents);
    }

    public async Task<IEnumerable<AboutSliderImageDto>> GetAllAboutSliderImagesAsync()
    {
        var images = await _context.AboutSliderImages.ToListAsync();
        return _mapper.Map<IEnumerable<AboutSliderImageDto>>(images);
    }

    public async Task<bool> UpdateAboutContentAsync(UpdateAboutContentDto updateAboutContentDto)
    {
        var data = await _context.AboutContents.FirstOrDefaultAsync(m => m.Id == updateAboutContentDto.Id);
        if (data != null)
        {
            data.ContentUp = updateAboutContentDto.ContentUp;
            data.ContentDown = updateAboutContentDto.ContentDown;
            await _context.SaveChangesAsync();
            return true;
        }
        return false;
    }

    public async Task<bool> UpdateAboutSliderImageAsync(UpdateAboutSliderImage updateAboutSliderImage)
    {
        var data = await _context.AboutSliderImages.FirstOrDefaultAsync(m=>m.Id == updateAboutSliderImage.Id);
        if (data != null)
        {
            data.Image = updateAboutSliderImage.Image;
            await _context.SaveChangesAsync();
            return true;
        }
        return false;
    }
}
