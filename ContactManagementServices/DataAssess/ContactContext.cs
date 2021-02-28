using Microsoft.EntityFrameworkCore;
using ContactManagement.Models;
using ContactManagement.Constants;

namespace ContactManagement.DataAssess
{
    public class ContactContext : DbContext
    {
        public ContactContext(DbContextOptions<ContactContext> options) : base(options)
        {
        }
        public DbSet<Contact> Contacts { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Contact>().ToTable(ContactConstant.CONTACT_TABLE);
        }
    }
}