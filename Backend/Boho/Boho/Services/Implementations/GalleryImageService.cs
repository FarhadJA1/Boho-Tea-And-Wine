using AutoMapper;
using Boho.Data;
using Boho.Dtos.GalleryImage;
using Boho.Entities;
using Boho.Services.Abstractions;
using Microsoft.EntityFrameworkCore;

namespace Boho.Services.Implementations;
public class GalleryImageService : IGalleryImageService
{
    private readonly AppDbContext _context;
    private readonly IMapper _mapper;

    public GalleryImageService(AppDbContext context, IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }
    public async Task CreateGalleryImageAsync(CreateGalleryImageDto createGalleryImageDto)
    {
        var galleryImage = _mapper.Map<GalleryImage>(createGalleryImageDto);
        await _context.GalleryImages.AddAsync(galleryImage);
        await _context.SaveChangesAsync();
    }

    public async Task<bool> DeleteGalleryImageAsync(int id)
    {
        var data = await _context.GalleryImages.FirstOrDefaultAsync(m => m.Id == id);
        if (data != null)
        {
            _context.GalleryImages.Remove(data);
            await _context.SaveChangesAsync();
            return true;
        }
        return false;
    }

    public async Task<IEnumerable<GalleryImageDto>> GetAllGalleryImages()
    {
        var galleryImages = await _context.GalleryImages.ToListAsync();
        return _mapper.Map<IEnumerable<GalleryImageDto>>(galleryImages);
    }

    public async Task<bool> UpdateGalleryImageAsync(UpdateGalleryImageDto updateGalleryImageDto)
    {
        var data = await _context.GalleryImages.FirstOrDefaultAsync(m => m.Id == updateGalleryImageDto.Id);
        if (data != null)
        {
            data.Image = updateGalleryImageDto.Image;
            await _context.SaveChangesAsync();
            return true;
        }
        return false;
    }
}
