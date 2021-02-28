using System;
using System.Collections.Generic;

#nullable disable

namespace ContactManagement.Models
{
    public class Contact
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string EmailAddress { get; set; }
        public int ContactId { get; set; }
        public DateTime Dob { get; set; }
    }
}
