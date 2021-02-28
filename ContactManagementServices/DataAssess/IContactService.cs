using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ContactManagement.Models;

namespace ContactManagement.DataAssess
{
    public interface IContactService { 
        Task<List<Contact>> GetContacts();
        Task<Contact> GetContact(int contactId);
        Task<int> AddContact(Contact contact);
        Task UpdateContact(Contact contact);
        Task<bool> IsEmailExits(Contact contact, string operationType);
    }
}