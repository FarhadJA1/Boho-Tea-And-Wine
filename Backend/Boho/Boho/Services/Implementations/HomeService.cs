using AutoMapper;
using Boho.Data;
using Boho.Dtos.Home;
using Boho.Entities;
using Boho.Services.Abstractions;
using Microsoft.EntityFrameworkCore;

namespace Boho.Services.Implementations;
public class HomeService : IHomeService
{
    private readonly AppDbContext _context;
    private readonly IMapper _mapper;
       
    public HomeService(AppDbContext context, IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }

    #region HomeAbout
    public async Task CreateHomeAboutContentAsync(HomeAboutCreateDto homeAboutCreateDto)
    {
        var homeAbout = _mapper.Map<HomeAbout>(homeAboutCreateDto);
        await _context.HomeAbouts.AddAsync(homeAbout);
        await _context.SaveChangesAsync();
    }
    public async Task<bool> DeleteHomeAboutAsync(int id)
    {
        var data = await _context.HomeAbouts.FirstOrDefaultAsync(m => m.Id == id);
        if (data != null)
        {
            _context.HomeAbouts.Remove(data);
            await _context.SaveChangesAsync();
            return true;
        }
        return false;
    }
    public async Task<HomeAboutDto> GetHomeAboutAsync()
    {
        var homeAbout = await _context.HomeAbouts.FirstOrDefaultAsync();
        return _mapper.Map<HomeAboutDto>(homeAbout);
    }
    public async Task<bool> UpdateHomeAboutAsync(HomeAboutUpdateDto homeAboutUpdateDto)
    {
        var data = await _context.HomeAbouts.FirstOrDefaultAsync(m => m.Id == homeAboutUpdateDto.Id);
        if (data != null)
        {
            data.TitleUp = homeAboutUpdateDto.TitleUp;
            data.DescriptionUp = homeAboutUpdateDto.DescriptionUp;
            data.DescriptionDown = homeAboutUpdateDto.DescriptionDown;
            data.TitleDown = homeAboutUpdateDto.TitleDown;
            data.Image = homeAboutUpdateDto.Image;
            data.Label = homeAboutUpdateDto.Label;
            await _context.SaveChangesAsync();
            return true;
        }
        return false;
    }
    #endregion

    #region HomeGalleryLabel
    public async Task CreateHomeGalleryLabelAsync(HomeGalleryLabelCreateDto homeGalleryLabelCreateDto)
    {
        var homeGalleryLabel = _mapper.Map<HomeGalleryLabel>(homeGalleryLabelCreateDto);
        await _context.HomeGalleryLabels.AddAsync(homeGalleryLabel);
        await _context.SaveChangesAsync();
    }
    public async Task<bool> DeleteHomeGalleryLabelAsync(int id)
    {
        var data = await _context.HomeGalleryLabels.FirstOrDefaultAsync(m => m.Id == id);
        if (data != null)
        {
            _context.HomeGalleryLabels.Remove(data);
            await _context.SaveChangesAsync();
            return true;
        }
        return false;
    }
    public async Task<HomeGalleryLabelDto> GetHomeGalleryLabelAsync()
    {
        var homeGalleryLabel = await _context.HomeGalleryLabels.FirstOrDefaultAsync();
        return _mapper.Map<HomeGalleryLabelDto>(homeGalleryLabel);
    }
    public async Task<bool> UpdateHomeGalleryLabelAsync(HomeGalleryLabelUpdateDto homeGalleryLabelUpdateDto)
    {
        var data = await _context.HomeGalleryLabels.FirstOrDefaultAsync(m => m.Id == homeGalleryLabelUpdateDto.Id);
        if (data != null)
        {
            data.Title = homeGalleryLabelUpdateDto.Title;
            data.Label = homeGalleryLabelUpdateDto.Label;            
            await _context.SaveChangesAsync();
            return true;
        }
        return false;
    }
    #endregion

    #region OpeningHour
    public async Task CreateOpeningHourAsync(OpeningHourCreateDto openingHourCreateDto)
    {
        var openingHours = _mapper.Map<OpeningHours>(openingHourCreateDto);
        await _context.OpeningHours.AddAsync(openingHours);
        await _context.SaveChangesAsync();
    }
    public async Task<OpeningHourDto> GetOpeningHourAsync()
    {
        var openingHour = await _context.OpeningHours.FirstOrDefaultAsync();
        return _mapper.Map<OpeningHourDto>(openingHour);
    }
    public async Task<bool> DeleteOpeningHourAsync(int id)
    {
        var data = await _context.OpeningHours.FirstOrDefaultAsync(m => m.Id == id);
        if (data != null)
        {
            _context.OpeningHours.Remove(data);
            await _context.SaveChangesAsync();
            return true;
        }
        return false;
    }
    public async Task<bool> UpdateOpeningHourAsync(OpeningHourUpdateDto openingHourUpdateDto)
    {
        var data = await _context.OpeningHours.FirstOrDefaultAsync(m => m.Id == openingHourUpdateDto.Id);
        if (data != null)
        {
            data.ClosingHour = openingHourUpdateDto.ClosingHour;
            data.OpeningHour = openingHourUpdateDto.OpeningHour;
            data.NumberLabel = openingHourUpdateDto.NumberLabel;
            data.Label = openingHourUpdateDto.Label;
            data.Days = openingHourUpdateDto.Days;
            data.PhoneNumber = openingHourUpdateDto.PhoneNumber;
            data.Title = openingHourUpdateDto.Title;
            await _context.SaveChangesAsync();
            return true;
        }
        return false;
    }
    #endregion

