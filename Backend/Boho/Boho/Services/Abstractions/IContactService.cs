using Boho.Dtos.Contact;

namespace Boho.Services.Abstractions;
public interface IContactService
{
    Task CreateContactAsync(CreateContactDto createContactDto);
    Task<IEnumerable<ContactDto>> GetAllContacts();
    Task<bool> DeleteContactAsync(int id);
    Task<bool> UpdateContactAsync(UpdateContactDto updateContactDto);
}
