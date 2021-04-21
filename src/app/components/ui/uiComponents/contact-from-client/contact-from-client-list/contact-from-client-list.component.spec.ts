import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFromClientListComponent } from './contact-from-client-list.component';

describe('ContactFromClientListComponent', () => {
  let component: ContactFromClientListComponent;
  let fixture: ComponentFixture<ContactFromClientListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactFromClientListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactFromClientListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
