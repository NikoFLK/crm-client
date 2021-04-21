import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFromClientUpdateComponent } from './contact-from-client-update.component';

describe('ContactFromClientUpdateComponent', () => {
  let component: ContactFromClientUpdateComponent;
  let fixture: ComponentFixture<ContactFromClientUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactFromClientUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactFromClientUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
