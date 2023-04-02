using AutoMapper;
using Boho.Dtos.About;
using Boho.Dtos.Bruschetta;
using Boho.Dtos.Category;
using Boho.Dtos.Contact;
using Boho.Dtos.GalleryImage;
using Boho.Dtos.GalleryImageText;
using Boho.Dtos.Home;
using Boho.Dtos.Product;
using Boho.Dtos.Settings;
using Boho.Entities;

namespace Boho.Mappings;
public class MappingProfile : Profile
{
	public MappingProfile()
	{
		//About
		CreateMap<AboutContent, CreateContentDto>().ReverseMap();
		CreateMap<AboutSliderImage, CreateSliderImageDto>().ReverseMap();
		CreateMap<AboutContent, AboutContentDto>();
		CreateMap<AboutSliderImage, AboutSliderImageDto>();
        CreateMap<AboutContent, UpdateAboutContentDto>().ReverseMap();
        CreateMap<AboutSliderImage, UpdateAboutSliderImage>().ReverseMap();

		//Bruschetta
		CreateMap<Bruschetta, CreateBruschettaDto>().ReverseMap();
		CreateMap<Bruschetta, BruschettaDto>();
		CreateMap<Bruschetta, UpdateBruschettaDto>().ReverseMap();
		CreateMap<BruschettaComposition, CreateBruschettaCompositionDto>().ReverseMap();
		CreateMap<BruschettaComposition,BruschettaCompositionDto>();
		CreateMap<BruschettaComposition, UpdateBruschettaCompositionDto>().ReverseMap();

		//Product
		CreateMap<Product, CreateProductDto>().ReverseMap();
		CreateMap<Product, ProductDto>();
		CreateMap<Product, UpdateProductDto>().ReverseMap();

        //Category
        CreateMap<Category, CreateCategoryDto>().ReverseMap();
        CreateMap<Category, CategoryDto>();
        CreateMap<Category, UpdateCategoryDto>().ReverseMap();

        //Contact
        CreateMap<Contact, CreateContactDto>().ReverseMap();
        CreateMap<Contact, ContactDto>();
        CreateMap<Contact, UpdateContactDto>().ReverseMap();

		//GalleryImage
		CreateMap<GalleryImage, CreateGalleryImageDto>().ReverseMap();
		CreateMap<GalleryImage, UpdateGalleryImageDto>().ReverseMap();
		CreateMap<GalleryImage, GalleryImageDto>();

		//GalleryImageText
		CreateMap<GalleryImageText, CreateGalleryImageTextDto>().ReverseMap();
		CreateMap<GalleryImageText, UpdateGalleryImageTextDto>().ReverseMap();
		CreateMap<GalleryImageText, GalleryImageTextDto>();

		//HomeAbout
		CreateMap<HomeAbout, HomeAboutCreateDto>().ReverseMap();
		CreateMap<HomeAbout, HomeAboutUpdateDto>().ReverseMap();
		CreateMap<HomeAbout, HomeAboutDto>();

        //HomeGalleryLabel
        CreateMap<HomeGalleryLabel, HomeGalleryLabelCreateDto>().ReverseMap();
        CreateMap<HomeGalleryLabel, HomeGalleryLabelUpdateDto>().ReverseMap();
        CreateMap<HomeGalleryLabel, HomeGalleryLabelDto>();

        //OpeningHour
        CreateMap<OpeningHours, OpeningHourCreateDto>().ReverseMap();
        CreateMap<OpeningHours, OpeningHourUpdateDto>().ReverseMap();
        CreateMap<OpeningHours, HomeGalleryLabelDto>();

        //TabMenu
        CreateMap<TabMenu, TabMenuCreateDto>().ReverseMap();
        CreateMap<TabMenu, TabMenuUpdateDto>().ReverseMap();
        CreateMap<TabMenu, TabMenuDto>();

        //Testimonial
        CreateMap<Testimonial, TestimonialCreateDto>().ReverseMap();
        CreateMap<Testimonial, TestimonialUpdateDto>().ReverseMap();
        CreateMap<Testimonial, TestimonialDto>();

        //TestimonialImage
        CreateMap<TestimonialImage, TestimonialImageCreateDto>().ReverseMap();
        CreateMap<TestimonialImage, TestimonialImageUpdateDto>().ReverseMap();
        CreateMap<TestimonialImage, TestimonialImageDto>();

        //Settings
        CreateMap<Settings, CreateSettingsDto>().ReverseMap();
        CreateMap<Settings, UpdateSettingsDto>().ReverseMap();
        CreateMap<Settings, SettingsDto>();
    }
}
