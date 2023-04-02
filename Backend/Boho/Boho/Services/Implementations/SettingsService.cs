using AutoMapper;
using Boho.Data;
using Boho.Dtos.Product;
using Boho.Dtos.Settings;
using Boho.Entities;
using Boho.Services.Abstractions;
using Microsoft.EntityFrameworkCore;

namespace Boho.Services.Implementations;
public class SettingsService : ISettingsService
{
    private readonly AppDbContext _context;
    private readonly IMapper _mapper;

    public SettingsService(AppDbContext context, IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }

    
    public async Task CreateSettingsAsync(CreateSettingsDto createSettingsDto)
    {
        var settings = _mapper.Map<Settings>(createSettingsDto);
        await _context.Settings.AddAsync(settings);
        await _context.SaveChangesAsync();
    }

    public async Task<bool> DeleteSettingsAsync(int id)
    {
        var settings = await _context.Settings.FirstOrDefaultAsync(m => m.Id == id);
        if (settings != null)
        {
            _context.Settings.Remove(settings);
            return true;
        }
        return false;
    }

    public async Task<SettingsDto> GetSettingsAsync()
    {
        var settings = await _context.Settings.FirstOrDefaultAsync();
        return _mapper.Map<SettingsDto>(settings);
    }

    public async Task<bool> UpdateSettingsAsync(UpdateSettingsDto updateSettingsDto)
    {
        var settings = await _context.Settings.FirstOrDefaultAsync(m => m.Id == updateSettingsDto.Id);
        if (settings != null)
        {
            settings.DaysHours = updateSettingsDto.DaysHours;
            settings.PhoneNumber = updateSettingsDto.PhoneNumber;
            settings.Location = updateSettingsDto.Location;
            await _context.SaveChangesAsync();
            return true;
        }
        return false;
    }
}
