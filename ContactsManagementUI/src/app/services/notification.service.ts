import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Notification } from '../models/notification.model';

@Injectable()
export class NotificationService {

  private showNotification: BehaviorSubject<Notification> = new BehaviorSubject(null);

  constructor() { }

  getNotificationObservable(): Observable<Notification> {
    return this.showNotification.asObservable();
  }

  // Method used to trigger show notification
  showPopup(notification) {
    this.showNotification.next(notification);
  }
}
