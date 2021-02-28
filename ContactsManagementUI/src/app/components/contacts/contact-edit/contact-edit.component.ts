import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';
import * as contactActions from '../../../store/contact.actions';
import * as fromContact from '../../../store/contact.reducer';
import { Contact } from '../../../models/contact.model';
import { NotificationService } from '../../../services/notification.service';
import { Notification } from '../../../models/notification.model';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent implements OnInit {
  model: Contact;
  minDate: Date;
  showPopup = false;
  constructor(
    private store: Store<fromContact.AppState>, private notificationService: NotificationService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.model = new Contact();
    this.minDate = new Date();
    this.store.select(
      fromContact.getCurrentContact
    ).subscribe(cust => {
      if (cust) {
        this.model = ({ ...cust });
      }
    });
  }

  // method used to update contact
  updateContact() {
    this.store.dispatch(new contactActions.UpdateContact(this.model));
    this.store.pipe(select(fromContact.getContactUpdate)).subscribe((contactUpdated) => {
      if (contactUpdated) {
        const notification = new Notification();
        notification.message = 'Contact updated successfully';
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
