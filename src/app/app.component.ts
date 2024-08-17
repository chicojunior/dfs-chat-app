import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { DialogCustomerServiceComponent } from './dialog-customer-service/dialog-customer-service.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'DFS Chat';
  dialog = inject(MatDialog);

  openDialog() {
    this.dialog.open(DialogCustomerServiceComponent, {
      data: {
        title: 'DSF Chat',
        description: 'DSF Customer Service Chat',
      },
    });
  }
}
