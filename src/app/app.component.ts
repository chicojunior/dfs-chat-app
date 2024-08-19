import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DialogCustomerServiceComponent } from './components/dialog-customer-service/dialog-customer-service.component';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatButtonModule, MatProgressSpinnerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'DFS Chat';
  dialog = inject(MatDialog);
  isLoading = false;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {}

  openDialog() {
    this.isLoading = true;
    this.dataService.getAssistants().subscribe((assistant) => {
      this.dialog.open(DialogCustomerServiceComponent, {
        data: {
          assistant,
        },
      });

      this.isLoading = false;
    });
  }
}
