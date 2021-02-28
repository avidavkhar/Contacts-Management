import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';
import * as contactActions from '../../../store/contact.actions';
import * as fromContact from '../../../store/contact.reducer';
import { Contact } from '../../../models/contact.model';
import { NotificationService } from '../../../services/notification.service';
import { Notification } from '../../../models/notification.model';

@Component({
  selector: 'app-contact-add',
  templateUrl: './contact-add.component.html',
  styleUrls: ['./contact-add.component.css']
})
export class ContactAddComponent implements OnInit {
  public model: Contact;
  constructor(
    private store: Store<fromContact.AppState>,
    private router: Router,
    private notificationService: NotificationService
  ) {
  }

  ngOnInit() {
    this.model = new Contact();
  }

  // method used to create new contact
  createContact() {
    this.store.dispatch(new contactActions.CreateContact(this.model));
    this.store.pipe(select(fromContact.getContactUpdate)).subscribe((contactCreated) => {
      if (contactCreated) {
        const notification = new Notification();
        notification.message = 'Contact created successfully';
        notification.showPopup = true;
        this.notificationService.showPopup(notification);
      }
    });
  }

  // method used to navigate to contacts page
  navigatetoContacts() {
    this.router.navigateByUrl('contacts');
  }
}
