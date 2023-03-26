namespace Boho.Entities;
public class BruschettaComposition
{
    public int Id { get; set; }
    public string Composition { get; set; }
    public int BruschettaId { get; set; }

    public Bruschetta Bruschetta { get; set; }
}
