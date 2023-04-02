using System.ComponentModel.DataAnnotations;

namespace Boho.Dtos.Contact;
public class UpdateContactDto
{
    [Required]
    public int Id { get; set; }
    [Required]
    public string CafeName { get; set; }
    [Required]
    public string PageTitle { get; set; }
    [Required]
    public string OpenTitle { get; set; }
    [Required]
    public string Days { get; set; }
    [Required]
    public string Hours { get; set; }
    [Required]
    public string PhoneNumber { get; set; }
    [Required]
    public byte[] Image { get; set; }
}
