using Boho.Entities;

namespace Boho.Dtos.Bruschetta;
public class BruschettaDto
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string PriceForThree { get; set; }
    public string PriceForFive { get; set; }

    public IEnumerable<BruschettaCompositionDto> BruschettaCompositions { get; set; }
}