    #region TabMenu
    public async Task CreateTabMenuAsync(TabMenuCreateDto tabMenuCreateDto)
    {
        var tabMenu = _mapper.Map<TabMenu>(tabMenuCreateDto);
        await _context.TabMenus.AddAsync(tabMenu);
        await _context.SaveChangesAsync();
    }
    public async Task<IEnumerable<TabMenuDto>> GetAllTabMenusAsync()
    {
        var tabMenus = await _context.TabMenus.ToListAsync();
        return _mapper.Map<IEnumerable<TabMenuDto>>(tabMenus);
    }
    public async Task<bool> DeleteTabMenuAsync(int id)
    {
        var data = await _context.TabMenus.FirstOrDefaultAsync(m => m.Id == id);
        if (data != null)
        {
            _context.TabMenus.Remove(data);
            await _context.SaveChangesAsync();
            return true;
        }
        return false;
    }
    public async Task<bool> UpdateTabMenuAsync(TabMenuUpdateDto tabMenuUpdateDto)
    {
        var data = await _context.TabMenus.FirstOrDefaultAsync(m => m.Id == tabMenuUpdateDto.Id);
        if (data != null)
        {
            data.FirstText = tabMenuUpdateDto.FirstText;
            data.SecondText = tabMenuUpdateDto.SecondText;
            data.Image = tabMenuUpdateDto.Image;
            await _context.SaveChangesAsync();
            return true;
        }
        return false;
    }
    #endregion

    #region Testimonial
    public async Task CreateTestimonialAsync(TestimonialCreateDto testimonialCreateDto)
    {
        var tabMenu = _mapper.Map<Testimonial>(testimonialCreateDto);
        await _context.Testimonials.AddAsync(tabMenu);
        await _context.SaveChangesAsync();
    }
    public async Task<IEnumerable<TestimonialDto>> GetAllTestimonialsAsync()
    {
        var testimonials = await _context.Testimonials.ToListAsync();
        return _mapper.Map<IEnumerable<TestimonialDto>>(testimonials);
    }
    public async Task<bool> DeleteTestimonialAsync(int id)
    {
        var data = await _context.Testimonials.FirstOrDefaultAsync(m => m.Id == id);
        if (data != null)
        {
            _context.Testimonials.Remove(data);
            await _context.SaveChangesAsync();
            return true;
        }
        return false;
    }
    public async Task<bool> UpdateTestimonialAsync(TestimonialUpdateDto testimonialUpdateDto)
    {
        var data = await _context.Testimonials.FirstOrDefaultAsync(m => m.Id == testimonialUpdateDto.Id);
        if (data != null)
        {
            data.Text = testimonialUpdateDto.Text;
            data.Author = testimonialUpdateDto.Author;            
            await _context.SaveChangesAsync();
            return true;
        }
        return false;
    }

    #endregion

    #region TestimonialImage
    public async Task CreateTestimonialImageAsync(TestimonialImageCreateDto testimonialImageCreateDto)
    {
        var testimonialImage = _mapper.Map<TestimonialImage>(testimonialImageCreateDto);
        await _context.TestimonialImages.AddAsync(testimonialImage);
        await _context.SaveChangesAsync();
    }
    public async Task<TestimonialImageDto> GetTestimonialImageAsync()
    {
        var testimonials = await _context.Testimonials.FirstOrDefaultAsync();
        return _mapper.Map<TestimonialImageDto>(testimonials);
    }
    public async Task<bool> DeleteTestimonialImageAsync(int id)
    {
        var data = await _context.TestimonialImages.FirstOrDefaultAsync(m => m.Id == id);
        if (data != null)
        {
            _context.TestimonialImages.Remove(data);
            await _context.SaveChangesAsync();
            return true;
        }
        return false;
    }
    public async Task<bool> UpdateTestimonialImageAsync(TestimonialImageUpdateDto testimonialImageUpdateDto)
    {
        var data = await _context.TestimonialImages.FirstOrDefaultAsync(m => m.Id == testimonialImageUpdateDto.Id);
        if (data != null)
        {
            data.Image = testimonialImageUpdateDto.Image;
            await _context.SaveChangesAsync();
            return true;
        }
        return false;
    }
    #endregion
}
