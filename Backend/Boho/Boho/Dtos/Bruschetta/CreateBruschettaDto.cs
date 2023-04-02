using System.ComponentModel.DataAnnotations;

namespace Boho.Dtos.Bruschetta;
public class CreateBruschettaDto
{
    [Required]
    public string Name { get; set; }
    [Required]
    public string PriceForThree { get; set; }
    [Required]
    public string PriceForFive { get; set; }
}
