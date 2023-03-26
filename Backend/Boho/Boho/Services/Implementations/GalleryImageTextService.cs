using AutoMapper;
using Boho.Data;
using Boho.Dtos.GalleryImageText;
using Boho.Entities;
using Boho.Services.Abstractions;
using Microsoft.EntityFrameworkCore;

namespace Boho.Services.Implementations;
public class GalleryImageTextService : IGalleryImageTextService
{
    private readonly AppDbContext _context;
    private readonly IMapper _mapper;

    public GalleryImageTextService(AppDbContext context, IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }
    public async Task CreateGalleryImageTextAsync(CreateGalleryImageTextDto createGalleryImageTextDto)
    {
        var galleryImageText = _mapper.Map<GalleryImageText>(createGalleryImageTextDto);
        await _context.GalleryImageTexts.AddAsync(galleryImageText);
        await _context.SaveChangesAsync();
    }

    public async Task<bool> DeleteGalleryImageTextAsync(int id)
    {
        var data = await _context.GalleryImageTexts.FirstOrDefaultAsync(m => m.Id == id);
        if (data != null)
        {
            _context.GalleryImageTexts.Remove(data);
            await _context.SaveChangesAsync();
            return true;
        }
        return false;
    }

    public async Task<IEnumerable<GalleryImageTextDto>> GetAllGalleryImageTexts()
    {
        var galleryImageTexts = await _context.GalleryImageTexts.Include(m=>m.GalleryImage).ToListAsync();
        return _mapper.Map<IEnumerable<GalleryImageTextDto>>(galleryImageTexts);
    }

    public async Task<bool> UpdateGalleryImageTextAsync(UpdateGalleryImageTextDto updateGalleryImageTextDto)
    {
        var data = await _context.GalleryImageTexts.FirstOrDefaultAsync(m => m.Id == updateGalleryImageTextDto.Id);
        if (data != null)
        {
            data.Text = updateGalleryImageTextDto.Text;
            data.GalleryImageId = updateGalleryImageTextDto.GalleryImageId;
            await _context.SaveChangesAsync();
            return true;
        }
        return false;
    }
}
