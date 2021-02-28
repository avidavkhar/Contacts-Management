import { ContactsModule } from './contacts.module';

describe('ContactsModule', () => {
  let contactsModule: ContactsModule;

  beforeEach(() => {
    contactsModule = new ContactsModule();
  });

  it('should create an contact module instance', () => {
    expect(contactsModule).toBeTruthy();
  });
});
