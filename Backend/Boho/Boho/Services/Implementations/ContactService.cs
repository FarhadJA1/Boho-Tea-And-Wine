using AutoMapper;
using Boho.Data;
using Boho.Dtos.About;
using Boho.Dtos.Contact;
using Boho.Entities;
using Boho.Services.Abstractions;
using Microsoft.EntityFrameworkCore;

namespace Boho.Services.Implementations;
public class ContactService : IContactService
{
    private readonly AppDbContext _context;
    private readonly IMapper _mapper;

    public ContactService(AppDbContext context, IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }
    public async Task CreateContactAsync(CreateContactDto createContactDto)
    {
        var contact = _mapper.Map<Contact>(createContactDto);
        await _context.Contacts.AddAsync(contact);
        await _context.SaveChangesAsync();
    }

    public async Task<bool> DeleteContactAsync(int id)
    {
        var contact = await _context.Contacts.FirstOrDefaultAsync(m=>m.Id == id);
        if (contact != null)
        {
            _context.Contacts.Remove(contact);
            await _context.SaveChangesAsync();
            return true;
        }
        return false;
    }

    public async Task<IEnumerable<ContactDto>> GetAllContacts()
    {
        var contacts = await _context.Contacts.ToListAsync();
        return _mapper.Map<IEnumerable<ContactDto>>(contacts);
    }

    public async Task<bool> UpdateContactAsync(UpdateContactDto updateContactDto)
    {
        var data = await _context.Contacts.FirstOrDefaultAsync(m => m.Id == updateContactDto.Id);
        if (data != null)
        {
            data.Hours = updateContactDto.Hours;
            data.Days = updateContactDto.Days;
            data.PhoneNumber = updateContactDto.PhoneNumber;
            data.CafeName = updateContactDto.CafeName;
            data.OpenTitle = updateContactDto.OpenTitle;
            data.PageTitle = updateContactDto.PageTitle;
            data.Image = updateContactDto.Image;
            await _context.SaveChangesAsync();
            return true;
        }
        return false;
    }
}
