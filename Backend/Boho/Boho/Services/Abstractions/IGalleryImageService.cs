using Boho.Dtos.GalleryImage;

namespace Boho.Services.Abstractions;
public interface IGalleryImageService
{
    Task CreateGalleryImageAsync(CreateGalleryImageDto createGalleryImageDto);
    Task<IEnumerable<GalleryImageDto>> GetAllGalleryImages();
    Task<bool> DeleteGalleryImageAsync(int id);
    Task<bool> UpdateGalleryImageAsync(UpdateGalleryImageDto updateGalleryImageDto);
}
