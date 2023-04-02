using Boho.Dtos.Contact;
using Boho.Dtos.Home;

namespace Boho.Services.Abstractions;
public interface IHomeService
{
    //HomeAbout
    Task CreateHomeAboutContentAsync(HomeAboutCreateDto homeAboutCreateDto);
    Task<HomeAboutDto> GetHomeAboutAsync();
    Task<bool> DeleteHomeAboutAsync(int id);
    Task<bool> UpdateHomeAboutAsync(HomeAboutUpdateDto homeAboutUpdateDto);


    //HomeGalleryLabel
    Task CreateHomeGalleryLabelAsync(HomeGalleryLabelCreateDto homeGalleryLabelCreateDto);
    Task<HomeGalleryLabelDto> GetHomeGalleryLabelAsync();
    Task<bool> DeleteHomeGalleryLabelAsync(int id);
    Task<bool> UpdateHomeGalleryLabelAsync(HomeGalleryLabelUpdateDto homeGalleryLabelUpdateDto);


    //OpeninHour
    Task CreateOpeningHourAsync(OpeningHourCreateDto openingHourCreateDto);
    Task<OpeningHourDto> GetOpeningHourAsync();
    Task<bool> DeleteOpeningHourAsync(int id);
    Task<bool> UpdateOpeningHourAsync(OpeningHourUpdateDto openingHourUpdateDto);


    //TabMenu
    Task CreateTabMenuAsync(TabMenuCreateDto tabMenuCreateDto);
    Task<IEnumerable<TabMenuDto>> GetAllTabMenusAsync();
    Task<bool> DeleteTabMenuAsync(int id);
    Task<bool> UpdateTabMenuAsync(TabMenuUpdateDto tabMenuUpdateDto);


    //Testimonial
    Task CreateTestimonialAsync(TestimonialCreateDto testimonialCreateDto);
    Task<IEnumerable<TestimonialDto>> GetAllTestimonialsAsync();
    Task<bool> DeleteTestimonialAsync(int id);
    Task<bool> UpdateTestimonialAsync(TestimonialUpdateDto testimonialUpdateDto);


    //TestimonialImage
    Task CreateTestimonialImageAsync(TestimonialImageCreateDto testimonialImageCreateDto);
    Task<TestimonialImageDto> GetTestimonialImageAsync();
    Task<bool> DeleteTestimonialImageAsync(int id);
    Task<bool> UpdateTestimonialImageAsync(TestimonialImageUpdateDto testimonialImageUpdateDto);
}
