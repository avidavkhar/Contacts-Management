using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ContactManagement.Models;

namespace ContactManagement.DataAssess
{
    public class ContactService : IContactService
    {
        ContactContext context;
        public ContactService(ContactContext _context)
        {
            context = _context;
        }

        /// <summary>
        /// Method used to get list of Contacts
        /// </summary>
        /// <returns></returns>
        public async Task<List<Contact>> GetContacts()
        {
            if (context != null)
            {
                return await context.Contacts.ToListAsync();
            }

            return null;
        }

        /// <summary>
        /// Method used to get contact
        /// </summary>
        /// <param name="contactId"></param>
        /// <returns></returns>
        public async Task<Contact> GetContact(int contactId)
        {
            var contact = await context.Contacts.FindAsync(contactId);

            if (contact == null)
            {
                return null;
            }
            return contact;
        }

        /// <summary>
        /// Method used to add contact
        /// </summary>
        /// <param name="contact"></param>
        /// <returns></returns>
        public async Task<int> AddContact(Contact contact)
        {
            if (context != null)
            {
                await context.Contacts.AddAsync(contact);
                await context.SaveChangesAsync();
                return contact.ContactId;
            }
            return 0;
        }

        /// <summary>
        ///  Method used to update contact
        /// </summary>
        /// <param name="contact"></param>
        /// <returns></returns>
        public async Task UpdateContact(Contact contact)
        {
            if (context != null)
            {
                context.Contacts.Update(contact);
                await context.SaveChangesAsync();
            }
        }

        /// <summary>
        /// Method used to validate existing email Id for add/update operation
        /// </summary>
        /// <param name="contact"></param>
        /// <param name="operatioType"></param>
        /// <returns></returns>
        public async Task<bool> IsEmailExits(Contact contact, string operationType)
        {
            var contacts = await context.Contacts.AsNoTracking().Where(e => e.EmailAddress == contact.EmailAddress).ToListAsync();
            var currentContact = await context.Contacts.AsNoTracking().FirstOrDefaultAsync(x=>x.ContactId == contact.ContactId);
            var isEmailExists = contacts != null && contacts.Count > 0;
            if(operationType == "newcontact")
            {
                return isEmailExists;
            }
            else if (isEmailExists && currentContact.EmailAddress != contact.EmailAddress)
            {
                return true;
            }
            return false;
        }
    }
}

