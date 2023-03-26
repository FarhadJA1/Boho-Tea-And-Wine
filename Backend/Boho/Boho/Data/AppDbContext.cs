using Boho.Entities;
using Microsoft.EntityFrameworkCore;

namespace Boho.Data;
public class AppDbContext : DbContext
{
	public AppDbContext(DbContextOptions options) : base(options)
	{

	}

    public DbSet<AboutContent> AboutContents { get; set; }
	public DbSet<AboutSliderImage> AboutSliderImages { get; set; }
	public DbSet<Bruschetta> Bruschettas { get; set; }
	public DbSet<BruschettaComposition> BruschettaCompositions { get; set; }
	public DbSet<Category> Categories { get; set; }
	public DbSet<Contact> Contacts { get; set; }
	public DbSet<GalleryImage> GalleryImages { get; set; }
	public DbSet<GalleryImageText> GalleryImageTexts { get; set; }
	public DbSet<HomeAbout> HomeAbouts { get; set; }
	public DbSet<HomeGalleryLabel> HomeGalleryLabels { get; set; }
	public DbSet<OpeningHours> OpeningHours { get; set; }
	public DbSet<Product> Products { get; set; }
	public DbSet<Settings> Settings { get; set; }
	public DbSet<TabMenu> TabMenus { get; set; }
	public DbSet<Testimonial> Testimonials { get; set; }
	public DbSet<TestimonialImage> TestimonialImages { get; set; }
}
