using System.ComponentModel.DataAnnotations;

namespace Boho.Dtos.Bruschetta;
public class CreateBruschettaCompositionDto
{
    [Required]
    public string Composition { get; set; }
    [Required]
    public int BruschettaId { get; set; }
}
