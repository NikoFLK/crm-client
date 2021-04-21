import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFromClientCreateComponent } from './contact-from-client-create.component';

describe('ContactFromClientCreateComponent', () => {
  let component: ContactFromClientCreateComponent;
  let fixture: ComponentFixture<ContactFromClientCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactFromClientCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactFromClientCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
