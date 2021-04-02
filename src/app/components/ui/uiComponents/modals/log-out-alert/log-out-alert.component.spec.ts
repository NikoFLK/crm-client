import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogOutAlertComponent } from './log-out-alert.component';

describe('LogOutAlertComponent', () => {
  let component: LogOutAlertComponent;
  let fixture: ComponentFixture<LogOutAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogOutAlertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogOutAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
