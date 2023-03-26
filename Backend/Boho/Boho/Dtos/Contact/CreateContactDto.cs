namespace Boho.Dtos.Contact;
public class CreateContactDto
{
    public string CafeName { get; set; }
    public string PageTitle { get; set; }
    public string OpenTitle { get; set; }
    public string Days { get; set; }
    public string Hours { get; set; }
    public string PhoneNumber { get; set; }
    public byte[] Image { get; set; }
}
