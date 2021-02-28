import { TestBed, waitForAsync } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { ContactEditComponent } from './contact-edit.component';
import { NotificationService } from '../../../services/notification.service';

describe('ContactEditComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
        RouterTestingModule,
        FormsModule
      ],
      declarations: [
        ContactEditComponent
      ],
      providers : [
        NotificationService
      ]
    }).compileComponents();
  }));

  it('should create the contact edit component', waitForAsync(() => {
    const fixture = TestBed.createComponent(ContactEditComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
