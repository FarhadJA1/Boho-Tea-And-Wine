namespace Boho.Entities;
public class Bruschetta
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string PriceForThree { get; set; }
    public string PriceForFive { get; set; }

    public IEnumerable<BruschettaComposition> BruschettaCompositions { get; set; }
}
