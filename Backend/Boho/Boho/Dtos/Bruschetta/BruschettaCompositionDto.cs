

namespace Boho.Dtos.Bruschetta;
public class BruschettaCompositionDto
{
    public int Id { get; set; }
    public string Composition { get; set; }
    public int BruschettaId { get; set; }

    public BruschettaDto Bruschetta { get; set; }
}
