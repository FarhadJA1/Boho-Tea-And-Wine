using Boho.Dtos.Settings;

namespace Boho.Services.Abstractions;
public interface ISettingsService
{
    Task CreateSettingsAsync(CreateSettingsDto createSettingsDto);
    Task<SettingsDto> GetSettingsAsync();
    Task<bool> DeleteSettingsAsync(int id);
    Task<bool> UpdateSettingsAsync(UpdateSettingsDto updateSettingsDto);
}
