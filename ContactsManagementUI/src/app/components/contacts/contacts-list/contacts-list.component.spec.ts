import { TestBed, waitForAsync } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';
import { ContactsListComponent } from './contacts-list.component';

describe('ContactsListComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
        RouterTestingModule
      ],
      declarations: [
        ContactsListComponent
      ]
    }).compileComponents();
  }));

  it('should create the contacts list component', waitForAsync(() => {
    const fixture = TestBed.createComponent(ContactsListComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
