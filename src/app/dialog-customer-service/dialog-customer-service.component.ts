import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-customer-service',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './dialog-customer-service.component.html',
  styleUrl: './dialog-customer-service.component.scss',
})
export class DialogCustomerServiceComponent {
  data = inject(MAT_DIALOG_DATA);
}
