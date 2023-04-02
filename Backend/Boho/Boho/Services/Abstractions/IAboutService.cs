using Boho.Dtos.About;

namespace Boho.Services.Abstractions;
public interface IAboutService
{
    Task CreateContentAsync(CreateContentDto createContentDto);
    Task CreateSliderImageAsync(CreateSliderImageDto createSliderImageDto);
    Task<AboutContentDto> GetAllAboutContentsAsync();
    Task<IEnumerable<AboutSliderImageDto>> GetAllAboutSliderImagesAsync();
    Task<bool> UpdateAboutSliderImageAsync(UpdateAboutSliderImage updateAboutSliderImage);
    Task<bool> UpdateAboutContentAsync(UpdateAboutContentDto updateAboutContentDto);
    Task<bool> DeleteAboutContentAsync(int id);
    Task<bool> DeleteAboutSliderImageAsync(int id);
}
