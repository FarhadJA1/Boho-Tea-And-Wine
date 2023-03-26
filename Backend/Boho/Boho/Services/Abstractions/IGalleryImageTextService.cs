using Boho.Dtos.Contact;
using Boho.Dtos.GalleryImageText;

namespace Boho.Services.Abstractions;
public interface IGalleryImageTextService
{
    Task CreateGalleryImageTextAsync(CreateGalleryImageTextDto createGalleryImageTextDto);
    Task<IEnumerable<GalleryImageTextDto>> GetAllGalleryImageTexts();
    Task<bool> DeleteGalleryImageTextAsync(int id);
    Task<bool> UpdateGalleryImageTextAsync(UpdateGalleryImageTextDto updateGalleryImageTextDto);
}
