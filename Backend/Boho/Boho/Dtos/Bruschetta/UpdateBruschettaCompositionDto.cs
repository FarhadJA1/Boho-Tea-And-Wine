using System.ComponentModel.DataAnnotations;

namespace Boho.Dtos.Bruschetta;
public class UpdateBruschettaCompositionDto
{
    [Required]
    public int Id { get; set; }
    [Required]
    public string Composition { get; set; }
    [Required]
    public int BruschettaId { get; set; }
}
