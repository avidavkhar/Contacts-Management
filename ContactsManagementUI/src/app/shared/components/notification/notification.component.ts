import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../../services/notification.service';
import { Notification } from '../../../models/notification.model';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import * as fromContact from '../../../store/contact.reducer';

@Component({
    selector: 'app-notification',
    templateUrl: './notification.component.html',
    styleUrls: ['./notification.component.css']
})
export class NotificationListComponent implements OnInit {

    notification: Notification;
    errorPopup = false;

    constructor(private store: Store<fromContact.AppState>, private notificationService: NotificationService, private router: Router) { }

    ngOnInit() {
        this.notification = new Notification();
        this.notificationService.getNotificationObservable().subscribe(notc => {
            this.notification = notc;
        });
        this.store.pipe(select(fromContact.getError)).subscribe(err => {
            if (err) {
                let errorMessage = '';
                if (err.status === 400) {
                    errorMessage = err.error;
                } else {
                    errorMessage = err.message;
                }
                this.notification = new Notification();
                this.notification.message = errorMessage;
                this.notification.showPopup = true;
                this.errorPopup = true;
            }
        });
    }

    // method used to navigate to contacts page
    navigateContact() {
        this.notification = new Notification();
        this.router.navigateByUrl('contacts');
    }

    // method used to close notification popup
    closePopup() {
        this.notification = new Notification();
        this.errorPopup = false;
    }
}
