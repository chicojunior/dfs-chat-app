import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCustomerServiceComponent } from './dialog-customer-service.component';

describe('DialogCustomerServiceComponent', () => {
  let component: DialogCustomerServiceComponent;
  let fixture: ComponentFixture<DialogCustomerServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogCustomerServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogCustomerServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
