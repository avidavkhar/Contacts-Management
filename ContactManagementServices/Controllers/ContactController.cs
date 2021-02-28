using Microsoft.AspNetCore.Mvc;
using System;
using System.Net;
using System.Threading.Tasks;
using ContactManagement.DataAssess;
using ContactManagement.Models;

namespace ContactManagement.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactController : ControllerBase
    {
        readonly IContactService contactService;
        public ContactController(IContactService _contactService)
        {
            contactService = _contactService;
        }

        /// <summary>
        /// Get api to fetch list of contacts
        /// </summary>
        /// <returns>contacts list</returns>
        [HttpGet]
        [Route("GetContacts")]
        public async Task<IActionResult> Getcontacts()
        {
            try
            {
                var contacts = await contactService.GetContacts();
                if (contacts == null)
                {
                    return NotFound();
                }
                return Ok(contacts);
            }
            catch (Exception)
            {
                return BadRequest();
            }

        }

        /// <summary>
        /// Get api to ftech contact based on contact id
        /// </summary>
        /// <param name="contactId"></param>
        /// <returns>contact</returns>
        [HttpGet]
        [Route("GetContact")]
        public async Task<IActionResult> GetContact(int contactId)
        {
            try
            {
                if (contactId > 0)
                {
                    var contact = await contactService.GetContact(contactId);
                    if (contact == null)
                    {
                        return NotFound();
                    }
                    return Ok(contact);
                }
                else
                {
                    return Ok("method received invalid arguments");
                }
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        /// <summary>
        /// Post api to add new contact
        /// </summary>
        /// <param name="contact">contact</param>
        /// <returns>contact id</returns>
        [HttpPost]
        [Route("AddContact")]
        public async Task<IActionResult> AddContact(Contact contact)
        {
            try
            {
                var emailExists = await contactService.IsEmailExits(contact, "newcontact");
                if (contact != null && !emailExists)
                {
                    var contactId = await contactService.AddContact(contact);
                    return Ok(contactId);
                }
                else
                {
                    return BadRequest("invalid arguments or emailId already exists");
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        /// <summary>
        /// Put api to update existing contact
        /// </summary>
        /// <param name="contact">contact</param>
        /// <returns></returns>
        [HttpPut]
        [Route("UpdateContact")]
        public async Task<IActionResult> UpdateContact(Contact contact)
        {
            try
            {
                var emailExists = await contactService.IsEmailExits(contact, "updatecontact");
                if (contact != null && !emailExists) { 
                    await contactService.UpdateContact(contact);
                    return Ok();
                }
                else
                {
                    return BadRequest("invalid arguments or emailId already exists");
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }
    }
}