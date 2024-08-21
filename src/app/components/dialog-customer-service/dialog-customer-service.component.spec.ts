import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCustomerServiceComponent } from './dialog-customer-service.component';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DialogCustomerServiceComponent', () => {
  let component: DialogCustomerServiceComponent;
  let fixture: ComponentFixture<DialogCustomerServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        MatDialogModule,
        DialogCustomerServiceComponent,
      ],
      providers: [
        {
          provide: MAT_DIALOG_DATA,
          useValue: { assistant: { name: 'Test Name' } },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DialogCustomerServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
