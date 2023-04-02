using System.ComponentModel.DataAnnotations;

namespace Boho.Dtos.Settings;
public class UpdateSettingsDto
{
    [Required]
    public int Id { get; set; }
    [Required]
    public string Location { get; set; }
    [Required]
    public string DaysHours { get; set; }
    [Required]
    public string PhoneNumber { get; set; }
}
