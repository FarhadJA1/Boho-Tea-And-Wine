using System.ComponentModel.DataAnnotations;

namespace Boho.Dtos.Home;
public class OpeningHourCreateDto
{
    [Required]
    public string Title { get; set; }
    [Required]
    public string Label { get; set; }
    [Required]
    public string Days { get; set; }
    [Required]
    public string OpeningHour { get; set; }
    [Required]
    public string ClosingHour { get; set; }
    [Required]
    public string NumberLabel { get; set; }
    [Required]
    public string PhoneNumber { get; set; }
}
