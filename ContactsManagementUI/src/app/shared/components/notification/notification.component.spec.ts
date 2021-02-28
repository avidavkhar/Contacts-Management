import { TestBed, waitForAsync } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { NotificationListComponent } from './notification.component';
import { NotificationService } from '../../../services/notification.service';

describe('NotificationListComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
        RouterTestingModule,
      ],
      declarations: [
        NotificationListComponent
      ],
      providers : [
        NotificationService
      ]
    }).compileComponents();
  }));

  it('should create the notification component', waitForAsync(() => {
    const fixture = TestBed.createComponent(NotificationListComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
