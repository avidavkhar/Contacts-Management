import { TestBed, waitForAsync } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { ContactAddComponent } from './contact-add.component';
import { NotificationService } from '../../../services/notification.service';

describe('ContactAddComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
        RouterTestingModule,
        FormsModule
      ],
      declarations: [
        ContactAddComponent
      ],
      providers : [
        NotificationService
      ]
    }).compileComponents();
  }));

  it('should create the add contact component', waitForAsync(() => {
    const fixture = TestBed.createComponent(ContactAddComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
